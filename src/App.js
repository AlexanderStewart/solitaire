import React, { useEffect, useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GetCards from "./GetCards";
import CardDraggable from "./components/CardDraggable";
import Card from "./components/Card";
import PlaceHolder from "./components/PlaceHolder";
import DropTarget from "./components/DropTarget";
import ValidMoveFoundation from "./ValidMoveFoundation";

import "./styles/Game.css";


// Assets
import { ReactComponent as Restart } from './assets/icons/restart.svg';

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

  // Boolean state variable that turns true at the end of shuffleAndDeal(). Everything on the board is not rendered until this is true.
  const [shuffledAndDealt, setShuffledAndDealt] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // REF

  const passedFirstRender = useRef(false);

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

  const reStock = () => {
    const tempStockpile = [...talonPile];
    tempStockpile.reverse();
    setStockpile(tempStockpile);
    setTalonPile([]);
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
  };

  const changeIsDragging = (e) => {
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
    <div style={{
      overflow: 'hidden', height: '800px', backgroundColor: '#fffbeb'
    }}>
      <div style={{ padding: '10px', paddingLeft: '30px', paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

        <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold' }}>GROUP 6 - SOLITAIRE</span>

        <div style={{
          cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#99f6e4', display: 'flex', alignItems: 'center'
        }}
          onClick={() => shuffleAndDeal()}
        >
          <span style={{ paddingRight: '4px' }}>RESTART</span>
          <Restart width={20} height={20} />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colA}
                    fromColName="colA"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colB}
                    fromColName="colB"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colC}
                    fromColName="colC"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colD}
                    fromColName="colD"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colE}
                    fromColName="colE"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colF}
                    fromColName="colF"
                    changeIsDragging={changeIsDragging}
                  />
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
                  <CardDraggable
                    draggable
                    key={card.name}
                    card={card}
                    src={CardImage}
                    fromColData={colG}
                    fromColName="colG"
                    changeIsDragging={changeIsDragging}
                  />
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
                />
              )}
            </div>

            <div className="space" />


            {/* Foundation Divs */}
            <div style={{ flex: 1, flexDirection: 'column' }}>
              <div style={{ padding: '20px', borderColor: '#000', borderStyle: 'solid', borderRadius: '4px', borderWidth: '2px', overflow: 'hidden', display: 'inline-block', alignItems: 'flex-start', marginTop: '-150px' }}>

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
                  <div onClick={() => {

                    if (stockpile.length === 0) return;

                    const tempStockpile = [...stockpile];
                    const cardToMove = tempStockpile.pop();

                    if (stockpile.length !== 1) tempStockpile[tempStockpile.length - 1].faceUp = true;

                    const tempTalonPile = [...talonPile];
                    tempTalonPile.push(cardToMove);

                    setStockpile(tempStockpile);
                    setTalonPile(tempTalonPile);
                  }}>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: '#000',
                          borderWidth: '3px',
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
                      ) : (
                        <Card key={card.name} card={card} src={CardImage} isStockpile={true} />
                      );
                    })}
                  </div>
                </div>

                <div className="space" />

                <div>


                  {stockpile.length === 0 && <div style={{
                    cursor: 'pointer', padding: '8px 16px', backgroundColor: '#bbf7d0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px'
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
                    {talonPile?.map((card, index) => {
                      const CardImage = GetCards(card.name);
                      return <Card index={index} key={card.name} card={card} src={CardImage} isStockpile={true} />;
                    })}
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
