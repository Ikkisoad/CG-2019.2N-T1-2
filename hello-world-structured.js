//SCENE
var scene = new THREE.Scene();
scene.background = new THREE.Color('#3d3d3d');

//CAMERA
const fov = 35;
const aspect = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 100;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0,0,10);
camera.position.z = 5;

//RENDERER
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//CUBE
var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
//var material = new THREE.MeshBasicMaterial({color: 0xff0000});
var material = new THREE.MeshStandardMaterial({color: 0xff0000});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a directional light
const light = new THREE.DirectionalLight( 0xffffff, 5.0 );
// move the light back and up a bit
light.position.set( 10, 10, 10 );
// remember to add the light to the scene
scene.add( light );

var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
};

animate();