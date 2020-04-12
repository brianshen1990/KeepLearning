///////// functions

let myAdd = function(x: number, y: number): number {
  return x + y;
};
// The parameters 'x' and 'y' have the type number
let myAdd2: (baseValue: number, increment: number) => number = (x, y) => {
  return x + y;
};

// optional parameter
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
let result1 = buildName("Bob"); // works correctly now
// default value
function buildName2(firstName: string, lastName = "Smith") {
}

// rest parameters
function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}


interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
