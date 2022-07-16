import validMoveFoundation from "./../ValidMoveFoundation";
import validMoveTableau from "./../ValidMoveTableau";

const AutoStack = (fromColName, fromColDataPassed, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile) => {

  const fromColData = [...fromColDataPassed];

  const foundsData = [foun1, foun2, foun3, foun4];
  const foundsName = ['foun1', 'foun2', 'foun3', 'foun4'];

  const tableauData = [colA, colB, colC, colD, colE, colF, colG];
  const tableauName = ['colA', 'colB', 'colC', 'colD', 'colE', 'colF', 'colG'];

  if (fromColName === 'stockpile') {

    for (let i = 0; i < 4; i++) {

      if (validMoveFoundation(foundsData[i], card)) {

        let toColData = foundsData[i];
        const movedCard = fromColData.pop();

        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        // then add card to new column
        toColData.push(movedCard);
        updateColInTableau(foundsName[i], toColData);
        updateColInTableau('stockpile', fromColData);

        addAMove(card, fromColName, foundsName[i], false, 1);

        return true;
      }
    }

    for (let i = 0; i < tableauData.length; i++) {

      const movedCard = stockpile[stockpile.length - 1];

      if (validMoveTableau(stockpile, tableauData[i], movedCard)) {

        const tempStockpileData = [...stockpile];
        const tempTableauData = tableauData[i];
        const cardsToMove = [];
        const index = tempStockpileData.findIndex(val => val.name === movedCard.name);

        if (tempStockpileData.length !== 0) {
          tempStockpileData[tempStockpileData.length - 1].faceUp = true;
        }

        if (index + 1 <= tempStockpileData.length) {

          while (index < tempStockpileData.length) {
            cardsToMove.push(tempStockpileData[index]);
            tempStockpileData.splice(index, 1);
          }

          cardsToMove.map(card => tempTableauData.push(card));
        }

        if (tempStockpileData.length !== 0) {
          tempStockpileData[tempStockpileData.length - 1].faceUp = true;
        }

        updateColInTableau(fromColName, tempStockpileData);
        updateColInTableau(tableauName[i], tempTableauData);

        addAMove(cardsToMove, fromColName, tableauName[i], false, 1);

        return true;
      }
    }

    // If the stockpile card does not fit anywhere, pass it to the talon pile
    const movedCard = fromColData.pop();
    if (fromColData.length !== 0) fromColData[fromColData.length - 1].faceUp = true;

    talonPile.push(movedCard);

    updateColInTableau(fromColName, fromColData);
    updateColInTableau('talon', talonPile);

    addAMove(movedCard, fromColName, 'talon', false, 1);

    return true;
  }
  else {

    for (let i = 0; i < 4; i++) {

      // FROM: Column, TO: Foundation
      if (validMoveFoundation(foundsData[i], card)) {

        let numOfCardsMoved;
        if (card instanceof Array) numOfCardsMoved = card.length;
        else numOfCardsMoved = 1;

        let previousCardFlipped;
        if (fromColData.length - numOfCardsMoved - 1 >= 0) previousCardFlipped = fromColData[fromColData.length - numOfCardsMoved - 1].faceUp;

        let toColData = [...foundsData[i]];

        const myCard = fromColData.pop();
        toColData.push(myCard);

        if (fromColData.length !== 0) {
          fromColData[fromColData.length - 1].faceUp = true;
        }

        updateColInTableau(fromColName, fromColData);
        updateColInTableau(foundsName[i], toColData);

        addAMove(card, fromColName, foundsName[i], previousCardFlipped, 1);

        return true;
      }
    }

    for (let i = 0; i < tableauData.length; i++) {

      // FROM: Column, TO: Column
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