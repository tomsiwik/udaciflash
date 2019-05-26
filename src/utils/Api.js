import { AsyncStorage } from "react-native";

const _initialDecks = {
  1558419711352: {
    id: 1558419711352,
    key: "programming_1558419711352",
    topic: "Programming",
    cards: [
      {
        id: 1558419712352,
        key: "programming_card_1558419712352",
        question: "What is ECMAScript?",
        answer: "ECMAScript is the original naming for Javascript"
      },
      {
        id: 1558419712372,
        key: "programming_card_1558419712372",
        question: "What is React?",
        answer: "A user interface framework written in Javascript"
      }
    ]
  },
  1558419690352: {
    id: 1558419690352,
    key: "photography_1558419690352",
    topic: "Photography",
    cards: [
      {
        id: 1558419690355,
        key: "photography_card_1558419690355",
        question: "What is a key light?",
        answer: "The key light is the main light source"
      }
    ]
  }
};

const _formatCard = (topic, card) => {
  const id = Date.now();
  return {
    ...card,
    id,
    key: `${topic}_card_${id}`
  };
};

const _formatDeck = deck => {
  return {
    ...deck,
    key: `${deck.topic}_card_${deck.id || Date.now()}`
  };
};

export const saveDecks = async decklist => {
  await AsyncStorage.setItem("decklist", JSON.stringify(decklist));
  return decklist;
};

export const loadDecks = async () => {
  const decklist = await AsyncStorage.getItem("decklist");
  return decklist ? JSON.parse(decklist) : _initialDecks;
};

export const getDeck = async id => {
  return loadDecks()[id];
};

export const upsertDeck = async deck => {
  const decks = await loadDecks();
  return saveDecks({
    ...decks,
    [deck.id]: _formatDeck(deck)
  });
};

export const addCard = async (deckId, card) => {
  const deck = await getDeck(deckId);

  upsertDeck({
    ...deck,
    cards: [...deck.cards, _formatCard(deck.topic, card)]
  });

  return deck;
};
