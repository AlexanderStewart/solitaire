const shuffleAndDeal = (updateColInTableau, deck, changeState) => {
  // // updateColINTableau, deck, changeState 
  console.log('shuffleAndDeal');

  changeState('lost', false);
  changeState('won', false);

  // Functions
  // I got this function from Stack Overflow. Imagine I had these skills...
  function randomizeArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const turnDeckFacedown = () => {
    const tempDeck = deck;
    for (let i = 0; i < deck.length; i++) {
      tempDeck[i].faceUp = false;
    }
    changeState('deck', tempDeck);
  };

  // Flip all cards facedown
  turnDeckFacedown();

  // Randomize the order of the deck array
  const shuffledDeck = randomizeArray(deck);

  const tempColA = [];
  const tempColB = [];
  const tempColC = [];
  const tempColD = [];
  const tempColE = [];
  const tempColF = [];
  const tempColG = [];
  const tempStockpile = [];

  for (let i = 0; i < shuffledDeck.length; i++) {
    const card = shuffledDeck[i];

    // fill colG
    if (i < 7) {
      tempColG.push(card);
      continue;
    }

    // fill colF
    if (i < 13) {
      tempColF.push(card);
      continue;
    }

    // fill colE
    if (i < 18) {
      tempColE.push(card);
      continue;
    }

    // fill colD
    if (i < 22) {
      tempColD.push(card);
      continue;
    }

    // fill colC
    if (i < 25) {
      tempColC.push(card);
      continue;
    }

    // fill colB
    if (i < 27) {
      tempColB.push(card);
      continue;
    }

    // fill colA
    if (i < 28) {
      tempColA.push(card);
      continue;
    }

    if (i < 52) {
      tempStockpile.push(card);
      continue;
    }
  }

  // Flip the bottom card of each column up
  tempColA[tempColA.length - 1].faceUp = true;
  tempColB[tempColB.length - 1].faceUp = true;
  tempColC[tempColC.length - 1].faceUp = true;
  tempColD[tempColD.length - 1].faceUp = true;
  tempColE[tempColE.length - 1].faceUp = true;
  tempColF[tempColF.length - 1].faceUp = true;
  tempColG[tempColG.length - 1].faceUp = true;
  tempStockpile[tempStockpile.length - 1].faceUp = true;

  updateColInTableau('colA', tempColA);
  updateColInTableau('colB', tempColB);
  updateColInTableau('colC', tempColC);
  updateColInTableau('colD', tempColD);
  updateColInTableau('colE', tempColE);
  updateColInTableau('colF', tempColF);
  updateColInTableau('colG', tempColG);
  updateColInTableau('stockpile', tempStockpile);
  updateColInTableau('talon', []);
  updateColInTableau('foun1', []);
  updateColInTableau('foun2', []);
  updateColInTableau('foun3', []);
  updateColInTableau('foun4', []);
  changeState('moves', []);
  changeState('score', 0);
  changeState('freezeScore', false);
  changeState('clockRunning', false);
  changeState('clearInterval', false);
  changeState('time', 0);
  changeState('shuffledAndDealt', true);
};

export default shuffleAndDeal;