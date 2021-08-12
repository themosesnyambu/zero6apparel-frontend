import {
  ADD_TO_BAG,
  REDUCE_QUANTITY_IN_BAG,
  REMOVE_FROM_BAG,
} from "./types/bagTypes";

export const removeFromBag = (id, size) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_BAG, id, size });
};

export const reduceQuantityInBag = (id, size) => (dispatch) => {
  dispatch({ type: REDUCE_QUANTITY_IN_BAG, id, size });
};

export const addToBag = (id, size) => (dispatch, getState) => {
  const releasesInState = getState().release.releases;
  dispatch({ type: ADD_TO_BAG, releases: releasesInState, id, size });
};
