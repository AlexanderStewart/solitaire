
const ValidMoveFoundation = (foun1, card) => {

  // Console logging all the data needed to determine if a move was valid
  console.log(' ');
  console.log('found1:');
  console.log(foun1);
  console.log('card');
  console.log(card);

  // *********************** TODO: write rule logic here ***********************

  if (card.rank != 1) return false;

  // if the move is legal, return true
  // if not, return false
  return true;
};

export default ValidMoveFoundation;