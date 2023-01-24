
# A two-player Blackjack game, made with [react](https://reactjs.org/) and [vite](https://vitejs.dev/)

This Blackjack game is live and hosted on Netlify:
[https://lmm-blackjack.netlify.app/](https://lmm-blackjack.netlify.app/)

This repo contains a Blackjack (AKA Vingt-et-un or Pontoon) game designed for two players.

Card .svg files were used from [this repo](https://github.com/heruka-urgyen/react-playing-cards), distributed under CC0 license.

## Local hosting

- Firstly, fork or clone this directory

- Then, install dependencies with:

```
npm i
```

To run a version of this website on your machine use:

```
npm run dev
```

In your browser, navigate to: [http://localhost:5173/](http://localhost:5173/) and you should see a version of the website hosted locally. The page will update every time you save a change whist hosting.

## Testing special card combinations

In Blackjack, certain card combinations are worth a special number of points, the ones implemented in this project are:

- King + Ace = 21 points (kA)
- King + Queen + Ace = 21 points (kQA)
- Ace + Ace + Nine = 21 points (aA9)

Three branches of this repo have been provided to test these special combinations. In these branches, where the cards are in a specific order to guarantee the appearance of the special combinations in the game:
- King + Ace: [https://github.com/laurie60/blackjack/tree/testing_kA](https://github.com/laurie60/blackjack/tree/testing_kA) 
- King + Queen + Ace: [(https://github.com/laurie60/blackjack/tree/testing_kQA)](https://github.com/laurie60/blackjack/tree/testing_kQA)
- Ace + Ace + Nine: [(https://github.com/laurie60/blackjack/tree/testing_aA9)](https://github.com/laurie60/blackjack/tree/testing_aA9)

These branches are live and hosted on Netlify:
- testing_kA:  [https://blackjack-test-ka.netlify.app/](https://blackjack-test-ka.netlify.app/) 
- testing_kQA: [https://blackjack-test-kqa.netlify.app/](https://blackjack-test-kqa.netlify.app/)
- testing_aA9: [https://blackjack-test-aa9.netlify.app/](https://blackjack-test-aa9.netlify.app/)



### local hosting of test branches

- Please select the branch corresponding to the combination are interested in testing (testing_kA, testing_kQA or testing_aA9) on GitHub 
- Then, fork or clone the desired branch to your machine 
- Install dependencies using:

```
npm i
```
To run a version of this website on your machine use:

```
npm run dev
```

In your browser, navigate to: [http://localhost:5173/](http://localhost:5173/) and you should see a version of the website hosted locally. The page will update every time you save a change whist hosting.
