import React, { useState } from 'react';

import { Avatar } from "../components/Avatar";
import { Canvas } from "@react-three/fiber";
import Powers from "../components/Powers";
import HeaderMenu from "../components/HeaderMenu";

function Game() {
  const [animation, setAnimation] = useState('waiting');

  return (
    <>
    <HeaderMenu />

    <div id="game">
      <div className="personage" onClick={() => setAnimation('tapping')}>
          <Canvas shadows camera={{ position: [0, 5, 5], fov: 30 }}>
            <Avatar animation={animation} />
            <ambientLight intensity={1} />
          </Canvas>

      </div>
      <Powers />

    </div>
    </>
  );
}

export default Game;
