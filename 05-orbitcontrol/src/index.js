// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// const canvas = document.getElementById("canvas");

// const size = {
//   width: 800,
//   height: 600,
// };

// // const cursor = {
// //   x: 0,
// //   y: 0,
// // };

// // window.addEventListener("mousemove", (event) => {
// //   cursor.x = event.clientX / size.width - 0.5;
// //   cursor.y = -1 * (event.clientY / size.height - 0.5);
// // });

// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);

// const material = new THREE.MeshBasicMaterial({ color: "red" });

// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   size.width / size.height,
//   0.1,
//   100,
// );

// // camera.position.x = cursor.x;
// // camera.position.y = cursor.y;
// camera.position.z = 2;

// const control = new OrbitControls(camera, canvas);
// control.enableDamping = true;

// scene.add(camera);

// const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// renderer.setSize(size.width, size.height);

// const clock = new THREE.Clock();

// const tick = () => {
// const elapsedTime = clock.getElapsedTime();

//   // mesh.rotation.y = elapsedTime;
//   // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
//   // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
//   // camera.position.y = cursor.y * 3;

//   // camera.lookAt(mesh.position);

//   control.update();

//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

// tick();

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const webgl = document.querySelector(".webgl");

const size = {
  width: 800,
  height: 600,
};

// const cursor = {
//   x: 0,
//   y: 0,
// };

// window.addEventListener("mousemove", (event) => {
//   cursor.x = event.clientX / size.width - 0.5;
//   cursor.y = -1 * (event.clientY / size.height - 0.5);
// });

const scene = new THREE.Scene();

const geometery = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometery, material);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);

camera.position.z = 2;

scene.add(camera);

const control = new OrbitControls(camera, webgl);
control.enableDamping = true;

const renderer = new THREE.WebGLRenderer({ canvas: webgl });

renderer.setSize(size.width, size.height);

const time = new THREE.Clock();

const tick = () => {
  const elapsedTime = time.getElapsedTime();

  // mesh.rotation.x = elapsedTime;
  // mesh.rotation.y = elapsedTime;
  // mesh.rotation.z = elapsedTime;

  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // camera.position.y = cursor.y * 3;

  // camera.position.x = cursor.x;
  // camera.position.y = cursor.y;

  // camera.lookAt(mesh.position);

  control.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
