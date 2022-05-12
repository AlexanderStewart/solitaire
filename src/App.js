import React, { useEffect, useState } from 'react';
import GetCards from './GetCards';
import './styles/Game.css';

const App = () => {

  // state
  const [deck, setDeck] = useState([
    { name: 'AClub', faceUp: false },
    { name: 'ADiamond', faceUp: false },
    { name: 'AHeart', faceUp: false },
    { name: 'ASpade', faceUp: false },
    { name: '2Club', faceUp: false },
    { name: '2Diamond', faceUp: false },
    { name: '2Heart', faceUp: false },
    { name: '2Spade', faceUp: false },
    { name: '3Club', faceUp: false },
    { name: '3Diamond', faceUp: false },
    { name: '3Heart', faceUp: false },
    { name: '3Spade', faceUp: false },
    { name: '4Club', faceUp: false },
    { name: '4Diamond', faceUp: false },
    { name: '4Heart', faceUp: false },
    { name: '4Spade', faceUp: false },
    { name: '5Club', faceUp: false },
    { name: '5Diamond', faceUp: false },
    { name: '5Heart', faceUp: false },
    { name: '5Spade', faceUp: false },
    { name: '6Club', faceUp: false },
    { name: '6Diamond', faceUp: false },
    { name: '6Heart', faceUp: false },
    { name: '6Spade', faceUp: false },
    { name: '7Club', faceUp: false },
    { name: '7Diamond', faceUp: false },
    { name: '7Heart', faceUp: false },
    { name: '7Spade', faceUp: false },
    { name: '8Club', faceUp: false },
    { name: '8Diamond', faceUp: false },
    { name: '8Heart', faceUp: false },
    { name: '8Spade', faceUp: false },
    { name: '9Club', faceUp: false },
    { name: '9Diamond', faceUp: false },
    { name: '9Heart', faceUp: false },
    { name: '9Spade', faceUp: false },
    { name: '10Club', faceUp: false },
    { name: '10Diamond', faceUp: false },
    { name: '10Heart', faceUp: false },
    { name: '10Spade', faceUp: false },
    { name: 'JClub', faceUp: false },
    { name: 'JDiamond', faceUp: false },
    { name: 'JHeart', faceUp: false },
    { name: 'JSpade', faceUp: false },
    { name: 'QClub', faceUp: false },
    { name: 'QDiamond', faceUp: false },
    { name: 'QHeart', faceUp: false },
    { name: 'QSpade', faceUp: false },
    { name: 'KClub', faceUp: false },
    { name: 'KDiamond', faceUp: false },
    { name: 'KHeart', faceUp: false },
    { name: 'KSpade', faceUp: false },
  ]);

  const [rowA, setRowA] = useState([]);
  const [rowB, setRowB] = useState([]);
  const [rowC, setRowC] = useState([]);
  const [rowD, setRowD] = useState([]);
  const [rowE, setRowE] = useState([]);
  const [rowF, setRowF] = useState([]);
  const [rowG, setRowG] = useState([]);

  const [shuffledAndDealt, setShuffledAndDealt] = useState(false);

  // functions
  const shuffleAndDeal = () => {
    const shuffledDeck = randomizeArray(deck);
    setDeck(shuffledDeck);

    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];

      // rowG shuffle
      if (i < 7) {
        let tempRowG = rowG;
        tempRowG.push(card);
        setRowG(tempRowG);
        continue;
      }

      // rowF shuffle
      if (i < 13) {
        let tempRowF = rowF;
        tempRowF.push(card);
        setRowF(tempRowF);
        continue;
      }

      // rowE shuffle
      if (i < 18) {
        let tempRowE = rowE;
        tempRowE.push(card);
        setRowE(tempRowE);
        continue;
      }

      // rowD shuffle
      if (i < 22) {
        let tempRowD = rowD;
        tempRowD.push(card);
        setRowD(tempRowD);
        continue;
      }

      // rowC shuffle
      if (i < 25) {
        let tempRowC = rowC;
        tempRowC.push(card);
        setRowC(tempRowC);
        continue;
      }

      // rowB shuffle
      if (i < 27) {
        let tempRowB = rowB;
        tempRowB.push(card);
        setRowB(tempRowB);
        continue;
      }

      // rowA shuffle
      if (i < 28) {
        let tempRowA = rowA;
        tempRowA.push(card);
        setRowA(tempRowA);
        continue;
      }
    }
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

  // useEffects
  useEffect(() => {
    console.log('useEffect fired');
    shuffleAndDeal();
  }, []);

  useEffect(() => {
    console.log('');
    console.log('row A');
    console.log(rowA);
  }, [rowA]);

  useEffect(() => {
    console.log('');
    console.log('row B');
    console.log(rowB);
  }, [rowB]);

  useEffect(() => {
    console.log('');
    console.log('row C');
    console.log(rowC);
  }, [rowC]);

  useEffect(() => {
    console.log('');
    console.log('row D');
    console.log(rowD);
  }, [rowD]);

  useEffect(() => {
    console.log('');
    console.log('row E');
    console.log(rowE);
  }, [rowE]);

  useEffect(() => {
    console.log('');
    console.log('row F');
    console.log(rowF);
  }, [rowF]);

  useEffect(() => {
    console.log('');
    console.log('row G');
    console.log(rowG);
  }, [rowG]);

  if (!shuffledAndDealt) {
    return null;
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div>
          {rowA?.map(card => {

            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowB?.map(card => {

            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowC?.map(card => {
            // TODO: comment this out when we want to hide certain cards
            // let CardImage;
            // if (card.faceUp) CardImage = GetCards(card.name);
            // else CardImage = GetCards('CardReverse');
            const CardImage = GetCards(card.name);
            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowD?.map(card => {
            let CardImage;
            if (card.faceUp) CardImage = GetCards(card.name);
            else CardImage = GetCards('CardReverse');

            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowE?.map(card => {
            // TODO: comment this out when we want to hide certain cards
            // let CardImage;
            // if (card.faceUp) CardImage = GetCards(card.name);
            // else CardImage = GetCards('CardReverse');
            const CardImage = GetCards(card.name);
            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowF?.map(card => {
            // TODO: comment this out when we want to hide certain cards
            // let CardImage;
            // if (card.faceUp) CardImage = GetCards(card.name);
            // else CardImage = GetCards('CardReverse');
            const CardImage = GetCards(card.name);
            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />

        <div>
          {rowG?.map(card => {
            // TODO: comment this out when we want to hide certain cards
            // let CardImage;
            // if (card.faceUp) CardImage = GetCards(card.name);
            // else CardImage = GetCards('CardReverse');
            const CardImage = GetCards(card.name);
            return (
              <div className='card-container'>
                <img
                  key={card.name}
                  className='card'
                  src={CardImage}
                />
              </div>
            );
          })}
        </div>

        <div className="space" />
        <div className="space" />

        {/* TODO: make this work, just images right now */}
        <div class="card-container">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              className='card'
              src={GetCards('CardBlank')}
            />
            <div className="space" />
            <img
              className='card'
              src={GetCards('CardBlank')}
            />
          </div>
          <div style={{ height: 20 }} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              className='card'
              src={GetCards('CardBlank')}
            />
            <div className="space" />
            <img
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
