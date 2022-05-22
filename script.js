THREE.Cache.enabled = true;

const loader = new THREE.ObjectLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, 2, 1, 200);

const renderer = new THREE.WebGLRenderer({ alpha: true } );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();

console.log(geometry)
const material = new THREE.MeshBasicMaterial( { color: '#000000' } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

scene.rotation.y = 0;
console.log(camera.position);

console.log(camera.position);

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
	
	let x = 0;
	let y = 0;
	camera.position.z = (-25) * Math.cos(Math.PI * x) + 75;
	
	function animate() {
		requestAnimationFrame( animate );
		x += 0.004;
		y += 0.001;
		scene.rotation.y = (2 * Math.PI * y)
		// needs to hit 100 and back again every half rotation
		// camera.position.z = (-25) * Math.cos(Math.PI * x) + 75;
		// console.log(scene.rotation.y)
		
		// console.log(camera.position)
		
		// 
		


	// console.log(camera.position.z)

  renderer.render( scene, camera );
};

animate();