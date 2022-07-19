const BackAMove = (updateColInTableau, changeState, moves, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile) => {

  // If there are no stored moves left, do not continue with this function
  if (moves.length === 0) return;

  const cardsToMove = [];

  // Getting the last move that was added to the moves array
  const card = moves[moves.length - 1].card;
  const fromName = moves[moves.length - 1].fromName;
  const toName = moves[moves.length - 1].toName;
  const previousCardFlipped = moves[moves.length - 1].previousCardFlipped;
  const numOfCardsMoved = moves[moves.length - 1].numOfCardsMoved;

  // From: Talon, To: Stockpile - Check
  if (fromName === 'talon' && toName === 'stockpile') {

    // Reverse the restock
    const tempTalonPile = [...stockpile];
    tempTalonPile.reverse();
    updateColInTableau('talon', tempTalonPile);
    updateColInTableau('stockpile', []);

    const tempMoves = moves;
    tempMoves.pop();
    changeState('moves', tempMoves);

    return;
  }

  // Getting the table data based on the name of the column
  let tempFromData = [];
  let tempToData = [];

  if (fromName === "colA") tempFromData = [...colA];
  else if (fromName === "colB") tempFromData = [...colB];
  else if (fromName === "colC") tempFromData = [...colC];
  else if (fromName === "colD") tempFromData = [...colD];
  else if (fromName === "colE") tempFromData = [...colE];
  else if (fromName === "colF") tempFromData = [...colF];
  else if (fromName === "colG") tempFromData = [...colG];
  else if (fromName === "foun1") tempFromData = [...foun1];
  else if (fromName === "foun2") tempFromData = [...foun2];
  else if (fromName === "foun3") tempFromData = [...foun3];
  else if (fromName === "foun4") tempFromData = [...foun4];
  else if (fromName === "stockpile") tempFromData = [...stockpile];
  else if (fromName === "talon") tempFromData = [...talonPile];

  if (toName === "colA") tempToData = [...colA];
  else if (toName === "colB") tempToData = [...colB];
  else if (toName === "colC") tempToData = [...colC];
  else if (toName === "colD") tempToData = [...colD];
  else if (toName === "colE") tempToData = [...colE];
  else if (toName === "colF") tempToData = [...colF];
  else if (toName === "colG") tempToData = [...colG];
  else if (toName === "foun1") tempToData = [...foun1];
  else if (toName === "foun2") tempToData = [...foun2];
  else if (toName === "foun3") tempToData = [...foun3];
  else if (toName === "foun4") tempToData = [...foun4];
  else if (toName === "stockpile") tempToData = [...stockpile];
  else if (toName === "talon") tempToData = [...talonPile];


  let index;

  // Getting the index of the moved card. If it is multiple cards we have to treat
  // it as an array, if it's one card we just treat it as a variable.
  if (card instanceof Array) {
    index = tempToData.findIndex(val => val.name === card[0].name);
  }
  else {
    index = tempToData.findIndex(val => val.name === card.name);
  }

  // Reversing the move
  if (index + 1 <= tempToData.length) {

    while (index < tempToData.length) {
      cardsToMove.push(tempToData[index]);
      tempToData.splice(index, 1);
    }

    cardsToMove.map(card => tempFromData.push(card));
  }

  const flipCardIndex = tempFromData.length - 1 - numOfCardsMoved;

  if (flipCardIndex >= 0 && !previousCardFlipped && previousCardFlipped !== null) tempFromData[flipCardIndex].faceUp = false;

  // Updating the state so that the data is rendered to the screen.
  updateColInTableau(fromName, tempFromData);
  updateColInTableau(toName, tempToData);

  // Removing the last move from the moves state variable.
  const tempMoves = moves;
  tempMoves.pop();
  changeState('moves', tempMoves);
};

export default BackAMove;