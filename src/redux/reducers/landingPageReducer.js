import {
    SET_RELEASES, SET_TAGS,  LOADING,
  } from '../actions/types/landingPage';
  
  const initialState = {
    releases: [],
    tags: [],
    trends: [],
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