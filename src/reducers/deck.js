import * as ACTION from "../actions/types";

export const deck = (state = null, action) => {
  switch (action.type) {
    case ACTION.SELECT_DECK:
      return action.deckId;
    default:
      return state;
  }
};
