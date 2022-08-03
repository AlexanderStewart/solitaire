import React, { useEffect, useState } from 'react';

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
        <span style={{ color: textColor }}>HOW TO PLAY:</span>
        <div style={{ marginBottom: 20 }} />
        <span style={{ color: textColor }}>
          Could someone write something to put here explaining how to play the game?
          <br />
          <br />
          • Maybe use...
          <br />
          • Bullet points
        </span>
      </div>
    </div>
  );
};

export default HowTo;