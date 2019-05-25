import * as ACTION from "./types";
import { addCard as addCardApi } from "../utils";

export const addCard = (deckId, card) => async dispatch => {
  await addCardApi(deckId, card);

  dispatch({
    type: ACTION.ADD_CARD,
    deckId,
    card
  });
};
