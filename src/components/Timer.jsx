import React, { useState, useEffect } from "react";
import "../styles/Header.css";
  
export default function Timer(props) {
    let interval;
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
    }, [running]);

  return (
    <div className="score-container">
    <span>TIME: </span>    
    <span className='score'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span className='score'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
    <span className='score'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
  </div>
  );
}