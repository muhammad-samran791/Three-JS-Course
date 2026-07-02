import * as THREE from "three";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const size = {
  width: 800,
  height: 600,
};

const aspectRatio = size.width / size.height;

// const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 1, 3.3);
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100,
);

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;

camera.lookAt(mesh.position);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(size.width, size.height);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = elapsedTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
