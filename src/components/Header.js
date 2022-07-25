import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import { ReactComponent as Restart } from './../assets/icons/restart.svg';
import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';
import "../styles/Header.css";
import Timer from './Timer';

const Header = (props) => {

  // State
  const { startShuffleAndDeal, startBackAMove, toggleDarkMode, score, textColor } = props;
  const [toggle, setToggle] = useState(true);


  // UseEffect
  useEffect(() => {
    toggleDarkMode(!toggle);
  }, [toggle]);

  return (
    <div style={{ padding: '10px', paddingLeft: '30px', paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold', color: textColor }}>GROUP 6 - SOLITAIRE</span>

      <div className='score-container'>
        <span id='score'>SCORE: {score} POINTS</span>
      </div>
      <div>
        <Timer running={props.running} />
      </div>

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#99f6e4', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
      }}
        onClick={() => startShuffleAndDeal()}
      >
        <span style={{ paddingRight: '4px' }}>RESTART</span>
        <Restart width={20} height={20} />
      </div>

      <div style={{ paddingLeft: '16px' }} />

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#fed7aa', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
      }}
        onClick={() => startBackAMove()}
      >
        <span style={{ paddingRight: '4px' }}>BACK A MOVE</span>
        <BackArrow width={20} height={20} />
      </div>

      <div style={{ paddingLeft: '16px' }} />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Switch onChange={(e) => setToggle(e)} checked={toggle} uncheckedIcon={false} checkedIcon={false} />
      </div>
    </div>
  );
};

export default Header;