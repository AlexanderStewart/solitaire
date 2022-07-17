import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GetCards from "./GetCards";

// Components.
import CardDraggable from "./components/CardDraggable";
import Card from "./components/Card";
import PlaceHolder from "./components/PlaceHolder";
import DropTarget from "./components/DropTarget";
import Header from "./components/Header";

// Styles.
import "./styles/Game.css";

// Functions.
import ShuffleAndDeal from "./functions/ShuffleAndDeal";
import AutoStack from "./functions/AutoStack";
import BackAMove from "./functions/BackAMove";

// Assets.
import { ReactComponent as Restart } from './assets/icons/restart.svg';

const App = () => {
  // *** State. ***

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

  // *** Functions. ***

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

    for (let i = 0; i < tempStockpile.length; i++) {
      tempStockpile[i].faceUp = false;
    }

    if (tempStockpile.length - 1 > 0) {
      tempStockpile[tempStockpile.length - 1].faceUp = true;
    }

    setStockpile(tempStockpile);
    setTalonPile([]);

    addAMove(tempStockpile, 'talon', 'stockpile', false, null);
  };

  const addAMove = (card, fromName, toName, previousCardFlipped, numOfCardsMoved) => {
    const curMove = { card: card, fromName: fromName, toName: toName, previousCardFlipped: previousCardFlipped, numOfCardsMoved: numOfCardsMoved };
    const tempMoves = [...moves];
    tempMoves.push(curMove);
    setMoves(tempMoves);
  };

  const changeState = (variable, value) => {
    if (variable === 'deck') setDeck(value);
    if (variable === 'moves') setMoves(value);
    if (variable === 'shuffledAndDealt') setShuffledAndDealt(value);
  };

  const startShuffleAndDeal = () => {
    ShuffleAndDeal(updateColInTableau, deck, changeState);
  };

  const startBackAMove = () => {
    BackAMove(updateColInTableau, changeState, moves, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile);
  };

  // *** UseEffect. ***

  // Shuffle deck only when the page refreshes
  useEffect(() => {
    ShuffleAndDeal(updateColInTableau, deck, changeState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!shuffledAndDealt) {
    return null;
  }

  return (
    <div style={{
      overflow: 'hidden', height: '100vh', width: '100vw', backgroundColor: '#fffbeb'
    }}>
      <Header startShuffleAndDeal={startShuffleAndDeal} startBackAMove={startBackAMove} score={score} />

      <div className="container">
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: "flex", flexDirection: "row" }}>

            {/*** COLUMN A RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colA?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={"colAFaceUp colA"} onDoubleClick={() => AutoStack('colA', colA, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={"colA"}><Card key={card.name} card={card} src={CardImage} /></div>
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

            {/*** COLUMN B RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colB?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={"colBFaceUp colB"} onDoubleClick={() => AutoStack('colB', colB, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={"colB"}><Card key={card.name} card={card} src={CardImage} /></div>
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

            {/*** COLUMN C RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colC?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={"colCFaceUp colC"} onDoubleClick={() => AutoStack('colC', colC, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={"colC"}>
                    <Card key={card.name} card={card} src={CardImage} />
                  </div>

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

            {/*** COLUMN D RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colD?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={"colDFaceUp colD"} onDoubleClick={() => AutoStack('colD', colD, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)} >
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
                  <div className={"colD"}>
                    <Card key={card.name} card={card} src={CardImage} />
                  </div>
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

            {/*** COLUMN E RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colE?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={'colEFaceUp colE'} onDoubleClick={() => AutoStack('colE', colE, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={'colE'}>
                    <Card key={card.name} card={card} src={CardImage} />
                  </div>
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

            {/*** COLUMN F RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colF?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={"colFFaceUp colF"} onDoubleClick={() => AutoStack('colF', colF, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={'colF'}><Card key={card.name} card={card} src={CardImage} /></div>
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

            {/*** COLUMN G RENDERING ***/}
            <div>
              <PlaceHolder src={GetCards("CardBlank")} />
              {colG?.map((card, index) => {
                let CardImage;
                if (card.faceUp) CardImage = GetCards(card.name);
                else CardImage = GetCards("CardReverse");

                return card.faceUp ? (
                  <div key={card.name} className={'colGFaceUp colG'} onDoubleClick={() => AutoStack('colG', colG, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                  <div className={'colG'}><Card key={card.name} card={card} src={CardImage} /></div>
                );
              })}
              {isDragging && (
                <DropTarget
                  id="colG"
                  changeIsDragging={changeIsDragging}
                  updateColInTableau={updateColInTableau}
                  toColData={colG}
                  toColName="colG"
                  addAMove={addAMove}
                />
              )}
            </div>

            <div className="space" />


            {/*** FOUNDATIONS RENDERING ***/}
            <div style={{ flex: 1, flexDirection: 'column' }}>
              <div style={{ padding: '20px', borderColor: '#000', borderWidth: '2px', borderStyle: 'solid', borderRadius: '4px', overflow: 'hidden', display: 'inline-block', alignItems: 'flex-start', marginTop: '-150px' }}>

                <div style={{ marginBottom: 20 }}>
                  <span>FOUNDATIONS</span>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>

                  {/*** FOUNDATION 1 RENDERING ***/}
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
                      return <div className={'foun1'}><Card key={card.name} card={card} src={CardImage} isStockpile={true} /></div>;
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

                  {/*** FOUNDATION 2 RENDERING ***/}
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
                      return <div className={'foun2'}><Card key={card.name} card={card} src={CardImage} isStockpile={true} /></div>;
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

                  {/*** FOUNDATION 3 RENDERING ***/}
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
                      return <div className={'foun3'}><Card key={card.name} card={card} src={CardImage} isStockpile={true} /></div>;
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

                  {/*** FOUNDATION 4 RENDERING ***/}
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
                      return <div className={'foun4'}><Card key={card.name} card={card} src={CardImage} isStockpile={true} /></div>;
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

                  {/*** STOCKPILE RENDERING ***/}
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
                        <div key={card.name} className={'stockpileFaceUp stockpile'} onDoubleClick={() => AutoStack('stockpile', stockpile, card, updateColInTableau, addAMove, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile)}>
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
                        <div className={'stockpile'}><Card key={card.name} card={card} src={CardImage} isStockpile={true} /></div>
                      );
                    })}
                  </div>
                </div>

                <div className="space" />

                <div>

                  {/* only if stockpile is empty do we display the reStock button */}
                  {stockpile.length === 0 && <div className="reStock" style={{
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

                  {/*** TALONPILE RENDERING ***/}
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
                        return <div className={'talonPile'}><Card index={index} key={card.name} card={card} src={CardImage} isStockpile={true} /></div>;

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
      </div >
    </div >
  );
};

export default App;
