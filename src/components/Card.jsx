import React from "react";

import b from "../images/back.svg";

function Card({ flip, card }) {
  if (flip) {
    return <img src={b} alt="card-back" className="centered cards" />;
  } else {
    return <img src={card} alt={card} className="centered cards" />;
  }
}

export default Card;
