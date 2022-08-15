import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const HowTo = (props) => {

  const [textColor, setTextColor] = useState('#000');
  const [borderColor, setBorderColor] = useState('#1f2937');


  useEffect(() => {
    if (props.isDarkMode) {
      setTextColor('#ccd9e5');
      setBorderColor('#ccd9e5');
    }
    else {
      setTextColor('#000');
      setBorderColor('#000');
    }
  }, [props.isDarkMode]);


  return (
    <div style={{ borderRadius: '4px', padding: '20px', marginLeft: '20px', marginRight: '10px', marginTop: '10px', borderStyle: 'solid', borderWidth: '2px', borderColor: borderColor, width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: textColor }}><strong>ABOUT:</strong></span>
        <div style={{ marginBottom: 20 }} />
        <span style={{ color: textColor }}>
        Group Six Solitaire is an <b>open-source solitaire game </b> created by Group Six of the 2022 Spring/Summer Software Development Project at Algonquin College. 
        <br /><br />
The game is currently in <b>beta testing mode</b> — a player may experience anomolies at any point of the game. <b>Please report bugs and/or submit general feedback</b> using the "submit feedback" below. 
<br /><br />
Thank you for playing Group Six Solitaire and please <b>check us out on GitHub</b> for more information regarding the source code of the project. 
          <br /><br />
          <Link to={{ pathname: "/contact" }} target="_blank">
            <span style={{ color: textColor, textDecoration: 'underline' }}> Report a Bug/Submit Feedback</span>
          </Link>
          <br />
          <Link to={{ pathname: "/rules" }} target="_blank">
            <span style={{ color: textColor, textDecoration: 'underline' }}> Game Rules</span>
          </Link>
          <br />
          <Link to={{ pathname: "https://github.com/AlexanderStewart/solitaire" }} target="_blank">
            <span style={{ color: textColor, textDecoration: 'underline' }}> GitHub repository</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HowTo;