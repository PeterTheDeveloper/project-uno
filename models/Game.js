try {
  game.play(card); // play a card from the hand of the current player
} catch (e) {
  // throws error if player tries to play a card they don't have
  // throws error if player tries to play a card that can't be played (doesn't match discardedCard)
  // throws error if card doesn't have a color property (wild, wd4)
  // see `Card Properties` for setting wild and wd4 color
}
 
game.draw(); // draw a card for the current player
 
try {
  game.pass(); // current player pass after drawing
} catch (e) {
  // throws error if player hasn't drawn yet
}
 
// Yelling UNO!
game.uno();           // game.currentPlayer is yelling UNO!
game.uno("Player 1"); // Other than current player yells UNO
                      // - If the yelling player is the current player,
                      //   and they have 2 or less cards, he is just marked as "yelled"
                      // - If the yelling player has more than 2 cards,
                      //   the game searches for someone with 1 card that did not yell "UNO!",
                      //   and make him draw 2 cards. If there's no one,
                      //   the yelling player draws instead.