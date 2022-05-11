import React from 'react';

// const card = '2-Club';
// const CardSvg = React.lazy(() => import(`./../assets/cards/${card}.svg`));

import CardSvg from '../assets/cards/QSpade.js';

const Game = () => {
  return (
    <div>
      <CardSvg />
    </div>
  );
};

export default Game;
