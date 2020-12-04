# FlashCards!

This is a terminal-playable flashcards game that quizzes the user on the fundamentals of JavaScript. Upon starting the game, the user will be prompted with a question and a selection of multiple choice responses. 

After all thirty questions have been answered the user is given the time it took to complete the deck. If a score greater than 90% is achieved the game is over. If the score is less than that, the user will be prompted to replay the deck and after a short delay a new game will begin. 

Each play through, or game, is considered one round. The round count will be displayed in the starting message each time a new game begins. 

## Playthrough

![Game Start](https://user-images.githubusercontent.com/69563078/101104692-e9d7f200-3588-11eb-8b2a-f31b00f2cf26.gif)

## Installation

Clone down the repo. In your terminal run: 

```
git clone git@github.com:CJSpohn/flashcards.git
```

Once cloned, change into the directory and install the library dependencies. Run:

```
npm install
```

To begin the game, run:

```
node index.js
```

Once a question is provided, use the arrow keys to make a selection and press enter to submit. Or enter the number corresponding to the answer you choose.

To exit the game, press ctrl+c in your terminal. 



