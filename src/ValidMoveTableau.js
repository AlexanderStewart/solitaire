const ValidMoveTableau = (fromColData, toColData, movedCard) => {

  // // Console logging all the data needed to determine if a move was valid
  // console.log(' ');
  // console.log('fromColData:');
  // console.log(fromColData);
  // console.log('toColData');
  // console.log(toColData);
  // console.log('movedCard');
  // console.log(movedCard);

  const recievingCard = toColData[toColData.length - 1];

  // *********************** TODO: write rule logic here ***********************

  // If card is placed on the same column it was taken from
  if (fromColData[fromColData.length - 1] === toColData[toColData.length - 1]) return false;

  // if toCol is empty, you can move only the King there
  if (toColData.length === 0 && movedCard.rank === 13) { return true; }
  else if (toColData.length === 0) return false;

  // check if recieving card is a rank higher and diff color than moving card
  if (recievingCard.rank - 1 === movedCard.rank && recievingCard.isRed !== movedCard.isRed) { return true; }

  return false;
};

export default ValidMoveTableau;