import React, { useEffect, useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import GetCards from "../GetCards";

// Components.
import CardDraggable from "../components/CardDraggable";
import Card from "../components/Card";
import PlaceHolder from "../components/PlaceHolder";
import DropTarget from "../components/DropTarget";
import Header from "../components/Header";
import HowTo from "../components/HowTo";

// Styles.
import "../styles/Game.css";

// Functions.
import ShuffleAndDeal from "../functions/ShuffleAndDeal";
import AutoStack from "../functions/AutoStack";
import BackAMove from "../functions/BackAMove";

// Assets.
import { ReactComponent as Restart } from '../assets/icons/restart.svg';

const Game = () => {
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Colors
  const [backgroundColor, setBackgroundColor] = useState('#fffbeb');
  const [textColor, setTextColor] = useState('#000');
  const [cardColor, setCardColor] = useState('#fff');
  const [cardBorderColor, setCardBorderColor] = useState('#000');
  const [foundationBackgroundColor, setFoundationBackgroundColor] = useState('#fde68a');

  const [score, setScore] = useState(0);
  const [clockRunning, setClockRunning] = useState(false);
  const [time, setTime] = useState(0);

  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const myInterval = useRef();


  const [currentOption, setCurrentOption] = useState('normal rules');

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

    if (tempStockpile.length - 1 >= 0) {
      tempStockpile[tempStockpile.length - 1].faceUp = true;
    }

    setStockpile(tempStockpile);
    setTalonPile([]);

    addAMove(tempStockpile, 'talon', 'stockpile', false, null);
  };

  const addAMove = (card, fromName, toName, previousCardFlipped, numOfCardsMoved) => {
    if (clockRunning === false) setClockRunning(true);

    let scoredPoints = 0;

    if (fromName === 'talon' && toName === 'stockpile') {
      scoredPoints = scoredPoints - 100;
      if (currentOption === 'vegas rules') setLost(true);
    }

    if (toName === 'colA' || toName === 'colB' || toName === 'colC' || toName === 'colD' || toName === 'colE' || toName === 'colF' || toName === 'colG') {
      if (fromName === 'stockpile') {
        // "5 points for each card moved from the deck to a row stack."
        scoredPoints = scoredPoints + 5;
      }
      // if (fromName === 'colA' || fromName === 'colB' || fromName === 'colC' || fromName === 'colD' || fromName === 'colE' || fromName === 'colF' || fromName === 'colG') {
      //   // "3 points for each card moved from one row stack to another."
      //   scoredPoints = scoredPoints + 3;
      // }
    }

    if (toName === 'foun1' || toName === 'foun2' || toName === 'foun3' || toName === 'foun4') {
      // "10 points for each card moved to a suit stack."
      scoredPoints = scoredPoints + 10;
    }

    if (previousCardFlipped === false && fromName !== 'stockpile' && fromName !== 'talon') {
      console.log('just flipped a card!');
      // "5 points for each card turned face-up in a row stack."
      scoredPoints = scoredPoints + 5;
    }

    setScore(score + scoredPoints);

    const curMove = { card: card, fromName: fromName, toName: toName, previousCardFlipped: previousCardFlipped, numOfCardsMoved: numOfCardsMoved, scoredPoints: scoredPoints };
    const tempMoves = [...moves];
    tempMoves.push(curMove);
    setMoves(tempMoves);
  };


  const changeState = (variable, value) => {
    if (variable === 'deck') setDeck(value);
    if (variable === 'moves') setMoves(value);
    if (variable === 'score') setScore(value);
    if (variable === 'shuffledAndDealt') setShuffledAndDealt(value);
    if (variable === 'time') setTime(value);
    if (variable === 'clockRunning') setClockRunning(value);
    if (variable === 'won') setWon(value);
    if (variable === 'lost') setLost(value);
  };

  const startShuffleAndDeal = () => {
    ShuffleAndDeal(updateColInTableau, deck, changeState);
  };

  const startBackAMove = () => {
    BackAMove(updateScore, updateColInTableau, changeState, moves, foun1, foun2, foun3, foun4, colA, colB, colC, colD, colE, colF, colG, stockpile, talonPile);
  };

  const toggleDarkMode = (e) => {
    setIsDarkMode(e);
  };

  const updateScore = (e) => {
    setScore(score + e);
  };

  const startSetCurrentOption = (curOption) => {
    ShuffleAndDeal(updateColInTableau, deck, changeState);
    setCurrentOption(curOption);
  };

  // *** UseEffect. ***

  // Shuffle deck only when the page refreshes
  useEffect(() => {
    ShuffleAndDeal(updateColInTableau, deck, changeState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      setBackgroundColor('#4b5563');
      setCardColor('#ccd9e5');
      setTextColor('#ccd9e5');
      setCardBorderColor('#1f2937');
      setFoundationBackgroundColor('#ccd9e5');
      document.body.style = 'background: #4b5563;';
    }
    else {
      setBackgroundColor('#fffbeb');
      setCardColor('#fff');
      setTextColor('#000');
      setCardBorderColor('#000');
      setFoundationBackgroundColor('#fde68a');
      document.body.style = 'background: #fffbeb;';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  useEffect(() => {
    if (clockRunning) {
      myInterval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clockRunning]);

  useEffect(() => {
    if (lost || won) clearInterval(myInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lost, won]);

  useEffect(() => {
    if (time % 10 === 0 && time !== 0) setScore(score - 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    if (foun1.length === 13 && foun2.length === 13 && foun3.length === 13 && foun4.length === 13 && !won) {
      let scoredPoints = 0;
      scoredPoints = scoredPoints + 700000 / time;
      setScore(score + scoredPoints);
      setWon(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foun1, foun2, foun3, foun4]);

  useEffect(() => {
    console.log(currentOption);
  }, [currentOption]);

  if (!shuffledAndDealt) {
    return null;
  }

  if (lost) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
        <span style={{ fontWeight: 'bolder', fontSize: '40px' }}>Looks like you lost this round... You scored {score} points</span>
        <div style={{ marginTop: '8px' }} />
        <div style={{
          cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', borderColor: cardBorderColor, backgroundColor: foundationBackgroundColor, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
        }}
          onClick={() => startShuffleAndDeal()}
        >
          <span style={{ paddingRight: '4px' }}>RESTART</span>
          <Restart width={20} height={20} />
        </div>
      </div>
    );
  }

  if (won) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
        <span style={{ fontWeight: 'bolder', fontSize: '40px' }}>You won! You scored {score} points</span>
        <div style={{ marginTop: '8px' }} />
        <div style={{
          cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', borderColor: cardBorderColor, backgroundColor: foundationBackgroundColor, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
        }}
          onClick={() => startShuffleAndDeal()}
        >
          <span style={{ paddingRight: '4px' }}>RESTART</span>
          <Restart width={20} height={20} />
        </div>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: backgroundColor
    }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DndProvider backend={HTML5Backend}>
          <div style={{ display: 'inline-block', flexDirection: 'column' }}>

            <Header startSetCurrentOption={startSetCurrentOption} time={time} textColor={textColor} startShuffleAndDeal={startShuffleAndDeal} foundationBackgroundColor={foundationBackgroundColor} startBackAMove={startBackAMove} score={score} toggleDarkMode={toggleDarkMode} />

            <div className="container">
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
                          cardColor={cardColor}
                          cardBorderColor={cardBorderColor}
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
                      <div className={"colA"}><Card cardColor={cardColor} cardBorderColor={cardBorderColor} key={card.name} card={card} src={CardImage} /></div>
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div key={card.name} className={"colB"}><Card cardColor={cardColor} cardBorderColor={cardBorderColor} card={card} src={CardImage} /></div>
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div key={card.name} className={"colC"}>
                        <Card cardColor={cardColor} card={card} src={CardImage} cardBorderColor={cardBorderColor} />
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div key={card.name} className={"colD"}>
                        <Card cardColor={cardColor} card={card} cardBorderColor={cardBorderColor} src={CardImage} />
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div key={card.name} className={'colE'}>
                        <Card cardColor={cardColor} card={card} cardBorderColor={cardBorderColor} src={CardImage} />
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div className={'colF'} key={card.name} ><Card cardColor={cardColor} cardBorderColor={cardBorderColor} card={card} src={CardImage} /></div>
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
                          cardBorderColor={cardBorderColor}
                          cardColor={cardColor}
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
                      <div className={'colG'} key={card.name}><Card cardColor={cardColor} cardBorderColor={cardBorderColor} card={card} src={CardImage} /></div>
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

              </div>
            </div>
          </div>
          <div>
            {/*** FOUNDATIONS RENDERING ***/}
            <div style={{ flex: 1, flexDirection: 'column', marginTop: '10px' }}>
              <div style={{ padding: '20px', borderWidth: '2px', borderStyle: 'solid', borderRadius: '4px', overflow: 'hidden', display: 'inline-block', alignItems: 'flex-start', borderColor: textColor }}>

                <div style={{ marginBottom: 20 }}>
                  <span style={{ color: textColor }}>FOUNDATIONS</span>
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
                          borderColor: textColor,
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: foundationBackgroundColor
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun1?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <div className={'foun1'} key={card.name} ><Card cardBorderColor={cardBorderColor} cardColor={cardColor} card={card} src={CardImage} isStockpile={true} /></div>;
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
                          borderColor: textColor,
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: foundationBackgroundColor
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun2?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <div className={'foun2'} key={card.name}><Card cardBorderColor={cardBorderColor} cardColor={cardColor} card={card} src={CardImage} isStockpile={true} /></div>;
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
                          borderColor: textColor,
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: foundationBackgroundColor
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun3?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <div className={'foun3'} key={card.name}><Card cardBorderColor={cardBorderColor} cardColor={cardColor} card={card} src={CardImage} isStockpile={true} /></div>;
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
                          borderColor: textColor,
                          width: '120px',
                          padding: '4px',
                          borderRadius: '4px',
                          borderWidth: '2px',
                          backgroundColor: foundationBackgroundColor
                        }}
                        src={GetCards("CardBlank")}
                      />
                    </div>

                    {foun4?.map((card) => {
                      let CardImage = GetCards(card.name);
                      return <div className={'foun4'} key={card.name}><Card cardColor={cardColor} cardBorderColor={cardBorderColor} card={card} src={CardImage} isStockpile={true} /></div>;
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
                    <span style={{ color: textColor }}>STOCKPILE</span>
                  </div>

                  {/*** STOCKPILE RENDERING ***/}
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: textColor,
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
                            cardBorderColor={cardBorderColor}
                            cardColor={cardColor}
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
                        <div className={'stockpile'} key={card.name}><Card cardBorderColor={cardBorderColor} cardColor={cardColor} card={card} src={CardImage} isStockpile={true} /></div>
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
                    <span style={{ color: textColor }}>TALON PILE</span>
                  </div>

                  {/*** TALONPILE RENDERING ***/}
                  <div>
                    <div>
                      <img
                        alt='card'
                        draggable='false'
                        style={{
                          borderStyle: 'solid',
                          borderColor: textColor,
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
                        return <div className={'talonPile'} key={card.name}><Card cardBorderColor={cardBorderColor} cardColor={cardColor} index={index} card={card} src={CardImage} isStockpile={true} /></div>;

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
          <div>
            <HowTo isDarkMode={isDarkMode} />
          </div>
        </DndProvider>
      </div>
    </div >
  );
};

export default Game;
