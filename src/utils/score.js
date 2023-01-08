import checkSpecials from "./checkSpecials";

const score = ({
  house,
  setHouse,
  playerHand,
  setPlayerHand,
  playerScore,
  setPlayerScore,
}) => {
  const drawnCard = house[house.length - 1];
  const newHand = [...playerHand, drawnCard];
  let newScore = 0;

  const regex = new RegExp("[0-9]");

  console.log("in scorre!!");

  newHand.forEach((card) => {
    if (regex.test(card)) {
      newScore += Number(card[0]);
    } else newScore += 10;
  });

  if (checkSpecials(newHand)) {
    newScore += checkSpecials(newHand);
  }

  console.log(newScore, "points in score");

  setPlayerScore(newScore);

  setPlayerHand([...playerHand, house[house.length - 1]]);
  setHouse(house.slice(0, -1));
};

export default score;
