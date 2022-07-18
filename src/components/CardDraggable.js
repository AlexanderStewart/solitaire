
import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import './../styles/Game.css';

const CardDraggable = (props) => {

  const card = props.card;
  const src = props.src;
  const fromColData = props.fromColData;
  const fromColName = props.fromColName;
  const cardColor = props.cardColor;

  let isStockpile = props.isStockpile;
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          style={{ backgroundColor: cardColor }}
          src={src}
        />
      </div>
    </div>
  );
};

export default CardDraggable;