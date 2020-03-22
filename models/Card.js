import { Colors, Values } from 'uno-engine';

const card = game.discardedCard;  // current card in-play
const cardColor = card.color;     // get the index of the card color: 0 to 3
                                  // (WILD and WILD DRAW FOUR will not have this property set)
Colors[cardColor];                // get the name of the color: RED, BLUE, GREEN, or YELLOW

// Card value
const cardValue = card.value; // get the index of the card value: 0 to 14
Values[cardValue];            // get the name of the card:
                              // 0-9, SKIP, REVERSE, DRAW_TWO, WILD, or WILD_DRAW_TWO

// Get card from value/color strings
const value = Values.SIX;
const color = Colors.BLUE;
const card = new Card(value, color);

// Set WILD or WD4 color
const [color, value] = ['GREEN', 'WILD'];   // get args from player input
const card = player.getCardByValue(value);  // get exact WILD/WD4 in player's hand
card.color = Colors[color];                 // set color of WILD/WD4 in hand

// Get Card from args function
const getCard = ([color, value], player) => {
  let card = new Card(Values[value], Colors[color]);
  if (value === 'WILD' || value === 'WILD_DRAW_FOUR') {
    card = player.getCardByValue(Values[value]);
    card.color = Colors[color];
  }
  return card;
};