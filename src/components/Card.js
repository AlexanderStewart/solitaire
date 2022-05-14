import React from 'react';
import './../styles/Game.css';

const Card = (props) => {

  const card = props.card;
  const cardName = card.name;
  const src = props.src;

  return (
    <div
      className='card-container'
    >
      <img
        alt='card'
        draggable='false'
        className='card'
        src={src}
      />
    </div>
  );
};

export default Card;