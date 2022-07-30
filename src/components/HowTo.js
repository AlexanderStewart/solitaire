import React from 'react';

const HowTo = () => {
  return (
    <div style={{ display: 'flex', borderRadius: '4px', padding: '20px', marginLeft: '20px', marginRight: '20px', marginTop: '10px', flexDirection: 'column', borderStyle: 'solid', borderWidth: '2px', borderColor: '#000', width: '300px' }}>
      <span>HOW TO PLAY:</span>
      <div style={{ marginBottom: 20 }} />
      <span>
        Could someone write something to put here explaining how to play the game?
        <br />
        <br />
        • Maybe use...
        <br />
        • Bullet points
      </span>
    </div>
  );
};

export default HowTo;