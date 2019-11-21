import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { Scene } from './Scene';
import { Plane } from './Plane';

const SIZE_X = 250;
const SIZE_Y = 150;
const SEGMENTS_X = 190;
const SEGMENTS_Y = 100;
const AMPLITUDE = 10.0;
const FREQUENCY = 0.05;
const SLOWING_SPEED = 4600;

export function createGlitchCanvas(root: HTMLElement) {
  let renderer: THREE.WebGLRenderer;
  let composer: EffectComposer;
  let glitchPass: GlitchPass;
  let scene: Scene;
  let plane: Plane;

  let DELTA_TIME = 0;
  let LAST_TIME = Date.now();

  function onWindowResize() {
    renderer.setSize(root.clientWidth, root.clientHeight);
    composer.setSize(root.clientWidth, root.clientHeight);
    plane.update(DELTA_TIME, [root.clientWidth, root.clientHeight]);
  }

  function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(root.clientWidth, root.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    composer = new EffectComposer(renderer);

    scene = new Scene(root.clientWidth, root.clientHeight);
    plane = new Plane({
      resolution: [root.clientWidth, root.clientHeight],
      amplitude: AMPLITUDE,
      frequency: FREQUENCY,
      sizeX: SIZE_X,
      sizeY: SIZE_Y,
      segmentsX: SEGMENTS_X,
      segmentsY: SEGMENTS_Y,
      slowingSpeed: SLOWING_SPEED,
    });

    scene.add(plane.mesh);

    composer.addPass(new RenderPass(scene, scene.camera));

    glitchPass = new GlitchPass();
    composer.addPass(glitchPass);

    root.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    DELTA_TIME = Date.now() - LAST_TIME;
    LAST_TIME = Date.now();
    plane.update(DELTA_TIME, [root.clientWidth, root.clientHeight]);
    composer.render(DELTA_TIME);
  }

  return {
    init,
    animate,
    removeEventListeners() {
      window.removeEventListener('resize', onWindowResize);
    },
  };
}
