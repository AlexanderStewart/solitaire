import React from "react";
import "./../styles/Game.css";
import GetCards from "../GetCards";

const Foundation = (props) => {
  const src = props.src;

  return (
    <div className="foundation">
      <img alt="card" className="card" src={GetCards("CardBlank")} />
    </div>
  );
};

export default Foundation;
