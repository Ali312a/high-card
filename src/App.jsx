import React, { useState } from "react";
import "./App.css";
import { makeShuffledDeck } from "./utils.jsx";
import PlayingCard from "./PlayingCard.jsx";

function App() {
  // State variables
  const [cardDeck, setCardDeck] = useState(makeShuffledDeck());
  const [currCards, setCurrCards] = useState([]);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [gameOver, setGameOver] = useState(false);

  // Deal two cards and calculate scores
  const dealCards = () => {
    if (cardDeck.length < 2) {
      setGameOver(true);
      return;
    }
    const newCurrCards = [cardDeck.pop(), cardDeck.pop()];
    setCurrCards(newCurrCards);
    setCardDeck([...cardDeck]);

    // Update scores based on card ranks
    if (newCurrCards[0].rank > newCurrCards[1].rank) {
      setScores((prev) => ({ ...prev, player1: prev.player1 + 1 }));
    } else if (newCurrCards[0].rank < newCurrCards[1].rank) {
      setScores((prev) => ({ ...prev, player2: prev.player2 + 1 }));
    }
  };

  // Restart the game
  const restartGame = () => {
    setCardDeck(makeShuffledDeck());
    setCurrCards([]);
    setScores({ player1: 0, player2: 0 });
    setGameOver(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">High Card Game by Ali Zahed Ali Jassim Rabia</h1>
        <div className="scores">
          <p>Player 1 Score: {scores.player1}</p>
          <p>Player 2 Score: {scores.player2}</p>
        </div>
        {currCards.length > 0 && (
          <div className="cards-container">
            <PlayingCard card={currCards[0]} player="Player 1" />
            <PlayingCard card={currCards[1]} player="Player 2" />
          </div>
        )}
        {!gameOver ? (
          <button className="deal-button" onClick={dealCards}>
            Deal Cards
          </button>
        ) : (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>
              {scores.player1 > scores.player2
                ? "Player 1 Wins!"
                : scores.player1 < scores.player2
                ? "Player 2 Wins!"
                : "It's a Tie!"}
            </p>
            <button className="restart-button" onClick={restartGame}>
              Restart Game
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;


