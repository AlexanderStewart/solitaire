import { useDrop } from 'react-dnd';
import GetCards from '../GetCards';

const DropTarget = (props) => {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: (data) => {
      onDrop(data);
    }
  }));

  const onDrop = (data) => {
    console.log(data);

    const fromColName = data.fromColName;
    const fromColData = [...data.fromColData];
    const toColName = props.toColName;
    const toColData = [...props.toColData];

    // first remove the card from the column it was taken from
    const movedCard = fromColData.pop();
    props.updateColInTableau(fromColName, fromColData);

    toColData.push(movedCard);
    props.updateColInTableau(toColName, toColData);
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