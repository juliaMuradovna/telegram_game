import React, { useState } from 'react';

import { Avatar } from "../components/Avatar";
import { Canvas } from "@react-three/fiber";
import Powers from "../components/Powers";
import HeaderMenu from "../components/HeaderMenu";
import UsersListModal from "../components/UsersListModal";
import FightingUser from "../components/FightingUser";

function Game() {
  const [chooseUserModal, setChooseUserModal] = useState(false);
  const [fightingUserModal, setFightingUserModal] = useState(false);

  console.log(fightingUserModal)
  return (
    <>
      <HeaderMenu />

      <div id="game">
        <div className="personage">
          <Canvas shadows camera={{ position: [0, 5, 5], fov: 30 }}>
            <Avatar animation="waiting" />
            <ambientLight intensity={1} />
          </Canvas>

        </div>
        <div className="fight_button">
          <button onClick={() => setChooseUserModal(true)}>Бой</button>
        </div>
        <Powers />
        {chooseUserModal ?
          (<UsersListModal
            onFight={() => setFightingUserModal(true)}
            onClose={() => setChooseUserModal(false)}
          />)
          : null}
        {fightingUserModal ? <FightingUser /> : null}
      </div>
    </>
  );
}

export default Game;
