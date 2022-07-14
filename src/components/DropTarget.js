import { useDrop } from 'react-dnd';
import GetCards from '../GetCards';
import ValidMoveFoundation from '../ValidMoveFoundation';
import ValidMoveTableau from '../ValidMoveTableau';

const DropTarget = (props) => {



  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (data) => {
      onDrop(data);
    }
  }));

  console.log(isOver);

  const onDrop = (data) => {
    const fromColName = data.fromColName;
    const fromColData = [...data.fromColData];
    const toColName = props.toColName;
    const toColData = [...props.toColData];
    const movedCard = data.card;
    const cardsToMove = [];
    const index = fromColData.findIndex(val => val.name === movedCard.name); //index of moved CArd

    if (toColName === 'talon') {
      const movedCard = fromColData.pop();
      if (fromColData.length !== 0) fromColData[fromColData.length - 1].faceUp = true;

      toColData.push(movedCard);

      props.updateColInTableau(fromColName, fromColData);
      props.updateColInTableau(toColName, toColData);

      props.addAMove(movedCard, fromColName, toColName);
    }
    else if (toColName === 'foun1' || toColName === 'foun2' || toColName === 'foun3' || toColName === 'foun4') {
      if (ValidMoveFoundation(toColData, movedCard)) {
        // first remove the card from the column it was taken from
        const movedCard = fromColData.pop();

        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        props.updateColInTableau(fromColName, fromColData);

        // then add card to new column
        toColData.push(movedCard);
        props.updateColInTableau(toColName, toColData);

        props.addAMove(movedCard, fromColName, toColName);
      }
    }
    else if (ValidMoveTableau(fromColData, toColData, movedCard)) {

      if (index + 1 <= fromColData.length) {

        while (index < fromColData.length) {
          cardsToMove.push(fromColData[index]);
          fromColData.splice(index, 1);
        }

        cardsToMove.map(card => toColData.push(card));
      }

      if (fromColData.length !== 0) {
        fromColData[fromColData.length - 1].faceUp = true;
      }

      props.updateColInTableau(fromColName, fromColData);
      props.updateColInTableau(toColName, toColData);

      props.addAMove(cardsToMove, fromColName, toColName);
    }

    props.changeIsDragging(false);
  };

  return (
    <div ref={drop}>
      <div
        style={{ marginTop: '-168px' }}
      >
        <img
          alt='card'
          draggable='false'
          className='drop-target'
          src={GetCards('CardBlank')}
        />
      </div>
    </div>
  );
};

export default DropTarget;