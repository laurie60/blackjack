import { useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import shuffled from "./utils/shuffle";

function App() {
  const [count, setCount] = useState(0);
  const[playerHand, setPlayerHand] = useState[]
  console.log(shuffledArray, "<<<shuppAPP");
  

  return (
    <div className="App">
      {shuffled.map((card) => {
        return <CardDeck card={card} />;
      })}
    </div>
  );
}

export default App;
