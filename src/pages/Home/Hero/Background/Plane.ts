import * as THREE from 'three';
import planeVS from 'core/shaders/planeVS';
import planeFS from 'core/shaders/planeFS';

type Resolution = [number, number];

interface ValueObject<T> {
  value: T;
}

interface Uniforms {
  /* eslint-disable @typescript-eslint/camelcase */
  u_amplitude: ValueObject<number>;
  u_frequency: ValueObject<number>;
  u_resolution: ValueObject<Resolution>;
  u_time: ValueObject<number>;
  /* eslint-enable */
}

interface Options {
  resolution: Resolution;
  amplitude: number;
  frequency: number;
  sizeX: number;
  sizeY: number;
  segmentsX: number;
  segmentsY: number;
  slowingSpeed: number;
}

export class Plane {
  uniforms: Uniforms;

  geometry: THREE.PlaneBufferGeometry;

  material: THREE.ShaderMaterial;

  mesh: THREE.Mesh;

  slowingSpeed: number;

  constructor(options: Options) {
    this.uniforms = {
      /* eslint-disable @typescript-eslint/camelcase */
      u_amplitude: { value: options.amplitude },
      u_frequency: { value: options.frequency },
      u_resolution: { value: options.resolution },
      u_time: { value: 0.0 },
      /* eslint-enable */
    };

    this.geometry = new THREE.PlaneBufferGeometry(
      options.sizeX,
      options.sizeY,
      options.segmentsX,
      options.segmentsY
    );

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: planeVS,
      fragmentShader: planeFS,
      side: THREE.DoubleSide,
      wireframe: true,
    });

    this.slowingSpeed = options.slowingSpeed;

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = 360;
  }

  update(dt: number, resolution: Resolution) {
    this.uniforms.u_time.value += dt / this.slowingSpeed;
    this.uniforms.u_resolution.value = resolution;
  }
}
