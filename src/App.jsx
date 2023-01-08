import { useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import shuffled from "./utils/shuffle";
import Button from "@mui/material/Button";
import score from "./utils/score";
import scoreFirst from "./utils/socreFirst";

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

  // const winner = [];
  const winner = () => {
    if (standOne && standTwo) {
      if (playerOneScore > playerTwoScore) {
        return "player1";
      } else if (playerOneScore < playerTwoScore) {
        return "player2";
      }
      return "draw";
    }
    if (playerOneScore > 20) {
      return "player2";
    }
    if (playerTwoScore > 20) {
      return "player1";
    }
  };

  // playerOneScore > 20 && setWinner("Player2");

  console.log(winner(), "<<<s<<<overwinner>>>>>>>>>>>.");

  // if (stand) {
  //   console.log("stand!!!!!!");
  //   console.log(playerTwoScore, playerOneScore);
  //   if (playerOneScore > playerTwoScore) {
  //     winner.push("playerOne");
  //   } else if (playerTwoScore > playerOneScore) {
  //     // setWinner("playerTwo");
  //     winner.push("playerTwo");
  //   }
  //   // else setWinner("draw");
  // }
  // console.log(winner, "winner");

  // if (playerOneScore > 20) {
  //   console.log("player one lost");
  //   winner.push("playerTwo");
  // }
  // if (playerTwoScore > 20) {
  //   console.log("player two lost");
  //   setWinner("playerOne");
  // }

  // const [first, setFirst] = useState(true);

  console.log(flipPlayerOne);

  // const victory =

  const flipOneHandleOnClick = () => {
    console.log("in flip click");
    setFlipPlayerOne(!flipPlayerOne);
  };

  const flipTwoHandleOnClick = () => {
    console.log("in flip click Two");
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
    console.log("in new click");

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

  console.log(playerOneScore, playerTwoScore, "Player one and two scores");
  console.log(turn, "<<<<<<<<>>>>>>>>>.turn");

  return (
    <div className="App">
      <div>
        <h1>BlackJack!</h1>
        <h3>Hi there</h3>
      </div>

      <div className="top-buttons">
        <button onClick={handleOnClick} className="button">
          {turn === -2 && "First Cards-Player One"}
          {turn === -1 && "First Cards-Player Two"}
          {turn === 0 && "New Card Player One"}
          {turn === 1 && "New Card Player Two"}
        </button>
        {turn > -1 && (
          <button onClick={standHandleOnClick} className="button">
            {turn === 0 && "Stand-Player One"}
            {turn === 1 && "Stand-Player Two"}
          </button>
        )}
      </div>
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
