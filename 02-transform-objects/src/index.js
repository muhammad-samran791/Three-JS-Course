import * as THREE from "three";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
box1.position.set(-2.1, 0, 0);

// box1.scale.x = 0;

const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
);
box2.rotation.set(2, 0, 2);

const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);
box3.position.set(2.1, 0, 0);

group.add(box1, box2, box3);

// group.position.y = 1.2;
// group.rotation.y = Math.PI;

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const mesh = new THREE.Mesh(geometry, material);

// mesh.scale.set(2, 0.25, 0.5);

// mesh.rotation.reorder("ZYX");

// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;

// mesh.position.set(0.7, -0.6, 1);
// scene.add(mesh);

// mesh.position.normalize();

// console.log(mesh.position.length());

const size = {
  width: 1000,
  height: 800,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// camera.lookAt(mesh.position);

// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

// console.log(mesh.position.distanceTo(camera.position));

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
