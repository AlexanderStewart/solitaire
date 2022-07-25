import React from "react";

const Timer = (props) => {

  const time = props.time;
  const textColor = props.textColor;

  return (
    <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#10b981', marginRight: '16px', padding: '8px', borderRadius: '6px', width: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: '18px', color: textColor }}>{time}.00 SEC</span>
    </div>
  );
};

export default Timer;