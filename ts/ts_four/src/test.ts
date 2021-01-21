interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
let newSquare = {color: 'white', area: 100}
if (config.color) {
  newSquare.color = config.color
}
if (config.width) {
  newSquare.area = config.width * config.width
}
return newSquare
}


let mySquare = createSquare({ color: 'red', width: 100 })
console.log(mySquare)

// this
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
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`)

