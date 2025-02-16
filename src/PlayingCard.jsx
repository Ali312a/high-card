import React from "react";
import "./PlayingCard.css";

const PlayingCard = ({ card, player }) => {
  return (
    <div className="playing-card">
      <h3>{player}</h3>
      <div className="card">
        <p className="card-rank">{card.name}</p>
        <p className="card-suit">{card.suit}</p>
      </div>
    </div>
  );
};

export default PlayingCard;

