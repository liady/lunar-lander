import * as THREE from 'three';
import { useEffect } from 'react';
import { useThree } from 'ThreeJSManager';
import { createEarth } from './earthCreator';

const Earth = props => {
  const setup = context => {
    const { scene, camera, renderer } = context;
    const earth = createEarth({ scene, camera, renderer });
    scene.add(earth);
    return earth;
  }

  const { getEntity, timer, camera } = useThree(setup);
  useEffect(
    () => {
      const earth = getEntity();
      earth.getObjectByName('surface').rotation.y += 1/32 * 0.01;
      earth.getObjectByName('atmosphere').rotation.y += 1/16 * 0.01;
          // cameraRotation += 0.001;
    // camera.position.y = -0.25;
    // camera.position.x = 2 * Math.sin(cameraRotation);
    // camera.position.z = 2 * Math.cos(cameraRotation);
      // camera.lookAt(earth.position);
    },
    [timer],
  );

  return null;
}

const Earth2 = props => {
  const { h = 50, w = 50, d = 50, color = 0x00ff00 } = props;

  const setup = context => {
    const { scene } = context;
    const cubegeometry = new THREE.BoxGeometry(h, w, d);
    const cubematerial = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(cubegeometry, cubematerial);
    cube.castShadow = true;
    cube.position.y = 50;
    scene.add(cube);

    return cube;
  };

  const { getEntity, timer } = useThree(setup);

  useEffect(
    () => {
      const cube = getEntity();
      cube.material.color.setHex(props.color);
    },
    [props.color],
  );

  useEffect(
    () => {
      const cube = getEntity();
      const oscillator = Math.sin(timer / 1000) * Math.PI - Math.PI;
      cube.rotation.y = oscillator;
      cube.rotation.z = -oscillator;
    },
    [timer],
  );

  return null;
};

export default Earth;
