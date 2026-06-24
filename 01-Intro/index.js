const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const size = {
  width: 700,
  height: 500,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 40;
camera.position.x = 20;
scene.add(camera);

const target = document.getElementById("target");
const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
