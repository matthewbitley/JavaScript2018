/**
 * Import action types from "src/constants/actionTypes.js"
 */
import * as types from "src/constants/actionTypes";
import categories from "./constants/categories";

const reducer = (
  state = {
    memberID: null,
    userInput: '',
    selections: [],
    finalVote: {},
    categories: []
  },
  action
) => {
  switch (action.type) {
    case types.GET_MEMBER_ID:
    return {
      ...state,
      memberID
    };
    case types.GET_MEMBER_PIN:
    return {
      ...state,
      pinNumber
    };
    case types.LOGIN:
      return {
        ...state,
        memberID,
        pinNumber
    };
    case types.PICK_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category, index) => {
          return index == action.categoryIndex
        })
    };
    case types.NEXT_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category, index) => {
          return index + 1 == action.categoryIndex;
        })
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
