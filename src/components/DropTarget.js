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

    // Getting data either passed through props or from the drop data
    const fromColName = data.fromColName;
    const fromColData = [...data.fromColData];
    const toColName = props.toColName;
    const toColData = [...props.toColData];
    const movedCard = data.card;
    const cardsToMove = [];
    const index = fromColData.findIndex(val => val.name === movedCard.name); //index of moved CArd

    // If the card is being transferred to the talon pile from the stockpile
    if (toColName === 'talon' && fromColName === 'stockpile') {

      // Popping the last card in the stockpile out and storing it in a variable.
      const myCard = fromColData.pop();

      // Turning the next stockpile card faceup so long as the stockpile array is not empty
      if (fromColData.length !== 0) fromColData[fromColData.length - 1].faceUp = true;
      toColData.push(myCard);

      // Updating the state so that it renders the updates
      props.updateColInTableau(fromColName, fromColData);
      props.updateColInTableau(toColName, toColData);

      // Finally, we record this move for the purpose of using the "back a move" button later.
      props.addAMove(movedCard, fromColName, toColName, false, 1);
    }

    // If the card is being transferred to a foundation pile
    else if (toColName === 'foun1' || toColName === 'foun2' || toColName === 'foun3' || toColName === 'foun4') {
      if (ValidMoveFoundation(toColData, movedCard)) {

        // Return if there's more than one card being moved.
        if (movedCard !== fromColData[fromColData.length - 1]) return;

        // We find out if the card before the card(s) being moved is flipped up or not.
        // This is important when we us the 'back a move' button.
        let previousCardFlipped;
        if (fromColData.length - 1 !== 0) previousCardFlipped = fromColData[fromColData.length - 2].faceUp;

        // first remove the card from the column it was taken from
        const myCard = fromColData.pop();

        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        // Updating the state to cause rerender
        props.updateColInTableau(fromColName, fromColData);

        // then add card to new column
        toColData.push(myCard);

        // Updating the state to cause rerender
        props.updateColInTableau(toColName, toColData);

        // Finally, we record this move for the purpose of using the "back a move" button later.
        props.addAMove(myCard, fromColName, toColName, previousCardFlipped, 1);
      }
    }
    // If the card is being transferred to the tableau
    else if (toColName === 'colA' || toColName === 'colB' || toColName === 'colC' || toColName === 'colD' || toColName === 'colB' || toColName === 'colE' || toColName === 'colF' || toColName === 'colG') {

      // Checking if the move is valid
      if (ValidMoveTableau(fromColData, toColData, movedCard)) {
        const numOfCardsMoved = fromColData.length - index;

        // Storing if the card below the card(s) being move is flipped up or flipped down.
        // This is important when we us the 'back a move' button.
        let previousCardFlipped;
        if (fromColData.length - numOfCardsMoved - 1 >= 0) previousCardFlipped = fromColData[fromColData.length - numOfCardsMoved - 1].faceUp;

        // Transferring the card(s)
        if (index + 1 <= fromColData.length) {

          while (index < fromColData.length) {
            cardsToMove.push(fromColData[index]);
            fromColData.splice(index, 1);
          }

          cardsToMove.map(card => toColData.push(card));
        }

        // If the array we are transferring from is not empty, we flip face up the
        // last card in the array
        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        // Updating the state so that there is a rerender
        props.updateColInTableau(fromColName, fromColData);
        props.updateColInTableau(toColName, toColData);

        // Finally, we record this move for the purpose of using the "back a move" button later.
        props.addAMove(cardsToMove, fromColName, toColName, previousCardFlipped, numOfCardsMoved);
      }
    };

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