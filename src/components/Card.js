import React from 'react';
import './../styles/Game.css';

const Card = (props) => {

  const src = props.src;
  let isStockpile = props.isStockpile;
  if (isStockpile === null) isStockpile = false;

  return (
    <div
      className={[isStockpile ? 'stockpile-card-container' : 'card-container']}
    >
      <img
        alt='card'
        draggable='false'
        className={isStockpile ? 'stockpile-card' : 'card'}
        style={{ backgroundColor: props.cardColor, borderColor: props.cardBorderColor }}
        src={src}
      />
    </div>
  );
};

export default Card;