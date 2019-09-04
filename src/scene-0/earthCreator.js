import * as THREE from "three";
// import ObjectControls from '@/utils/ObjectControls';
import { createPlanet } from '@/utils/planetCreator';

export function createEarth({ scene, camera, renderer }, props = {}) {
  let earth = createPlanet({
    surface: {
      size: 0.35,
      material: {
        bumpScale: 0.05,
        specular: new THREE.Color("grey"),
        shininess: 10
      },
      textures: {
        map:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg",
        bumpMap:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg",
        specularMap:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg"
      }
    },
    atmosphere: {
      size: 0.003,
      material: {
        opacity: 0.8
      },
      textures: {
        map:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmap.jpg",
        alphaMap:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthcloudmaptrans.jpg"
      },
      glow: {
        size: 0.02,
        intensity: 0.5,
        fade: 7.9,
        color: 0x93cfef
      }
    }
  }, { renderer, camera });

  // Mesh Configurations
  earth.receiveShadow = true;
  earth.castShadow = true;
  earth.getObjectByName("surface").geometry.center();

  window._earth = earth;
  window._camera = camera;

//   const controls = new ObjectControls(camera, renderer.domElement, earth);
//   controls.enabled = true;
//   controls.setDistance(8, 200); // set min - max distance for zoom
//   controls.setZoomSpeed(0.5); // set zoom speed
//   controls.enableVerticalRotation();
//   controls.setMaxVerticalRotationAngle(Math.PI / 4, Math.PI / 4);
//   controls.setRotationSpeed(0.05);

  return earth;
}
