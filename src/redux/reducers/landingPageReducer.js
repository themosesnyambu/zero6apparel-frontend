import { SET_RELEASES, SET_TAGS, LOADING, SET_NEW_RELEASES } from "../actions/types/landingPage";

const initialState = {
  releases: [],
  tags: [],
  newReleases: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RELEASES:
      return {
        ...state,
        releases: [...state.releases, payload],
      };
    case SET_NEW_RELEASES:
      return {
        ...state,
        newReleases: payload,
      };

    case SET_TAGS:
      return {
        ...state,
        tags: payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
