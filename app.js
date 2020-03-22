const { Game } = require('uno-engine');

const players = ["Peter", "Rose", "Mike"]; // maximum 10 players with unique names
// const customRules = [CumulativeDrawTwo];          // you can add your own rules (see https://github.com/danguilherme/uno/tree/v0.1.0-alpha/src/house-rules)
const game = new Game(players);      // initialize the game

const player = game.currentPlayer;          // player whose turn it is
const hand = player.hand;                   // array of `Card` objects
// const p = game.getPlayer();       // get player by name
         

const card = game.discardedCard;  // current card in-play
const cardColor = card.color;     // get the index of the card color: 0 to 3
  
// console.log(game._players);
// console.log(game._players[1])
// console.log(game.currentPlayer.draw);
console.log(player.getCardByValue(5));
console.log();