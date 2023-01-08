# A blackjack game, made with react and [vite](https://vitejs.dev/)

This BlackJack game is live and hosted on Netlify:
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

In your browser, navigate to: [http://localhost:8000](http://localhost:5173/) and you should see a version of the website hosted locally. The page will update every time you save a change whist hosting.

## Testing Special card combinations

In blackjack, certain card combinations are worth a special number of points, the ones implimented in this project are:

- King + Ace = 21 points (kA)
- King + Queen + Ace = 21 points (kQA)
- Ace + Ace + Nine = 21 points (aA9)

Three branches have been provided to test these special combinations, where the cards are in a set order to guarantee thier appearance in the game:
- [testing_kA](https://github.com/laurie60/blackjack/tree/testing_kA) 
- [testing_kQA](https://github.com/laurie60/blackjack/tree/testing_kQA)
- [testing_aA9](https://github.com/laurie60/blackjack/tree/testing_aA9)

### local hosting of test branches

- Please select the branch corresponding to the combination are interested in tetsing (testing_kA, testing_kQA or testing_aA9) on GitHub 
- Then, fork or clone the desired branch to you machine 
- Install dependencies using:

```
npm i
```
To run a version of this website on your machine use:

```
npm run dev
```

In your browser, navigate to: [http://localhost:8000](http://localhost:5173/) and you should see a version of the website hosted locally. The page will update every time you save a change whist hosting.
