import React, { useState } from "react";
import SceneManager from "ThreeJSManager";
import Earth from "./Earth.js";
import CameraControls from "./CameraControls";
import { getCamera, getRenderer, getScene } from "./threeSetup";

const Universe = () => {
  const [color, changeColor] = useState("0000ff");

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
      <Earth color={Number(`0x${color}`)} />
      <div
        style={{
          width: "100px",
          padding: "10px"
        }}
      >
      </div>
    </SceneManager>
  );
};

export default Universe;
