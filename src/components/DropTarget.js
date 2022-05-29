import { useDrop } from 'react-dnd';
import GetCards from '../GetCards';
import ValidMove from '../ValidMove';

const DropTarget = (props) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (data) => {
      onDrop(data);
    }
  }));

  const onDrop = (data) => {
    const fromColName = data.fromColName;
    const fromColData = [...data.fromColData];
    const toColName = props.toColName;
    const toColData = [...props.toColData];
    const movedCard = data.card;

    if (ValidMove(fromColData, toColData, movedCard)) {
      // first remove the card from the column it was taken from
      const movedCard = fromColData.pop();

      console.log(fromColData.length);

      if (fromColData.length !== 0) {
        fromColData[fromColData.length - 1].faceUp = true;
      }

      props.updateColInTableau(fromColName, fromColData);

      // then add card to new column
      toColData.push(movedCard);
      props.updateColInTableau(toColName, toColData);
    }
  };

  return (
    <div ref={drop}>
      <div
        style={{ marginTop: -168 }}
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