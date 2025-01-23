import React from 'react';
import { ReactComponent as CoinIcon } from "../assets/icons/coin.svg";

function CurrentCoins(props) {
  return (
    <div id="current_coins">
        <CoinIcon />
        <p>100</p>
    </div>
  );
}

export default CurrentCoins;
