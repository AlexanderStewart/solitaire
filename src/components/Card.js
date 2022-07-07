import React from 'react';
import './../styles/Game.scss';

const Card = (props) => {

  const src = props.src;
  const index = props.index;
  const isStockpile = props.isStockpile;
  if (isStockpile === null) isStockpile = false;

  return (
    <div
      className={[isStockpile ? 'stockpile-card-container' : 'card-container']}
    >
      <img
        alt='card'
        draggable='false'
        className={isStockpile ? 'stockpile-card' : 'card'}
        src={src}
      />
    </div>
  );
};

export default Card;