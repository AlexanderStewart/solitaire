import React from 'react';
import './../styles/Game.css';

const Card = (props) => {

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