import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from "react-router-dom";

import { ReactComponent as Restart } from './../assets/icons/restart.svg';
import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';

// Components.
import Timer from './Timer';

const Header = (props) => {

  // State
  const { startShuffleAndDeal, startBackAMove, toggleDarkMode, score, textColor, foundationBackgroundColor, cardBorderColor } = props;
  const [toggle, setToggle] = useState(true);
  const [currentOption, setCurrentOption] = useState('normal rules');

  // UseEffect
  useEffect(() => {
    toggleDarkMode(!toggle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  useEffect(() => {
    props.startSetCurrentOption(currentOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOption]);

  const options = [
    'normal rules', 'vegas rules'
  ];

  return (
    <div style={{ display: 'inline-block', borderRadius: '4px', flexShrink: 0, padding: '20px', margin: '10px', marginLeft: '10px', flexDirection: 'column', borderStyle: 'solid', borderWidth: '2px', borderColor: textColor }}>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

        <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold', color: textColor, textDecoration: 'underline' }}>GROUP 6 - SOLITAIRE</span>
        <Timer time={props.time} textColor={props.textColor} />

        <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#10b981', marginRight: '16px', padding: '8px', borderRadius: '6px' }}>
          <span style={{ fontSize: '18px', color: textColor }}>SCORE: {score} POINTS</span>
        </div>

        <Dropdown options={options} onChange={(e) => setCurrentOption(e.value)} value={currentOption} placeholder="Select an option" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px' }}>
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

        <div style={{ paddingLeft: '16px' }} />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to={'/rules'}>
            <span style={{ color: textColor, textDecoration: 'underline' }}> Game Rules</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;