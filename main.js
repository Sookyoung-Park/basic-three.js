import * as THREE from 'three';

// 1. Create the scene
const scene=new THREE.scene()
scene.background = new THREE.Color('#f0f0f0')

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive:'#468585'});
const myCube = new THREE.Mesh(geometry, material);
scene.add(myCube);

// 4. Add lighting
const light= new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

// 5. Setup Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the Scene
function animate(){
    requestAnimationFrame(animate);
    myCube.rotation.x += 0.1;
    myCube.rotation.y += 0.1;

    renderer.render(scene, camera);
}
animate();