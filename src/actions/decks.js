import * as ACTION from "./types";
import {
  addCard as addCardApi,
  loadDecks as loadDecksApi,
  upsertDeck as upsertDeckApi
} from "../utils";

// HOC actions, is this an anti-pattern?
export const addCard = (deckId, card) => async dispatch => {
  await addCardApi(deckId, card);

  dispatch({
    type: ACTION.ADD_CARD,
    deckId,
    card
  });
};

export const loadDecks = () => async dispatch => {
  const decks = await loadDecksApi();

  dispatch({
    type: ACTION.LOAD_DECKS,
    decks
  });
};

export const upsertDeck = deckPartial => async dispatch => {
  const deck = await upsertDeckApi(deckPartial);

  dispatch({
    type: ACTION.UPSERT_DECK,
    deck
  });
};
