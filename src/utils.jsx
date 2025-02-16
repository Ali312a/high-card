export const makeShuffledDeck = () => {
  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  const shuffleCards = (cards) => {
    for (let i = 0; i < cards.length; i++) {
      const randomIndex = getRandomIndex(cards.length);
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }
    return cards;
  };

  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const deck = [];

  suits.forEach((suit) => {
    for (let rank = 1; rank <= 13; rank++) {
      const card = {
        name:
          rank === 1
            ? "Ace"
            : rank === 11
            ? "Jack"
            : rank === 12
            ? "Queen"
            : rank === 13
            ? "King"
            : `${rank}`,
        suit,
        rank: rank === 1 ? 14 : rank,
      };
      deck.push(card);
    }
  });

  return shuffleCards(deck);
};
