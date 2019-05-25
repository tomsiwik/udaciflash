import * as ACTION from "../actions/types";

export const decks = (state = {}, action) => {
  switch (action.type) {
    case ACTION.ADD_CARD: {
      const deck = state[action.deckId];
      return {
        ...state,
        [action.deckId]: {
          ...deck,
          cards: [...deck.cards, action.card]
        }
      };
    }
    case ACTION.UPSERT_DECK: {
      const deck = action.deck;
      return { ...state, [deck.id]: deck };
    }
    case ACTION.LOAD_DECKS:
      return { ...action.decks };
    default:
      return state;
  }
};
