import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { Scene } from './Scene';
import { Sphere } from './Plane';

const AMPLITUDE = 1.2;
const FREQUENCY = 0.2;
const SLOWING_SPEED = 4600;
const RADIUS = 12;

export function createCanvas(root: HTMLElement) {
  let renderer: THREE.WebGLRenderer;
  let composer: EffectComposer;
  let glitchPass: GlitchPass;
  let scene: Scene;
  let sphere: Sphere;

  let DELTA_TIME = 0;
  let LAST_TIME = Date.now();

  function onWindowResize() {
    renderer.setSize(root.clientWidth, root.clientHeight);
    composer.setSize(root.clientWidth, root.clientHeight);
    scene.resize(root.clientWidth, root.clientHeight);
    sphere.update(DELTA_TIME, [root.clientWidth, root.clientHeight]);
  }

  function init() {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(root.clientWidth, root.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    composer = new EffectComposer(renderer);

    scene = new Scene(root.clientWidth, root.clientHeight);
    sphere = new Sphere({
      resolution: [root.clientWidth, root.clientHeight],
      amplitude: AMPLITUDE,
      frequency: FREQUENCY,
      radius: RADIUS,
      slowingSpeed: SLOWING_SPEED,
    });

    scene.add(sphere.mesh);

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
    sphere.update(DELTA_TIME, [root.clientWidth, root.clientHeight]);
    composer.render(DELTA_TIME);
  }

  return {
    init,
    animate,
    destroy() {
      window.removeEventListener('resize', onWindowResize);
    },
  };
}
