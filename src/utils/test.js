console.log(Math.floor(Math.random()));

const cards = ["L", "A", "U", "R", "I", "E"];

const shuffledArray = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    console.log(j, Math.random(), i + 1);
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};
shuffledArray(cards);

console.log("hello");
