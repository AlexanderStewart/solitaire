
import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import './../styles/Game.css';

const CardDraggable = (props) => {

  const card = props.card;
  const src = props.src;
  const fromColData = props.fromColData;
  const fromColName = props.fromColName;

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { card, fromColData, fromColName },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  useEffect(() => {
    props.changeIsDragging(isDragging);
  }, [isDragging]);


  return (
    <div ref={drag}>
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
    </div>
  );
};

export default CardDraggable;