import * as THREE from 'three';
import OrbitControlsDefault from 'three-orbit-controls';
import { useThree } from 'ThreeJSManager';

const OrbitControls = OrbitControlsDefault(THREE);

const CameraControls = () => {
  useThree(({ camera, canvas }) => {
    const controls = new OrbitControls(camera, canvas);
    controls.enabled = true;
  });

  return null;
};

export default CameraControls;
