import * as THREE from "three";

export const getCamera = ({ offsetWidth, offsetHeight }) => {
  let aspect = offsetWidth / offsetHeight;
  let camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
  camera.position.set(1, 1, 1);

  return camera;
};

export const getRenderer = canvas => {
  const context = canvas.getContext("webgl");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    context,
    antialias: true,
    autoSize: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);

  return renderer;
};

export const getScene = () => {
  let scene = new THREE.Scene();

  // Lights
  let spotLight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);
  scene.add(spotLight);
  spotLight.position.set(2, 0, 1);

  // Galaxy
  let textureLoader = new THREE.CubeTextureLoader();
  textureLoader.crossOrigin = true;
  scene.background = textureLoader.load(
    [
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_left.png',
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_right.png',
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_left.png',
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_right.png',
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_left.png',
      'https://liad-lecture.s3.amazonaws.com/galaxy_starfield_right.png'
    ]
  );
  
  // let galaxyGeometry = new THREE.SphereGeometry(100, 32, 32);
  // let galaxyMaterial = new THREE.MeshBasicMaterial({
  //   side: THREE.BackSide
  // });
  // let galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);

  // // Load Galaxy Textures
  // let textureLoader = new THREE.TextureLoader();
  // textureLoader.crossOrigin = true;
  // textureLoader.load(
  //   "https://liad-lecture.s3.amazonaws.com/galaxy_starfield.png",
  //   function(texture) {
  //     galaxyMaterial.map = texture;
  //     scene.add(galaxy);
  //   }
  // );
  return scene;
};

// function createSkybox(texture) {
//   var size = 15000;

//   var cubemap = THREE.ShaderLib.cube;
//   cubemap.uniforms.tCube.value = texture;

//   var mat = new THREE.ShaderMaterial({
//       fragmentShader: cubemap.fragmentShader,
//       vertexShader: cubemap.vertexShader,
//       uniforms: cubemap.uniforms,
//       depthWrite: false,
//       side: THREE.BackSide
//   });

//   var geo = new THREE.CubeGeometry(size, size, size);
//   var mesh = new THREE.Mesh(geo, mat);
  
//   return mesh;
// }