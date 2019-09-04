import React, { useState } from "react";
import SceneManager from "ThreeJSManager";
import Earth from "./Earth.js";
import CameraControls from "./CameraControls";
import { getCamera, getRenderer, getScene } from "./threeSetup";

const Universe = () => {
  return (
    <SceneManager
      getCamera={getCamera}
      getRenderer={getRenderer}
      getScene={getScene}
      canvasStyle={{
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: -1
      }}
    >
      <CameraControls />
      <Earth />
    </SceneManager>
  );
};

export default Universe;
