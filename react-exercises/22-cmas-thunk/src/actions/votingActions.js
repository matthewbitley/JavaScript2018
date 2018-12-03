import * as types from "../constants/actionTypes";

import { voteRequest } from "../services/api";

/**
 * Using "src/actions/fetchAllNomineesActions.js" as an example, setup action creators for:
 * - loading ajax request
 * - ajax request failure
 */

 const voteLoading = () => {
  return {
    type: types.VOTE_PENDING
  };
};

const voteSuccess = (categoryId, nomineeIndex) => {
  return {
    type: types.VOTE_FULFILLED,
    categoryId,
    nomineeIndex
  };
};

const voteFailure = () => {
  return {
    type: types.VOTE_REJECTED
  };
};

export const vote = (categoryId, nomineeIndex) => {
  return dispatch => {
    dispatch(voteLoading());
    voteRequest(categoryId, nomineeIndex)
      .then(response => dispatch(voteSuccess(response)))
      .catch(() => dispatch(voteFailure()));
    /**
     * Using "src/actions/fetchAllNomineesActions.js" as an example, do the following:
     * - dispatch the loading ajax action
     * - call on and pass the necesarry arguements to the voteRequest function
     * (see "src/services/api.js")
     * - dispatch the ajaxSuccess action when the ajax request is successfully,
     * passing all the necessary arguments
     * - dispatch the ajax request failure action when an error is caught
     */
  };
};
