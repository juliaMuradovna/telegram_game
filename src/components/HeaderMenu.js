import React from 'react';
import CurrentCoins from "./CurrentCoins";
import User from "./User";
import Level from "./Level";

function HeaderMenu() {
  return (
    <div id="header_menu">
      <CurrentCoins />
      <User />
      <Level />
    </div>
  );
}

export default HeaderMenu;
