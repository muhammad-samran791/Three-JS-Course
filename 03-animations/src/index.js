import * as THREE from "three";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();

const demoEnvMap = new THREE.CubeTextureLoader().load([
  "https://threejs.org/examples/textures/cube/pisa/px.png",
  "https://threejs.org/examples/textures/cube/pisa/nx.png",
  "https://threejs.org/examples/textures/cube/pisa/py.png",
  "https://threejs.org/examples/textures/cube/pisa/ny.png",
  "https://threejs.org/examples/textures/cube/pisa/pz.png",
  "https://threejs.org/examples/textures/cube/pisa/nz.png",
]);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  color: "white",
  envMap: demoEnvMap,
});

const box = new THREE.Mesh(geometry, material);

scene.add(box);

const size = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(size.width, size.height);
// let time = Date.now();

const clock = new THREE.Clock();

const tick = () => {
  renderer.render(scene, camera);

  // let currentTime = Date.now();
  // let delta = currentTime - time;
  // time = currentTime;

  const elapsedTime = clock.getElapsedTime();

  box.rotation.x = elapsedTime;
  box.rotation.y = elapsedTime;
  box.rotation.z = elapsedTime;
  box.position.x = Math.sin(elapsedTime);
  box.position.y = Math.cos(elapsedTime);
  // camera.lookAt(box.position);
  window.requestAnimationFrame(tick);
};

tick();
