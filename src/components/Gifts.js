import React, { useState } from 'react';
import { ReactComponent as GiftIcon } from '../assets/icons/gift.svg';
import rocketIcon from '../assets/icons/rocket.png';
import BoostModal from './BoostModal';

function Gifts() {
  const [showBoost, setShowBoost] = useState(false);
  return (
    <div id="gifts">
      <GiftIcon />
      <div className="boost" onClick={() => setShowBoost(true)}>
        <img src={rocketIcon} alt="rocket_icon" />
        <span>Click boost</span>
      </div>
      {showBoost ? <BoostModal onClose={setShowBoost} /> : null}
    </div>
  );
}

export default Gifts;
