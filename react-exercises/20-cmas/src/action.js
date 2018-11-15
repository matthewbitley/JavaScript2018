/**
 * Import action types from "src/constants/actionTypes.js"
 */

import * as types from "src/constants/actionTypes";

/**
 * Create and export an a function for each action
 * @example
 * export function addTodo(userInput) => {
 *   return {
 *     type: types.ADD_TODO,
 *     userInput: userInput
 *   }
 * };
 */

export function getMemberID() {
    return {
      type: types.MEMBER_ID
    };
}

export function login() {
    return {
      type: types.LOGIN
    };
}

export function selectNominee(userInput) {
    return {
        type: types.SELECT_NOMINEE,
        userInput
      };
}

export function castVote(userInput) {
    return {
        type: types.CAST_VOTE,
        userInput
      };
}