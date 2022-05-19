import React, { useEffect, useState, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GetCards from './GetCards';
import CardDraggable from './components/CardDraggable';
import Card from './components/Card';
import PlaceHolder from './components/PlaceHolder';
import DropTarget from './components/DropTarget';

import './styles/Game.css';

const App = () => {

  // STATE

  // Each card in the deck is an object which contains the current state of the card.
  // The deck is an array of these objects.
  const [deck, setDeck] = useState([
    { name: 'AClub', faceUp: false, rank: 1, isRed: false },
    { name: 'ADiamond', faceUp: false, rank: 1, isRed: true },
    { name: 'AHeart', faceUp: false, rank: 1, isRed: true },
    { name: 'ASpade', faceUp: false, rank: 1, isRed: false },
    { name: '2Club', faceUp: false, rank: 2, isRed: false },
    { name: '2Diamond', faceUp: false, rank: 2, isRed: true },
    { name: '2Heart', faceUp: false, rank: 2, isRed: true },
    { name: '2Spade', faceUp: false, rank: 2, isRed: false },
    { name: '3Club', faceUp: false, rank: 3, isRed: false },
    { name: '3Diamond', faceUp: false, rank: 3, isRed: true },
    { name: '3Heart', faceUp: false, rank: 3, isRed: true },
    { name: '3Spade', faceUp: false, rank: 3, isRed: false },
    { name: '4Club', faceUp: false, rank: 4, isRed: false },
    { name: '4Diamond', faceUp: false, rank: 4, isRed: true },
    { name: '4Heart', faceUp: false, rank: 4, isRed: true },
    { name: '4Spade', faceUp: false, rank: 4, isRed: false },
    { name: '5Club', faceUp: false, rank: 5, isRed: false },
    { name: '5Diamond', faceUp: false, rank: 5, isRed: true },
    { name: '5Heart', faceUp: false, rank: 5, isRed: true },
    { name: '5Spade', faceUp: false, rank: 5, isRed: false },
    { name: '6Club', faceUp: false, rank: 6, isRed: false },
    { name: '6Diamond', faceUp: false, rank: 6, isRed: true },
    { name: '6Heart', faceUp: false, rank: 6, isRed: true },
    { name: '6Spade', faceUp: false, rank: 6, isRed: false },
    { name: '7Club', faceUp: false, rank: 7, isRed: false },
    { name: '7Diamond', faceUp: false, rank: 7, isRed: true },
    { name: '7Heart', faceUp: false, rank: 7, isRed: true },
    { name: '7Spade', faceUp: false, rank: 7, isRed: false },
    { name: '8Club', faceUp: false, rank: 8, isRed: false },
    { name: '8Diamond', faceUp: false, rank: 8, isRed: true },
    { name: '8Heart', faceUp: false, rank: 8, isRed: true },
    { name: '8Spade', faceUp: false, rank: 8, isRed: false },
    { name: '9Club', faceUp: false, rank: 9, isRed: false },
    { name: '9Diamond', faceUp: false, rank: 9, isRed: true },
    { name: '9Heart', faceUp: false, rank: 9, isRed: true },
    { name: '9Spade', faceUp: false, rank: 9, isRed: false },
    { name: '10Club', faceUp: false, rank: 10, isRed: false },
    { name: '10Diamond', faceUp: false, rank: 10, isRed: true },
    { name: '10Heart', faceUp: false, rank: 10, isRed: true },
    { name: '10Spade', faceUp: false, rank: 10, isRed: false },
    { name: 'JClub', faceUp: false, rank: 11, isRed: false },
    { name: 'JDiamond', faceUp: false, rank: 11, isRed: true },
    { name: 'JHeart', faceUp: false, rank: 11, isRed: true },
    { name: 'JSpade', faceUp: false, rank: 11, isRed: false },
    { name: 'QClub', faceUp: false, rank: 12, isRed: false },
    { name: 'QDiamond', faceUp: false, rank: 12, isRed: true },
    { name: 'QHeart', faceUp: false, rank: 12, isRed: true },
    { name: 'QSpade', faceUp: false, rank: 12, isRed: false },
    { name: 'KClub', faceUp: false, rank: 13, isRed: false },
    { name: 'KDiamond', faceUp: false, rank: 13, isRed: true },
    { name: 'KHeart', faceUp: false, rank: 13, isRed: true },
    { name: 'KSpade', faceUp: false, rank: 13, isRed: false },
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
  const [isDragging, setIsDragging] = useState(false);

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

  const updateColInTableau = (colName, colData) => {
    if (colName === 'colA') setColA(colData);
    else if (colName === 'colB') setColB(colData);
    else if (colName === 'colC') setColC(colData);
    else if (colName === 'colD') setColD(colData);
    else if (colName === 'colE') setColE(colData);
    else if (colName === 'colF') setColF(colData);
    else if (colName === 'colG') setColG(colData);
  };

  const changeIsDragging = e => {
    setIsDragging(e);
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
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', flexDirection: 'col' }}>

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colA?.map((card, index) => {

              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colA.length - 1 === index ? (

                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colA} fromColName="colA" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colA} toColName="colA" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colB?.map((card, index) => {

              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colB.length - 1 === index ? (

                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colB} fromColName="colB" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colB} toColName="colB" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colC?.map((card, index) => {
              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colC.length - 1 === index ? (

                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colC} fromColName="colC" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colC} toColName="colC" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colD?.map((card, index) => {
              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colD.length - 1 === index ? (
                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colD} fromColName="colD" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colD} toColName="colD" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colE?.map((card, index) => {
              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colE.length - 1 === index ? (
                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colE} fromColName="colE" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colE} toColName="colE" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colF?.map((card, index) => {
              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colF.length - 1 === index ? (
                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colF} fromColName="colF" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colF} toColName="colF" />}
          </div>

          <div className="space" />

          <div>
            <PlaceHolder src={GetCards('CardBlank')} />
            {colG?.map((card, index) => {

              let CardImage;
              if (card.faceUp) CardImage = GetCards(card.name);
              else CardImage = GetCards('CardReverse');

              return colG.length - 1 === index ? (
                <CardDraggable draggable key={card.name} card={card} src={CardImage} fromColData={colG} fromColName="colG" changeIsDragging={changeIsDragging} />
              ) : (
                <Card key={card.name} card={card} src={CardImage} />
              );
            })}
            {isDragging && <DropTarget updateColInTableau={updateColInTableau} toColData={colG} toColName="colG" />}
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
      </DndProvider>
    </div>
  );
};

export default App;
