import React, { useCallback, useState } from 'react';
import Modal from "react-modal";
import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber";

const animations = ['hitting1', 'tapping']

function FightingUser(props) {
  const { onClose } = props;
  const [animation, setAnimation] = useState('waiting');
  const [count, setCount] = useState(0);

  const handleFight = useCallback(() => {
    if (count < 4) {
      setCount(count + 1);
    } else {
      setCount(0)
    }
    setAnimation(animations[count]);
  }, [count])

  return (
    <Modal onRequestClose={onClose} isOpen overlayClassName="tg_modal_overlay" className="tg_modal users_modal">
      <div id='fighting_user'>
        <Canvas shadows camera={{ position: [0, 5, 5], fov: 30 }} onClick={handleFight}>
          <Avatar animation={animation} />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
    </Modal>
  );
}

export default FightingUser;
