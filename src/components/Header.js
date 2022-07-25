import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import { ReactComponent as Restart } from './../assets/icons/restart.svg';
import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';

// Components.
import Timer from './Timer';

const Header = (props) => {

  // State
  const { startShuffleAndDeal, startBackAMove, toggleDarkMode, score, textColor, foundationBackgroundColor, cardBorderColor } = props;
  const [toggle, setToggle] = useState(true);

  // UseEffect
  useEffect(() => {
    toggleDarkMode(!toggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <div style={{ padding: '10px', paddingLeft: '30px', paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold', color: textColor }}>GROUP 6 - SOLITAIRE</span>

      <Timer time={props.time} textColor={props.textColor} />

      <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#10b981', marginRight: '16px', padding: '8px', borderRadius: '6px' }}>
        <span style={{ fontSize: '18px', color: textColor }}>SCORE: {score} POINTS</span>
      </div>

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', borderColor: cardBorderColor, backgroundColor: foundationBackgroundColor, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
      }}
        onClick={() => startShuffleAndDeal()}
      >
        <span style={{ paddingRight: '4px' }}>RESTART</span>
        <Restart width={20} height={20} />
      </div>

      <div style={{ paddingLeft: '16px' }} />

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', borderColor: cardBorderColor, backgroundColor: foundationBackgroundColor, display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
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