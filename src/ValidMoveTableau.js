const ValidMoveTableau = (fromColData, toColData, movedCard) => {

  // Console logging all the data needed to determine if a move was valid
  console.log(' ');
  console.log('fromColData:');
  console.log(fromColData);
  console.log('toColData');
  console.log(toColData);
  console.log('movedCard');
  console.log(movedCard);

  // *********************** TODO: write rule logic here ***********************

  // If card is placed on the same column it was taken from
  if (fromColData[fromColData.length - 1] === toColData[toColData.length - 1]) return false;

  // ...

  // if the move is legal, return true
  // if not, return false
  return true;
};

export default ValidMoveTableau;