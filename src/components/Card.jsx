import React from "react";

function Card(props) {
  const { card } = props;

  return <img src={card} alt={card} className="centered cards" />;
}

export default Card;
