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
  // const [first, setFirst] = useState(true);
  const [turn, setTurn] = useState(0);

  const handleOnClick = () => {
    const scoreVars = { house: house, setHouse: setHouse };

    if (turn % 2 === 0) {
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

    if (turn < 2) {
      scoreFirst(scoreVars);
      setTurn(turn + 1);
    } else {
      score(scoreVars);
      setTurn(turn + 1);
    }
  };

  return (
    <div className="App">
      <h1>Let's play BlackJack!</h1>
      <Button variant="contained" onClick={handleOnClick}>
        {turn === 0 && "First Cards-Player One"}
        {turn === 1 && "First Cards-Player Two"}
        {turn > 1 && turn % 2 === 0 && "New Card Player One"}
        {turn > 1 && turn % 2 !== 0 && "New Card Player Two"}
      </Button>
      <div className="split left">
        <div className="card-container">
          {playerOneHand.map((card) => {
            return <CardDeck card={card} />;
          })}
        </div>
      </div>

      <div className="split right">
        <div className="card-container">
          {playerTwoHand.map((card) => {
            return (
              <div className="card">
                <CardDeck card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
