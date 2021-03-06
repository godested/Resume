import * as THREE from 'three';

export class Scene extends THREE.Scene {
  renderer: THREE.WebGLRenderer;

  cameraAspect: number;

  camera: THREE.PerspectiveCamera;

  constructor(width: number, height: number) {
    super();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(width, height);

    this.cameraAspect = width / height;
    this.camera = new THREE.PerspectiveCamera(50, this.cameraAspect, 1, 2000);
    this.camera.position.z = 50;
  }

  render() {
    this.renderer.autoClearColor = true;
    this.renderer.render(this, this.camera);
  }

  resize(newWidth: number, newHeight: number) {
    this.camera.aspect = newWidth / newHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(newWidth, newHeight);
  }
}
