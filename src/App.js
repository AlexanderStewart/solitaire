import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GetCards from "./GetCards";
import CardDraggable from "./components/CardDraggable";
import Card from "./components/Card";
import PlaceHolder from "./components/PlaceHolder";
import DropTarget from "./components/DropTarget";
import validMoveFoundation from "./ValidMoveFoundation";
import validMoveTableau from "./ValidMoveTableau";

import "./styles/Game.css";


// Assets
import { ReactComponent as Restart } from './assets/icons/restart.svg';
import { ReactComponent as BackArrow } from './assets/icons/backArrow.svg';

const App = () => {
  // STATE

  // Each card in the deck is an object which contains the current state of the card.
  // The deck is an array of these objects.
  const [deck, setDeck] = useState([
    { name: "AClub", faceUp: false, rank: 1, isRed: false, suit: 'club' },
    { name: "ADiamond", faceUp: false, rank: 1, isRed: true, suit: 'diamond' },
    { name: "AHeart", faceUp: false, rank: 1, isRed: true, suit: 'heart' },
    { name: "ASpade", faceUp: false, rank: 1, isRed: false, suit: 'spade' },
    { name: "2Club", faceUp: false, rank: 2, isRed: false, suit: 'club' },
    { name: "2Diamond", faceUp: false, rank: 2, isRed: true, suit: 'diamond' },
    { name: "2Heart", faceUp: false, rank: 2, isRed: true, suit: 'heart' },
    { name: "2Spade", faceUp: false, rank: 2, isRed: false, suit: 'spade' },
    { name: "3Club", faceUp: false, rank: 3, isRed: false, suit: 'club' },
    { name: "3Diamond", faceUp: false, rank: 3, isRed: true, suit: 'diamond' },
    { name: "3Heart", faceUp: false, rank: 3, isRed: true, suit: 'heart' },
    { name: "3Spade", faceUp: false, rank: 3, isRed: false, suit: 'spade' },
    { name: "4Club", faceUp: false, rank: 4, isRed: false, suit: 'club' },
    { name: "4Diamond", faceUp: false, rank: 4, isRed: true, suit: 'diamond' },
    { name: "4Heart", faceUp: false, rank: 4, isRed: true, suit: 'heart' },
    { name: "4Spade", faceUp: false, rank: 4, isRed: false, suit: 'spade' },
    { name: "5Club", faceUp: false, rank: 5, isRed: false, suit: 'club' },
    { name: "5Diamond", faceUp: false, rank: 5, isRed: true, suit: 'diamond' },
    { name: "5Heart", faceUp: false, rank: 5, isRed: true, suit: 'heart' },
    { name: "5Spade", faceUp: false, rank: 5, isRed: false, suit: 'spade' },
    { name: "6Club", faceUp: false, rank: 6, isRed: false, suit: 'club' },
    { name: "6Diamond", faceUp: false, rank: 6, isRed: true, suit: 'diamond' },
    { name: "6Heart", faceUp: false, rank: 6, isRed: true, suit: 'heart' },
    { name: "6Spade", faceUp: false, rank: 6, isRed: false, suit: 'spade' },
    { name: "7Club", faceUp: false, rank: 7, isRed: false, suit: 'club' },
    { name: "7Diamond", faceUp: false, rank: 7, isRed: true, suit: 'diamond' },
    { name: "7Heart", faceUp: false, rank: 7, isRed: true, suit: 'heart' },
    { name: "7Spade", faceUp: false, rank: 7, isRed: false, suit: 'spade' },
    { name: "8Club", faceUp: false, rank: 8, isRed: false, suit: 'club' },
    { name: "8Diamond", faceUp: false, rank: 8, isRed: true, suit: 'diamond' },
    { name: "8Heart", faceUp: false, rank: 8, isRed: true, suit: 'heart' },
    { name: "8Spade", faceUp: false, rank: 8, isRed: false, suit: 'spade' },
    { name: "9Club", faceUp: false, rank: 9, isRed: false, suit: 'club' },
    { name: "9Diamond", faceUp: false, rank: 9, isRed: true, suit: 'diamond' },
    { name: "9Heart", faceUp: false, rank: 9, isRed: true, suit: 'heart' },
    { name: "9Spade", faceUp: false, rank: 9, isRed: false, suit: 'spade' },
    { name: "10Club", faceUp: false, rank: 10, isRed: false, suit: 'club' },
    { name: "10Diamond", faceUp: false, rank: 10, isRed: true, suit: 'diamond' },
    { name: "10Heart", faceUp: false, rank: 10, isRed: true, suit: 'heart' },
    { name: "10Spade", faceUp: false, rank: 10, isRed: false, suit: 'spade' },
    { name: "JClub", faceUp: false, rank: 11, isRed: false, suit: 'club' },
    { name: "JDiamond", faceUp: false, rank: 11, isRed: true, suit: 'diamond' },
    { name: "JHeart", faceUp: false, rank: 11, isRed: true, suit: 'heart' },
    { name: "JSpade", faceUp: false, rank: 11, isRed: false, suit: 'spade' },
    { name: "QClub", faceUp: false, rank: 12, isRed: false, suit: 'club' },
    { name: "QDiamond", faceUp: false, rank: 12, isRed: true, suit: 'diamond' },
    { name: "QHeart", faceUp: false, rank: 12, isRed: true, suit: 'heart' },
    { name: "QSpade", faceUp: false, rank: 12, isRed: false, suit: 'spade' },
    { name: "KClub", faceUp: false, rank: 13, isRed: false, suit: 'club' },
    { name: "KDiamond", faceUp: false, rank: 13, isRed: true, suit: 'diamond' },
    { name: "KHeart", faceUp: false, rank: 13, isRed: true, suit: 'heart' },
    { name: "KSpade", faceUp: false, rank: 13, isRed: false, suit: 'spade' },
  ]);

  const score = 0;

  // Each column in the Tableau is an array of card objects.
  // Right now they're empty but when shuffleAndDeal() is called they will be filled according to the start game rules
  const [colA, setColA] = useState([]);
  const [colB, setColB] = useState([]);
  const [colC, setColC] = useState([]);
  const [colD, setColD] = useState([]);
  const [colE, setColE] = useState([]);
  const [colF, setColF] = useState([]);
  const [colG, setColG] = useState([]);
  const [foun1, setFoun1] = useState([]);
  const [foun2, setFoun2] = useState([]);
  const [foun3, setFoun3] = useState([]);
  const [foun4, setFoun4] = useState([]);
  const [stockpile, setStockpile] = useState([]);
  const [talonPile, setTalonPile] = useState([]);
  const [moves, setMoves] = useState([]);

  // Boolean state variable that turns true at the end of shuffleAndDeal(). Everything on the board is not rendered until this is true.
  const [shuffledAndDealt, setShuffledAndDealt] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // REF

  // FUNCTIONS

  const shuffleAndDeal = () => {

    console.log('shuffleAndDeal');

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

    setColA(tempColA);
    setColB(tempColB);
    setColC(tempColC);
    setColD(tempColD);
    setColE(tempColE);
    setColF(tempColF);
    setColG(tempColG);
    setStockpile(tempStockpile);
    setTalonPile([]);
    setFoun1([]);
    setFoun2([]);
    setFoun3([]);
    setFoun4([]);
    setMoves([]);

    setShuffledAndDealt(true);
  };

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

  const autoStack = (fromColName, fromColDataPassed, card) => {

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

          addAMove(card, fromColName, foundsName[i]);

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

          addAMove(cardsToMove, fromColName, tableauName[i]);

          return true;
        }
      }

      return false;
    }
    else {

      for (let i = 0; i < 4; i++) {

        // FROM: Column, TO: Foundation
        if (validMoveFoundation(foundsData[i], card)) {

          let toColData = [...foundsData[i]];

          const myCard = fromColData.pop();
          toColData.push(myCard);

          if (fromColData.length !== 0) {
            fromColData[fromColData.length - 1].faceUp = true;
          }

          updateColInTableau(fromColName, fromColData);
          updateColInTableau(foundsName[i], toColData);

          addAMove(card, fromColName, foundsName[i]);

          return true;
        }
      }

      for (let i = 0; i < tableauData.length; i++) {

        if (validMoveTableau(fromColData, tableauData[i], card)) {

          const tempTableauDataTo = tableauData[i];

          const cardsToMove = [];
          const index = fromColData.findIndex(val => val.name === card.name);

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

          addAMove(cardsToMove, fromColName, tableauName[i]);

          return true;
        }
      }

      return false;
    }
  };

  const turnDeckFacedown = () => {
    const tempDeck = [...deck];
    for (let i = 0; i < deck.length; i++) {
      tempDeck[i].faceUp = false;
    }
    setDeck(tempDeck);
  };

  const updateColInTableau = (colName, colData) => {
    if (colName === "colA") setColA(colData);
    else if (colName === "colB") setColB(colData);
    else if (colName === "colC") setColC(colData);
    else if (colName === "colD") setColD(colData);
    else if (colName === "colE") setColE(colData);
    else if (colName === "colF") setColF(colData);
    else if (colName === "colG") setColG(colData);
    else if (colName === "foun1") setFoun1(colData);
    else if (colName === "foun2") setFoun2(colData);
    else if (colName === "foun3") setFoun3(colData);
    else if (colName === "foun4") setFoun4(colData);
    else if (colName === "stockpile") setStockpile(colData);
    else if (colName === "talon") setTalonPile(colData);
  };

  const changeIsDragging = (e) => {
    setIsDragging(e);
  };

  const reStock = () => {
    const tempStockpile = [...talonPile];
    tempStockpile.reverse();
    setStockpile(tempStockpile);
    setTalonPile([]);

    addAMove(tempStockpile, 'talon', 'stockpile');
  };

  const addAMove = (card, fromName, toName) => {
    const curMove = { card: card, fromName: fromName, toName: toName };
    const tempMoves = [...moves];
    tempMoves.push(curMove);
    setMoves(tempMoves);
  };

  const backAMove = () => {
    if (moves.length === 0) return;

    const card = moves[moves.length - 1].card;

    const cardsToMove = [];
    const fromName = moves[moves.length - 1].fromName;
    const toName = moves[moves.length - 1].toName;

    if (fromName === 'talon' && toName === 'stockpile') {
      const tempTalonPile = [...stockpile];
      tempTalonPile.reverse();
      setTalonPile(tempTalonPile);
      setStockpile([]);

      const tempMoves = moves;
      tempMoves.pop();
      setMoves(tempMoves);

      return;
    }

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
    let numberMoved;

    if (card instanceof Array) {
      index = tempToData.findIndex(val => val.name === card[0].name);
      console.log('array index: ');
      numberMoved = tempToData.length - 1 - index;
    }
    else {
      index = tempToData.findIndex(val => val.name === card.name);
      numberMoved = tempToData.length - 1 - index;
    }

    if (index + 1 <= tempToData.length) {

      while (index < tempToData.length) {
        cardsToMove.push(tempToData[index]);
        tempToData.splice(index, 1);
      }

      cardsToMove.map(card => tempFromData.push(card));
    }

    console.log(tempFromData);

    const flipCardIndex = tempFromData.length - 1 - numberMoved - 1;
    console.log(flipCardIndex);


    if (flipCardIndex > 0) {
      if (tempFromData[flipCardIndex].faceUp) tempFromData[flipCardIndex].faceUp = false;
      else tempFromData[flipCardIndex].faceUp = true;
    }

    updateColInTableau(fromName, tempFromData);
    updateColInTableau(toName, tempToData);

    const tempMoves = moves;
    tempMoves.pop();
    setMoves(tempMoves);
  };

  // USE EFFECT

  // Shuffle deck only when the page refreshes
  useEffect(() => {
    shuffleAndDeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(moves);
  }, [moves]);

  if (!shuffledAndDealt) {
    return null;
  }

  return (
    <div style={{
      overflow: 'hidden', height: '100vh', width: '100vw', backgroundColor: '#fffbeb'
    }}>
      <div style={{ padding: '10px', paddingLeft: '30px', paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

        <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold' }}>GROUP 6 - SOLITAIRE</span>

        <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#4ade80', marginRight: '16px', padding: '8px', borderRadius: '6px' }}>
          <span style={{ fontSize: '18px' }}>SCORE: {score} POINTS</span>
        </div>

        <div style={{
          cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#99f6e4', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
        }}
          onClick={() => shuffleAndDeal()}
        >
          <span style={{ paddingRight: '4px' }}>RESTART</span>
          <Restart width={20} height={20} />
        </div>

        <div style={{ paddingLeft: '16px' }} />

        <div style={{
          cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#fed7aa', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
        }}
          onClick={() => backAMove()}
        >
          <span style={{ paddingRight: '4px' }}>BACK A MOVE</span>
          <BackArrow width={20} height={20} />
        </div>
      </div>

      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: "flex", flexDirection: "row" }}>

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colA?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colA', colA, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colA}
                      fromColName="colA"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colA}
                  toColName="colA"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colB?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colB', colB, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colB}
                      fromColName="colB"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colB}
                  toColName="colB"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colC?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colC', colC, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colC}
                      fromColName="colC"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colC}
                  toColName="colC"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colD?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colD', colD, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colD}
                      fromColName="colD"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colD}
                  toColName="colD"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colE?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colE', colE, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colE}
                      fromColName="colE"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colE}
                  toColName="colE"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colF?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colF', colF, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colF}
                      fromColName="colF"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colF}
                  toColName="colF"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />

            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colG?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} onDoubleClick={() => autoStack('colG', colG, card)}>
                    <CardDraggable
                      draggable
                      key={card.name}
                      card={card}
                      src={CardImage}
                      fromColData={colG}
                      fromColName="colG"
                      changeIsDragging={changeIsDragging}
                    />
                  </div>
                ) : (
                  <Card key={card.name} card={card} src={CardImage} />
                );
              })}
              {isDragging && (
                <DropTarget
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colG}
                  toColName="colG"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />


            {/* Foundation Divs */}
            <div style={{ flex: 1, flexDirection: 'column' }}>
              <div style={{ padding: '20px', borderColor: '#000', borderWidth: '2px', borderStyle: 'solid', borderRadius: '4px', overflow: 'hidden', display: 'inline-block', alignItems: 'flex-start', marginTop: '-150px' }}>

                <div style={{ marginBottom: 20 }}>
                  <span>FOUNDATIONS</span>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: '#fde68a'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun1?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <Card key={card.name} card={card} src={CardImage} isStockpile={true} />;
                    })}

                    {isDragging && (
                      <DropTarget
                        changeIsDragging={changeIsDragging}
                        updateColInTableau={updateColInTableau}
                        toColData={foun1}
                        toColName="foun1"
                        addAMove={addAMove}
                      />
                    )}
                  </div>

                  <div className="space" />
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: '#fde68a'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun2?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <Card key={card.name} card={card} src={CardImage} isStockpile={true} />;
                    })}

                    {isDragging && (
                      <DropTarget
                        changeIsDragging={changeIsDragging}
                        updateColInTableau={updateColInTableau}
                        toColData={foun2}
                        toColName="foun2"
                        addAMove={addAMove}
                      />
                    )}
                  </div>
                </div>

                <div className="space" />

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: '#fde68a'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun3?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <Card key={card.name} card={card} src={CardImage} isStockpile={true} />;
                    })}

                    {isDragging && (
                      <DropTarget
                        changeIsDragging={changeIsDragging}
                        updateColInTableau={updateColInTableau}
                        toColData={foun3}
                        toColName="foun3"
                        addAMove={addAMove}
                      />
                    )}
                  </div>
                  <div className="space" />
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: '#fde68a'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun4?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <Card key={card.name} card={card} src={CardImage} isStockpile={true} />;
                    })}

                    {isDragging && (
                      <DropTarget
                        changeIsDragging={changeIsDragging}
                        updateColInTableau={updateColInTableau}
                        toColData={foun4}
                        toColName="foun4"
                        addAMove={addAMove}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="space" />

              {/* Stockpile Divs */}
              <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}>
                <div>
                  <div style={{ marginBottom: 20 }}>
                    <span>STOCKPILE</span>
                  </div>
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          padding: '4px'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>
                    {stockpile?.map((card, index) => {
                      let CardImage;
                      if (card.faceUp) CardImage = GetCards(card.name);
                      else CardImage = GetCards("CardReverse");

                      return card.faceUp ? (
                        <div key={card.name} onDoubleClick={() => autoStack('stockpile', stockpile, card)}>
                          <CardDraggable
                            draggable
                            key={card.name}
                            card={card}
                            src={CardImage}
                            fromColData={stockpile}
                            fromColName="stockpile"
                            changeIsDragging={changeIsDragging}
                            isStockpile={true}
                          />
                        </div>
                      ) : (
                        <Card key={card.name} card={card} src={CardImage} isStockpile={true} />
                      );
                    })}
                  </div>
                </div>

                <div className="space" />

                <div>


                  {stockpile.length === 0 && <div style={{
                    cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderWidth: '2px', backgroundColor: '#bbf7d0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px'
                  }}
                    onClick={() => reStock()}
                  >
                    <span style={{ paddingRight: '4px' }}>RE-STOCK</span>
                    <Restart width={20} height={20} />
                  </div>}
                  <div style={{ marginBottom: 20 }}>
                    <span>TALON PILE</span>
                  </div>
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          width: '120px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          padding: '4px'
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>
                    <div>
                      {talonPile?.map((card, index) => {
                        const CardImage = GetCards(card.name);
                        return <Card index={index} key={card.name} card={card} src={CardImage} isStockpile={true} />;

                      })}
                      {isDragging && (
                        <DropTarget
                          changeIsDragging={changeIsDragging}
                          updateColInTableau={updateColInTableau}
                          toColData={talonPile}
                          toColName="talon"
                          addAMove={addAMove}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default App;
