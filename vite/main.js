import * as THREE from 'three';

// create canvas
const canvas = document.getElementById('canvas');

// scene
const scene = new THREE.Scene();
Scene.background = new THREE.background('f0f0f0');

// camera
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z =5;

// obejct
const geometry= new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasictMaterial({color: '#468585'});
const myObj1 = new THREE.Mesh(geometry,material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1,2);
const boxMaterial = new THREE.MeshBasictMaterial({color: '#B4B4B3'});
const myObj2= new THREE.Mesh(boxGeometry, boxMaterial);
myObj2.position.y=-1.5;

scene.add(myObj1);
scene.add(myObj2);

// light
const light= new THREE.DirectionalLight(0x006769, 100); 
light.position.set(1,1,1);
scene.add(light); 

// renderer
const renderer = new THREE.WebGL1Renderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);



