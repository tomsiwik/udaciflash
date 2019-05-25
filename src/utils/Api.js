import { AsyncStorage } from "react-native";

const initialDecks = {
  1558419711352: {
    id: 1558419711352,
    topic: "Programming",
    cards: [
      {
        question: "What is ECMAScript?",
        answer: "ECMAScript is the original naming for Javascript"
      },
      {
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
        question: "What is a key light?",
        answer: "The key light is the main light source"
      }
    ]
  }
};

export const saveDecks = async decklist => {
  await AsyncStorage.setItem("decklist", JSON.stringify(decklist));
  return decklist;
};

export const loadDecks = async () => {
  const decklist = await AsyncStorage.getItem("decklist");
  return decklist ? JSON.parse(decklist) : initialDecks;
};

export const getDeck = async id => {
  return loadDecks()[id];
};

export const upsertDeck = async deck => {
  const decks = await loadDecks();
  return saveDecks({
    ...decks,
    [deck.id]: {
      ...deck
    }
  });
};

export const addCard = async (deckId, card) => {
  const deck = await getDeck(deckId);

  upsertDeck({
    ...deck,
    cards: [...deck.cards, card]
  });

  return deck;
};
