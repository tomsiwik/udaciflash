import { AsyncStorage } from "react-native";

const _initialDecks = {
  1558419711352: {
    id: 1558419711352,
    topic: "Programming",
    cards: [
      {
        id: 1558419712352,
        question: "What is ECMAScript?",
        answer: "ECMAScript is the original naming for Javascript"
      },
      {
        id: 1558419712372,
        question: "What is React?",
        answer: "A user interface framework written in Javascript"
      }
    ]
  },
  1558419690352: {
    id: 1558419690352,
    topic: "Photography",
    cards: [
      {
        id: 1558419690355,
        question: "What is a key light?",
        answer: "The key light is the main light source"
      }
    ]
  }
};

const _format = deckOrCard => {
  const id = deckOrCard.id || Date.now();
  return {
    ...deckOrCard,
    id
  };
};

export const saveDecks = async decklist => {
  await AsyncStorage.setItem("decklist", JSON.stringify(decklist));
  return decklist;
};

export const loadDecks = async () => {
  // DEBUG:
  // await AsyncStorage.clear();
  const decklist = await AsyncStorage.getItem("decklist");
  return decklist ? JSON.parse(decklist) : _initialDecks;
};

export const getDeck = async id => {
  const decks = await loadDecks();
  return decks[id];
};

export const upsertDeck = async deck => {
  const decks = await loadDecks();
  const newDeck = { cards: [], ..._format(deck) };

  await saveDecks({
    ...decks,
    [newDeck.id]: newDeck
  });

  return newDeck;
};

export const addCard = async (deckId, card) => {
  const deck = await getDeck(deckId);

  upsertDeck({
    ...deck,
    cards: [...deck.cards, _format(card)]
  });

  return deck;
};
