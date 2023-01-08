// const checkSpecials = ({ playerHand, drawnCard }) => {
//   const drawnCard = house[house.length - 1];
//   const simplifiedHand = [...playerHand, drawnCard].map((card) => {
//     return card[0];
//   });
//   console.log(simplifiedHand, "simplifiedHand");

//   //   const regex = new RegExp("[0-9]");
//   //   if (regex.test(drawnCard)) {
//   //     console.log(Number(drawnCard[0]));
//   //     setPlayerScore(playerScore + Number(drawnCard[0]));
//   //   } else setPlayerScore(playerScore + 10);

//   //   setPlayerHand([...playerHand, house[house.length - 1]]);
//   //   setHouse(house.slice(0, -1));
// };

const checkSpecials = (newHand) => {
  let aces = 0;
  let kings = 0;
  let queens = 0;
  let nines = 0;
  newHand.forEach((card) => {
    if (card[0] === "A") {
      aces += 1;
    }
    if (card[0] === "K") {
      kings += 1;
    }
    if (card[0] === "Q") {
      queens += 1;
    }
    if (card[0] === "9") {
      nines += 1;
    }
  });
  if (nines && aces === 2) {
    //if there is at least one 9 and two aces, these cards are worth 21 insted of 29, so the score should be decreaced by 8
    return -8;
  }
  if (kings && queens && aces) {
    //these would be worth 30, instead worth 21, so -9
    return -9;
  }
  if (kings && aces) {
    //these would be worth 20, instead worth 21, so +1
    return 1;
  }
};

export default checkSpecials;
