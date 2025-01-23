import React from 'react';
import { ReactComponent as HealthIcon } from "../assets/icons/health-svgrepo-com.svg";
import { ReactComponent as StrengthIcon } from "../assets/icons/strength-svgrepo-com.svg";
import { ReactComponent as PowerIcon } from "../assets/icons/spinner-fidget-svgrepo-com.svg";

function Powers(props) {

  const [health, setHealth] = React.useState(0);

  return (
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
  );
}

export default Powers;
