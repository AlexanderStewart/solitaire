
import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import './../styles/Game.scss';

const CardDraggable = (props) => {

  const card = props.card;
  const src = props.src;
  const fromColData = props.fromColData;
  const fromColName = props.fromColName;

  const isStockpile = props.isStockpile;
  if (isStockpile === null) isStockpile = false;


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
        className={isStockpile ? 'stockpile-card-container' : 'card-container'}
        style={isDragging ? { opacity: 0 } : { opacity: 1 }}
      >
        <img
          alt='card'
          draggable='false'
          className={isStockpile ? 'stockpile-card' : 'card'}
          src={src}
        />
      </div>
    </div>
  );
};

export default CardDraggable;