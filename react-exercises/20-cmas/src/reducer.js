/**
 * Import action types from "src/constants/actionTypes.js"
 */
import * as types from "src/constants/actionTypes";
import categories from "./constants/categories";

const reducer = (
  state = {
    userInput,
    selections: [],
    finalVote: ''
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        selections: [...state.selections, action.userInput]
      };
    case types.SELECT_NOMINEE:
      return {
        ...state,
        selections: [...state.selections, action.userInput]
      };
    case types.CAST_VOTE:
      return {
        ...state,
        finalVote: selections
      };
    default:
      return state;
  }
};

export default reducer;
