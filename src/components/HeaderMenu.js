import React from 'react';
import { ReactComponent as PokerChipIcon } from '../assets/icons/poker-chip.svg';
import { ReactComponent as MarketplaceIcon } from '../assets/icons/marketplace.svg';
import { ReactComponent as PromotionIcon } from '../assets/icons/promotion.svg';
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg';
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <div id="header_menu">
      <LogoIcon fill="#FFF" />
      <ul className="navigation">
        <li>
          <Link to="/">
            <PokerChipIcon fill="#FFF" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <PromotionIcon fill="#FFF" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <MarketplaceIcon fill="#FFF" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
