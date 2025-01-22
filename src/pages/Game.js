import React, { useCallback } from 'react';
  import manImg from '../assets/icons/young-man.png'
import { ReactComponent as HealthIcon } from "../assets/icons/health-svgrepo-com.svg";
import { ReactComponent as StrengthIcon } from "../assets/icons/strength-svgrepo-com.svg";
import { ReactComponent as PowerIcon } from "../assets/icons/spinner-fidget-svgrepo-com.svg";

function Game() {
  const [health, setHealth] = React.useState(0);

  const addHealth = useCallback(() => {
    setHealth(health + 1);
  }, [health]);

  return (
    <div id="game">
      <div className="username">
        <p>Антон Попов </p>
      </div>
      <div className="actions">
        <div className="health">
          <HealthIcon />
          <p>Здоровье</p>
          <span>{health}</span>
        </div>
        <div className="power">
          <StrengthIcon />
          <p>Сила</p>
          <span>0</span>

        </div>
        <div className="spinner">
          <PowerIcon />
          <p>Spin to win </p>
          <span>12:00</span>

        </div>
      </div>
      <div className="men">
        <div>
        <img src={manImg} alt="" onClick={addHealth}/>
        </div>
      </div>
    </div>
  );
}

export default Game;
