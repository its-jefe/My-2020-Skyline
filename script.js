THREE.Cache.enabled = true;

const loader = new THREE.ObjectLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, 2, 1, 200);

const renderer = new THREE.WebGLRenderer({ alpha: true } );
renderer.setSize(window.innerWidth, (window.innerWidth/1.618));
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: '#000000' } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 80;
camera.position.y = 2.5;
camera.position.x = 0;
// camera.zoom(1.2);

// console.log(camera)

loader.load(
	// resource URL
	"./model.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		// console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);

// console.log(scene)

function animate() {
  requestAnimationFrame( animate );

  // scene.rotation.x += 0.01;
  scene.rotation.y += 0.005;

  renderer.render( scene, camera );
};

animate();