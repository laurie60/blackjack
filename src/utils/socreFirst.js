const scoreFirst = ({ house, setHouse, setPlayerHand, setPlayerScore }) => {
  const drawnCards = [house[house.length - 1], house[house.length - 2]];
  let points = 0;

  const regex = new RegExp("[0-9]");

  drawnCards.forEach((card) => {
    if (regex.test(card)) {
      console.log(Number(card[0]));
      points += Number(card[0]);
    } else points += 10;

    setPlayerScore(points);
    setPlayerHand(drawnCards);
    setHouse(house.slice(0, -2));
  });
};

export default scoreFirst;
