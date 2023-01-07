const score = ({
  house,
  setHouse,
  playerHand,
  setPlayerHand,
  playerScore,
  setPlayerScore,
}) => {
  const drawnCard = house[house.length - 1];

  const regex = new RegExp("[0-9]");

  if (regex.test(drawnCard)) {
    console.log(Number(drawnCard[0]));
    setPlayerScore(playerScore + Number(drawnCard[0]));
  } else setPlayerScore(playerScore + 10);

  setPlayerHand([...playerHand, house[house.length - 1]]);
  setHouse(house.slice(0, -1));
};

export default score;
