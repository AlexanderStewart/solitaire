import React from 'react';
import './../styles/Game.scss';

const Card = (props) => {

  const src = props.src;

  return (
    <div
      className='place-holder-container'
    >
      <img
        alt='card'
        draggable='false'
        className='place-holder'
        src={src}
      />
    </div>
  );
};

export default Card;