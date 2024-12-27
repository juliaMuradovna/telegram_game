import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import BottomNavigation from '../components/BottomNavigation';
import CardsList from "../components/CardsList";
import LevelInfo from "../components/LevelInfo";
import Gifts from "../components/Gifts";
import { ReactComponent as HandIcon } from "../assets/icons/hand.svg";

function Earnings() {
  return (
    <div className="wrapper">
      <HeaderMenu />
      <div id="main_content">
        <div className="content_container">
          <CardsList />
          <LevelInfo />
          <Gifts />
          <div className="hand">
            <HandIcon />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Earnings;
