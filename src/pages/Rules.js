import React from 'react';
import '../styles/Game.css';
import { Link } from "react-router-dom";
import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';

function Rules() {
  return (
    <div style={{ margin: '30px' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px' }}>
        <div style={{ fontSize: '18px' }}>
          <h2 style={{ textAlign: 'center ' }}>How to Play Group Six Solitaire</h2>
          <strong>STARTING THE GAME:</strong> <br />
          The game/timer begins when the first valid move is placed.
          <br /><br />
          <strong>THE GOAL:</strong><br />
          The goal of the game is to fill all four foundations with the deck of cards, with each foundation containing only one suit ordered ascending from ace to king.
          <br /><br />
          <strong>TABLEAU:</strong><br />
          The game consists of seven talbeau columns. The card(s) faced-up in each column are draggable and can be used for any valid move. Cards are stacked in the tableau in descending order by alternating colours. Only kings or piles starting with king can be placed in an empty tableau.
          <br /><br />
          <strong>FOUNDATION:</strong><br />
          Each of the four foundations must be filled in ascending order starting with ace and ending with king. Unlike the tableau columns, each foundation stack must contain only one suit.
          <br /><br />
          <strong>STOCK AND TALON PILE:</strong><br />
          Stockpile cards can only be played one at a time as they are faced up at the top of the deck. A player can place the top card into the talon pile should the card not be playable, or the card can be played in a tableau or a foundation. Once the stock pile is empty, the player can restock the stock pile with the talon pile cards by clicking "restock"
          <br /><br />
          <div id="positive-pts">
            <strong>POSITIVE POINTS:</strong><br />
            +5 points – when a card is moved from the stockpile to the tableau <br />
            +5 points – when a face-down card in a tableau column flips face-up<br />
            +10 points – for each card placed in a foundation<br />
            + Bonus points –awarded when game is won - 700,000/seconds to win<br />
          </div>
          <div id="negative-pts">
            <strong>NEGATIVE POINTS:</strong><br />
            -2 points plus points gained from previous move – when pressing “back a move” <br />
            -2 points – for every 10 seconds of play<br />
            -100 points – every time the stockpile is reset (Draw 1 System)<br />
          </div>
          <br /><br />
          <strong>VEGAS RULES:</strong><br />
          Vegas rules are the same as standard, except the <b>stockpile can only be played through once</b>. Once the stockpile is empty, the game ends. The goal is to get the highest score possible before the stockpile is empty.
          <br />
          <br />
          <br />
          <br />
          <div id="back-link">
            <div>
              <Link to={'/'}>
                <div style={{
                  cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', color: '#000', borderColor: '#000', backgroundColor: '#d4d4d8', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px'
                }}
                >
                  <BackArrow width={20} height={20} />
                  <div style={{ marginLeft: '6px' }} />
                  <span>BACK</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div >
  );
}

export default Rules;