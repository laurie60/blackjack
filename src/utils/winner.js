const winner = ({ standOne, standTwo, playerOneScore, playerTwoScore }) => {
  if (standOne && standTwo) {
    if (playerOneScore > playerTwoScore) {
      return "Player 1";
    } else if (playerOneScore < playerTwoScore) {
      return "Player 2";
    }
    return "draw";
  }
  if (playerOneScore > 21) {
    return "Player 2";
  }
  if (playerTwoScore > 21) {
    return "Player 1";
  }
};

export default winner;
