import * as ACTION from "./types";
import {
  loadDecks as loadDecksApi,
  upsertDeck as upsertDeckApi
} from "../utils";

export const loadDecks = () => async dispatch => {
  const decks = await loadDecksApi();

  dispatch({
    type: ACTION.LOAD_DECKS,
    decks
  });
};

export const upsertDeck = deck => async dispatch => {
  await upsertDeckApi(deck);

  dispatch({
    type: ACTION.UPSERT_DECK,
    deck
  });
};

export const selectDeck = deckId => dispatch => {
  dispatch({
    type: ACTION.SELECT_DECK,
    deckId
  });
};
