
const ValidMoveFoundation = (foun1, card) => {

  // Console logging all the data needed to determine if a move was valid
  // console.log(' ');
  //console.log('found1:');
  //console.log(foun1);
  //console.log('card');
  //console.log(card);
  const len = foun1.length;

  // *********************** TODO: write rule logic here ***********************
  if (foun1.length == 0 && card.rank == 1) return true;
  if (card.rank == foun1.length + 1 && card.suit == foun1[0].suit) return true;
  // if (card.rank == foun1[foun1.length - 1].length) return true;
  // if (foun1[foun1.length - 1].rank == card.rank + 1) return true;

  // if the move is legal, return true
  // if not, return false
  return false;
};

export default ValidMoveFoundation;