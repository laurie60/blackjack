import { useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import score from "./utils/score";
import scoreFirst from "./utils/scoreFirst";
import winner from "./utils/winner";

import shuffled from "./utils/shuffle";

function App() {
  const [house, setHouse] = useState([...shuffled]);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [flipPlayerOne, setFlipPlayerOne] = useState(false);
  const [flipPlayerTwo, setFlipPlayerTwo] = useState(false);
  const [standOne, setStandOne] = useState(false);
  const [standTwo, setStandTwo] = useState(false);
  const [turn, setTurn] = useState(-2);

  const flipOneHandleOnClick = () => {
    setFlipPlayerOne(!flipPlayerOne);
  };

  const flipTwoHandleOnClick = () => {
    setFlipPlayerTwo(!flipPlayerTwo);
  };

  const standHandleOnClick = () => {
    if (turn === 0) {
      setStandOne(true);
      setTurn(1);
    }
    if (turn === 1) {
      setStandTwo(true);
      setTurn(0);
    }
  };

  const handleOnClick = () => {
    const scoreVars = { house: house, setHouse: setHouse };

    if (turn === 0 || turn === -2) {
      scoreVars.playerHand = playerOneHand;
      scoreVars.setPlayerHand = setPlayerOneHand;
      scoreVars.playerScore = playerOneScore;
      scoreVars.setPlayerScore = setPlayerOneScore;
    } else {
      scoreVars.playerHand = playerTwoHand;
      scoreVars.setPlayerHand = setPlayerTwoHand;
      scoreVars.playerScore = playerTwoScore;
      scoreVars.setPlayerScore = setPlayerTwoScore;
    }

    if (turn < 0) {
      scoreFirst(scoreVars);
      setTurn(turn + 1);
    } else if (turn === 0 && standTwo === true) {
      score(scoreVars);
      setTurn(0);
    } else if (turn === 0) {
      score(scoreVars);
      setTurn(1);
    } else if (turn === 1 && standOne === true) {
      score(scoreVars);
      setTurn(1);
    } else if (turn === 1) {
      score(scoreVars);
      setTurn(0);
    }
  };

  const winnerVars = {
    standOne: standOne,
    standTwo: standTwo,
    playerOneScore: playerOneScore,
    playerTwoScore: playerTwoScore,
  };

  return (
    <div className="App">
      {winner(winnerVars) ? (
        <div>
          <h1>BlackJack!</h1>
          <h2>{`Player One has ${playerOneScore} points, Player Two has ${playerTwoScore} points`}</h2>
          {winner(winnerVars) === "draw" ? (
            <h2>Its a draw, you are both winners!</h2>
          ) : (
            <h2>{`Congratulations ${winner(
              winnerVars
            )}, you are the winner!`}</h2>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <h1>BlackJack!</h1>
          <h3>
            {" "}
            {turn === -2 && "Player 1, please take your first two cards"}
            {turn === -1 && "Player 2, please take your first two cards"}
            {standOne && "Player One is Standing. "}
            {standTwo && "Player Two is Standing. "}
            {turn === 0 && "Player 1, take another card or stand?"}
            {turn === 1 && "Player 2, take another card or stand?"}
          </h3>
          <div className="top-buttons">
            <button onClick={handleOnClick} className="button">
              {turn === -2 && "First Cards-Player One"}
              {turn === -1 && "First Cards-Player Two"}
              {turn === 0 && "New Card Player One"}
              {turn === 1 && "New Card Player Two"}
            </button>
            {turn > -1 && (
              <button
                onClick={standHandleOnClick}
                className="stand-button button"
              >
                {turn === 0 && "Stand-Player One"}
                {turn === 1 && "Stand-Player Two"}
              </button>
            )}
          </div>
        </div>
      )}
      <div className="split left">
        <div className="card-container">
          {playerOneHand.map((card) => {
            return <CardDeck card={card} flip={flipPlayerOne} />;
          })}
        </div>
        <button
          onClick={flipOneHandleOnClick}
          className="button flip flip-one "
        >
          Flip Cards{" "}
        </button>
      </div>

      <div className="split right">
        <div className="card-container">
          {playerTwoHand.map((card) => {
            return <CardDeck card={card} flip={flipPlayerTwo} />;
          })}
        </div>
        <button
          onClick={flipTwoHandleOnClick}
          className=" button flip flip-two "
        >
          Flip Cards{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
