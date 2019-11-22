import * as THREE from 'three';
import planeVS from './planeVS';
import planeFS from './planeFS';

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
  radius: number;
  frequency: number;
  slowingSpeed: number;
}

export class Sphere {
  uniforms: Uniforms;

  geometry: THREE.SphereBufferGeometry;

  material: THREE.ShaderMaterial;

  mesh: THREE.Mesh;

  slowingSpeed: number;

  constructor(options: Options) {
    this.uniforms = {
      /* eslint-disable @typescript-eslint/camelcase */
      u_amplitude: { value: options.amplitude },
      u_frequency: { value: options.frequency },
      u_resolution: { value: options.resolution },
      u_time: { value: 0 },
      /* eslint-enable */
    };

    this.geometry = new THREE.SphereBufferGeometry(
      options.radius,
      options.radius * 20,
      options.radius * 20
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
  }

  update(dt: number, resolution: Resolution) {
    this.uniforms.u_time.value += dt / this.slowingSpeed;
    this.mesh.rotation.y += dt / this.slowingSpeed / 2;
    this.mesh.rotation.z += dt / this.slowingSpeed / 2;
    this.mesh.rotation.x += dt / this.slowingSpeed / 2;

    this.uniforms.u_resolution.value = resolution;
  }
}
