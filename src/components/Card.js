import React from 'react';
import Utils from '../helpers/Utils';
import * as icons from '../assets/icons/payments';
import { ReactComponent as CardChipIcon } from "../assets/icons/card-chip.svg";

function Card(props) {
  const { card } = props;

  const Icon = icons[`${card.type}Icon`] || 'div';

  return (
    <div className="credit_card">
      <div>
        <div>
        <div className="info">
          <div>
            <Icon />
            <div className="credentials">
              <span className="number">{card.number}</span>
              <span className="expire_date">{`${card.month}/${card.year}`}</span>
            </div>
          </div>
          <div className="shop">
            Shop
          </div>
        </div>
        <div className="chip">
          <CardChipIcon />
        </div>
        </div>
        <div className="balance_container">
          <div className="balance">
            Balance
            <p>{Utils.currencyFormat(card.balance, card.currency)}</p>
          </div>
          <div className="level">
            {card.level}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
