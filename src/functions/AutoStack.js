import validMoveFoundation from "./../ValidMoveFoundation";
import validMoveTableau from "./../ValidMoveTableau";

const AutoStack = (fromColName, fromColDataPassed, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile) => {

  const fromColData = [...fromColDataPassed];

  const foundsData = [foun1, foun2, foun3, foun4];
  const foundsName = ['foun1', 'foun2', 'foun3', 'foun4'];

  const tableauData = [colA, colB, colC, colD, colE, colF, colG];
  const tableauName = ['colA', 'colB', 'colC', 'colD', 'colE', 'colF', 'colG'];

  if (fromColName === 'stockpile') {
    // THIS LOGIC APPLIES ONLY TO THE CARDS COMING FROM THE STOCKPILE

    // We always check the foundations pile first. Here we loop though all four foundations pile
    // arrays to see if there is a valid move. 
    for (let i = 0; i < 4; i++) {

      // Here we are checking if the card can be moved to the current foundation pile array
      // in the loop. We will check this 4 times, one for each foundation.

      // FROM: Stockpile, TO: Foundation - check
      if (validMoveFoundation(foundsData[i], card)) {

        // If there is a valid move, we assign the the foundation pile to a variable.
        let toColData = foundsData[i];

        // Next we pop the last card in the fromColData thus removing it from the array,
        // we also assign that card to a variable.
        const movedCard = fromColData.pop();

        // Next we check if there any cards left in the pile the moved card is coming from.
        if (fromColData.length !== 0) {
          // If there are, we turn the last card in the array face up
          fromColData[fromColData.length - 1].faceUp = true;
        }

        // Next we add the moved card to the receiving column
        toColData.push(movedCard);

        // Then we update the state of both the foundation column that is receiving the card
        // and the stockpile that is losing the card.
        updateColInTableau(foundsName[i], toColData);
        updateColInTableau('stockpile', fromColData);

        // Finally, we record this move for the purpose of using the "back a move" button later.
        addAMove(card, fromColName, foundsName[i], false, 1);

        // Make sure to return so that we don't continue down the page to other logic having 
        // already moved the card
        return true;
      }
    }

    // If there isn't a valid move available in the foundations, we check the tableau. We will
    // loop though 7 times, one for each column in the tableau.
    for (let i = 0; i < tableauData.length; i++) {

      // Remember we're still checking possible auto moves coming from the stockpile.
      // Here we store the top card in the stockpile in a variable.
      const movedCard = stockpile[stockpile.length - 1];

      // Now we check if the card coming from the stockpile is a valid move into the 
      // current tableau column in the loop.

      // FROM: Stockpile, TO: Tableau - check
      if (validMoveTableau(stockpile, tableauData[i], movedCard)) {

        // If it is a valid move, we go about transferring the card
        const tempStockpileData = [...stockpile];
        const tempTableauData = tableauData[i];

        const myCard = tempStockpileData.pop();
        tempTableauData.push(myCard);

        // Checking to see if the stockpile is empty
        if (tempStockpileData.length !== 0) {
          // If it isn't empty, we flip face up the last card in the array.
          tempStockpileData[tempStockpileData.length - 1].faceUp = true;
        }

        // Then we update the state of the arrays so that it will render the update on the
        // screen.
        updateColInTableau(fromColName, tempStockpileData);
        updateColInTableau(tableauName[i], tempTableauData);

        // Finally, we record this move for the purpose of using the "back a move" button later.
        addAMove(myCard, fromColName, tableauName[i], false, 1);

        // Make sure to return so that we don't continue down the page to other logic having 
        // already moved the card
        return true;
      }
    }

    // If the stockpile card does not fit anywhere, pass it to the talon pile
    const movedCard = fromColData.pop();
    if (fromColData.length !== 0) fromColData[fromColData.length - 1].faceUp = true;

    talonPile.push(movedCard);

    // Then we update the state of the arrays so that it will render the update on the
    // screen.
    updateColInTableau(fromColName, fromColData);
    updateColInTableau('talon', talonPile);

    // Finally, we record this move for the purpose of using the "back a move" button later.
    addAMove(movedCard, fromColName, 'talon', false, 1);

    // Make sure to return so that we don't continue down the page to other logic having 
    // already moved the card
    return true;
  }
  else if (fromColName === 'colA' || fromColName === 'colB' || fromColName === 'colC' || fromColName === 'colD' || fromColName === 'colE' || fromColName === 'colF' || fromColName === 'colG') {
    // THIS LOGIC APPLIES ONLY TO THE CARDS COMING FROM THE TABLEAU

    // We will always check the foundations pile first. Here we will loop through the 
    // 'foundsData' array to check for possible valid moves.
    for (let i = 0; i < 4; i++) {

      if (card !== fromColData[fromColData.length - 1]) continue;

      // FROM: Column, TO: Foundation - check
      if (validMoveFoundation(foundsData[i], card)) {

        // If there is more than one card being moved, it will be an array and we get 
        // the number with 'card.length'. Otherwise there's just one.
        let numOfCardsMoved;
        if (card instanceof Array) numOfCardsMoved = card.length;
        else numOfCardsMoved = 1;

        // We find out if the card before the card(s) being moved is flipped up or not.
        // This is important when we us the 'back a move' button.
        let previousCardFlipped;
        if (fromColData.length - numOfCardsMoved - 1 >= 0) previousCardFlipped = fromColData[fromColData.length - numOfCardsMoved - 1].faceUp;

        // Storing the current foundation array in a variable
        let toColData = [...foundsData[i]];

        // removing the top card in the column array and storing it in a variable
        const myCard = fromColData.pop();
        toColData.push(myCard);

        // If the column is not empty, flip the last card in the column face up
        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        // Then we update the state of the arrays so that it will render the update on the
        // screen.
        updateColInTableau(fromColName, fromColData);
        updateColInTableau(foundsName[i], toColData);

        // Finally, we record this move for the purpose of using the "back a move" button later.
        addAMove(card, fromColName, foundsName[i], previousCardFlipped, 1);

        // Make sure to return so that we don't continue down the page to other logic having 
        // already moved the card
        return true;
      }
    }

    // If there isn't a valid move available in the foundations, we check the tableau. We will
    // loop though 7 times, one for each column in the tableau.
    for (let i = 0; i < tableauData.length; i++) {

      // FROM: Column, TO: Column - Check
      if (validMoveTableau(fromColData, tableauData[i], card)) {
        let previousCardFlipped;

        const tempTableauDataTo = tableauData[i];

        const cardsToMove = [];
        const index = fromColData.findIndex(val => val.name === card.name);
        const numOfCardsMoved = fromColData.length - index;

        if (fromColData.length - numOfCardsMoved - 1 >= 0) previousCardFlipped = fromColData[fromColData.length - numOfCardsMoved - 1].faceUp;

        if (index + 1 <= fromColData.length) {

          while (index < fromColData.length) {
            cardsToMove.push(fromColData[index]);
            fromColData.splice(index, 1);
          }

          cardsToMove.map(card => tempTableauDataTo.push(card));
        }

        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        updateColInTableau(fromColName, fromColData);
        updateColInTableau(tableauName[i], tempTableauDataTo);

        addAMove(cardsToMove, fromColName, tableauName[i], previousCardFlipped, numOfCardsMoved);

        return true;
      }
    }

    return false;
  }
};

export default AutoStack;