import React, { useEffect, useState, useRef } from 'react';
import GetCards from './GetCards';
import './styles/Game.css';

const App = () => {

  // STATE

  // Each card in the deck is an object which contains the current state of the card.
  // The deck is an array of these objects.
  const [deck, setDeck] = useState([
    { name: 'AClub', faceUp: false, selected: false },
    { name: 'ADiamond', faceUp: false, selected: false },
    { name: 'AHeart', faceUp: false, selected: false },
    { name: 'ASpade', faceUp: false, selected: false },
    { name: '2Club', faceUp: false, selected: false },
    { name: '2Diamond', faceUp: false, selected: false },
    { name: '2Heart', faceUp: false, selected: false },
    { name: '2Spade', faceUp: false, selected: false },
    { name: '3Club', faceUp: false, selected: false },
    { name: '3Diamond', faceUp: false, selected: false },
    { name: '3Heart', faceUp: false, selected: false },
    { name: '3Spade', faceUp: false, selected: false },
    { name: '4Club', faceUp: false, selected: false },
    { name: '4Diamond', faceUp: false, selected: false },
    { name: '4Heart', faceUp: false, selected: false },
    { name: '4Spade', faceUp: false, selected: false },
    { name: '5Club', faceUp: false, selected: false },
    { name: '5Diamond', faceUp: false, selected: false },
    { name: '5Heart', faceUp: false, selected: false },
    { name: '5Spade', faceUp: false, selected: false },
    { name: '6Club', faceUp: false, selected: false },
    { name: '6Diamond', faceUp: false, selected: false },
    { name: '6Heart', faceUp: false, selected: false },
    { name: '6Spade', faceUp: false, selected: false },
    { name: '7Club', faceUp: false, selected: false },
    { name: '7Diamond', faceUp: false, selected: false },
    { name: '7Heart', faceUp: false, selected: false },
    { name: '7Spade', faceUp: false, selected: false },
    { name: '8Club', faceUp: false, selected: false },
    { name: '8Diamond', faceUp: false, selected: false },
    { name: '8Heart', faceUp: false, selected: false },
    { name: '8Spade', faceUp: false, selected: false },
    { name: '9Club', faceUp: false, selected: false },
    { name: '9Diamond', faceUp: false, selected: false },
    { name: '9Heart', faceUp: false, selected: false },
    { name: '9Spade', faceUp: false, selected: false },
    { name: '10Club', faceUp: false, selected: false },
    { name: '10Diamond', faceUp: false, selected: false },
    { name: '10Heart', faceUp: false, selected: false },
    { name: '10Spade', faceUp: false, selected: false },
    { name: 'JClub', faceUp: false, selected: false },
    { name: 'JDiamond', faceUp: false, selected: false },
    { name: 'JHeart', faceUp: false, selected: false },
    { name: 'JSpade', faceUp: false, selected: false },
    { name: 'QClub', faceUp: false, selected: false },
    { name: 'QDiamond', faceUp: false, selected: false },
    { name: 'QHeart', faceUp: false, selected: false },
    { name: 'QSpade', faceUp: false, selected: false },
    { name: 'KClub', faceUp: false, selected: false },
    { name: 'KDiamond', faceUp: false, selected: false },
    { name: 'KHeart', faceUp: false, selected: false },
    { name: 'KSpade', faceUp: false, selected: false },
  ]);

  // Each column in the Tableau is an array of card objects.
  // Right now they're empty but when shuffleAndDeal() is called they will be filled according to the start game rules 
  const [colA, setColA] = useState([]);
  const [colB, setColB] = useState([]);
  const [colC, setColC] = useState([]);
  const [colD, setColD] = useState([]);
  const [colE, setColE] = useState([]);
  const [colF, setColF] = useState([]);
  const [colG, setColG] = useState([]);

  // Boolean state variable that turns true at the end of shuffleAndDeal(). Everything on the board is not rendered until this is true.
  const [shuffledAndDealt, setShuffledAndDealt] = useState(false);

  // Used to force state update.
  const [state, setState] = useState(0);

  // REF

  const passedFirstRender = useRef(false);

  // FUNCTIONS

  const shuffleAndDeal = () => {

    // Randomize the order of the deck array
    const shuffledDeck = randomizeArray(deck);
    setDeck(shuffledDeck);

    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];

      // fill colG
      if (i < 7) {
        let tempColG = colG;
        tempColG.push(card);
        setColG(tempColG);
        continue;
      }

      // fill colF
      if (i < 13) {
        let tempColF = colF;
        tempColF.push(card);
        setColF(tempColF);
        continue;
      }

      // fill colE
      if (i < 18) {
        let tempColE = colE;
        tempColE.push(card);
        setColE(tempColE);
        continue;
      }

      // fill colD
      if (i < 22) {
        let tempColD = colD;
        tempColD.push(card);
        setColD(tempColD);
        continue;
      }

      // fill colC
      if (i < 25) {
        let tempColC = colC;
        tempColC.push(card);
        setColC(tempColC);
        continue;
      }

      // fill colB
      if (i < 27) {
        let tempColB = colB;
        tempColB.push(card);
        setColB(tempColB);
        continue;
      }

      // fill colA
      if (i < 28) {
        let tempColA = colA;
        tempColA.push(card);
        setColA(tempColA);
        continue;
      }
    }

    // Flip the bottom card of each column up
    const tempColA = colA;
    tempColA[tempColA.length - 1].faceUp = true;
    setColA(tempColA);

    const tempColB = colB;
    tempColB[tempColB.length - 1].faceUp = true;
    setColB(tempColB);

    const tempColC = colC;
    tempColC[tempColC.length - 1].faceUp = true;
    setColC(tempColC);

    const tempColD = colD;
    tempColD[tempColD.length - 1].faceUp = true;
    setColD(tempColD);

    const tempColE = colE;
    tempColE[tempColE.length - 1].faceUp = true;
    setColE(tempColE);

    const tempColF = colF;
    tempColF[tempColF.length - 1].faceUp = true;
    setColF(tempColF);

    const tempColG = colG;
    tempColG[tempColG.length - 1].faceUp = true;
    setColG(tempColG);

    setShuffledAndDealt(true);
  };

  // I got this function from Stack Overflow. Imagine I had these skills... 
  function randomizeArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // TODO: Use the data of selected card to do stuff...
  const onSelect = (colName, colData, index) => {
    // console.log(colName);
    // console.log(colData);
    // console.log('index: ' + index);

    if (colData.length - 1 === index) {

      const currentSelected = colData[index].selected;

      if (numSelected() > 0) {
        deselect();
      }

      if (!currentSelected) {
        colData[index].selected = true;
        updateColInTableau(colName, colData);
      }

      // using this to forcing a rerender. For some reason this is needed, 
      // the above stuff isn't triggering a render update. (I'm pretty sure this is bad programming.)
      setState(state + 1);
    }
  };

  const updateColInTableau = (colName, colData) => {
    if (colName === 'colA') setColA(colData);
    if (colName === 'colB') setColB(colData);
    if (colName === 'colC') setColC(colData);
    if (colName === 'colD') setColD(colData);
    if (colName === 'colE') setColE(colData);
    if (colName === 'colF') setColF(colData);
    if (colName === 'colG') setColG(colData);
  };

  const numSelected = () => {
    let count = 0;

    for (let i = 0; i < colA.length; i++) {
      if (colA[i].selected) count++;
    }
    for (let i = 0; i < colB.length; i++) {
      if (colB[i].selected) count++;
    }
    for (let i = 0; i < colC.length; i++) {
      if (colC[i].selected) count++;
    }
    for (let i = 0; i < colD.length; i++) {
      if (colD[i].selected) count++;
    }
    for (let i = 0; i < colE.length; i++) {
      if (colE[i].selected) count++;
    }
    for (let i = 0; i < colF.length; i++) {
      if (colF[i].selected) count++;
    }
    for (let i = 0; i < colG.length; i++) {
      if (colG[i].selected) count++;
    }

    return count;
  };

  const deselect = () => {

    let tempColA = colA;
    for (let i = 0; i < tempColA.length; i++) {
      tempColA[i].selected = false;
    }
    setColA(tempColA);

    let tempColB = colB;
    for (let i = 0; i < tempColB.length; i++) {
      tempColB[i].selected = false;
    }
    setColB(tempColB);

    let tempColC = colC;
    for (let i = 0; i < tempColC.length; i++) {
      tempColC[i].selected = false;
    }
    setColC(tempColC);

    let tempColD = colD;
    for (let i = 0; i < tempColD.length; i++) {
      tempColD[i].selected = false;
    }
    setColD(tempColD);

    let tempColE = colE;
    for (let i = 0; i < tempColE.length; i++) {
      tempColE[i].selected = false;
    }
    setColE(tempColE);

    let tempColF = colF;
    for (let i = 0; i < tempColF.length; i++) {
      tempColF[i].selected = false;
    }
    setColF(tempColF);

    let tempColG = colG;
    for (let i = 0; i < tempColG.length; i++) {
      tempColG[i].selected = false;
    }
    setColG(tempColG);
  };

  // USE EFFECT

  // Shuffle deck only when the page refreshes
  useEffect(() => {
    if (passedFirstRender.current) return;
    else {
      shuffleAndDeal();
      passedFirstRender.current = true;
    }
  }, []);

  if (!shuffledAndDealt) {
    return null;
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'col' }}>

        <div>
          {colA?.map((card, index) => {

            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colA', colA, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colB?.map((card, index) => {

            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colB', colB, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colC?.map((card, index) => {
            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colC', colC, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colD?.map((card, index) => {
            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colD', colD, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colE?.map((card, index) => {
            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colE', colE, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colF?.map((card, index) => {
            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colF', colF, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {colG?.map((card, index) => {

            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div
                className='card-container'
                key={card.name}
              >
                <img
                  alt="card"
                  onClick={() => onSelect('colG', colG, index)}
                  className='card'
                  style={card.selected ? { borderColor: '#4ade80', backgroundColor: '#f0fdf4' } : {}}
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />
        <div className="space" />

        {/* TODO: make this work, just images right now */}
        <div className="card-container">
          <div style={{ display: 'flex', flexDirection: 'col' }}>
            <img
              alt="card"
              className='card'
              src={GetCards('CardBlank')}
            />
            <div className="space" />
            <img
              alt="card"
              className='card'
              src={GetCards('CardBlank')}
            />
          </div>

          <div className="space" />

          <div style={{ display: 'flex', flexDirection: 'col' }}>
            <img
              alt="card"
              className='card'
              src={GetCards('CardBlank')}
            />
            <div className="space" />
            <img
              alt="card"
              className='card'
              src={GetCards('CardBlank')}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
