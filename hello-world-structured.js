//let controls;

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

/*function createControls() {

    controls = new THREE.OrbitControls( camera, window );
  
  }

createControls();*/

//RENDERER
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//LIGHT
/*const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
scene.add( ambientLight );
const mainLight = new THREE.DirectionalLight( 0xffffff, 1 );
mainLight.position.set( 10, 10, 10 );
scene.add( ambientLight, mainLight );*/
const ambientLight = new THREE.HemisphereLight(
    0xddeeff, // bright sky color
    0x202020, // dim ground color
    3, // intensity
);

scene.add( ambientLight );

// create a texture loader.
const textureLoader = new THREE.TextureLoader();

  // Load a texture. See the note in chapter 4 on working locally, or the page
  // https://threejs.org/docs/#manual/introduction/How-to-run-things-locally
  // if you run into problems here
  const texture = textureLoader.load( 'img/uv.png' );
  // set the "color space" of the texture
  texture.encoding = THREE.sRGBEncoding;
  // reduce blurring at glancing angles
  texture.anisotropy = 16;

  // create a Standard material using the texture we just loaded as a color map
  const material = new THREE.MeshStandardMaterial( {
    map: texture,
  } );

  //CUBE
    var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
    //var material = new THREE.MeshStandardMaterial({color: 0xff0000});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

/*var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
};*/

function update() {

    // increase the mesh's rotation each frame
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

}

function render() {

    renderer.render( scene, camera );

}

 // start the animation loop
 renderer.setAnimationLoop( () => {

    update();
    render();

  } );

//animate();