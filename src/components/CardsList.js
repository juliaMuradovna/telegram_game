import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

const data = [{
  id: 1,
  number: '**** **** **** 3389',
  year: '25',
  month: '09',
  balance: 5750.20,
  currency: 'USD',
  type: 'Mastercard',
  level: 'Silver',
}, {
  id: 2,
  number: '**** **** **** 1289',
  year: '25',
  month: '09',
  balance: 235.90,
  currency: 'USD',
  type: 'Mastercard',
  level: 'Silver',
}];
const settings = {
  className: 'slider variable-width',
  dots: true,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

function CardsList() {
  return (
    <div id="cards_list_wrapper">
      <Slider {...settings}>
        {data.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <div className="credit_card credit_card_add_new">
          <div>

          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CardsList;
