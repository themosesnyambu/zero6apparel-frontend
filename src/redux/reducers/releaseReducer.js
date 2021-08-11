import {
    GET_RELEASE,
    GET_RELEASE_ERROR,
    RELEASE_LOADING,
    GET_SINGLE_RELEASE,
    CLEAR_RELEASE_ERROR
  } from '../actions/types/releaseType';
  
  export const initialState = {
    releases: [],
    release: {},
    loading: false,
    error: {},
  };
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_RELEASE:
        return {
          ...state,
          loading: payload.loading,
          releases: payload.releases,
        };
      case RELEASE_LOADING:
        return {
          ...state,
          loading: payload.loading,
        };
      case GET_SINGLE_RELEASE:
        return {
          ...state,
          loading: payload.loading,
          releases: payload.release,
        };
      case GET_RELEASE_ERROR:
        return {
          ...state,
          loading: payload.loading,
          error: payload.error,
        };
      case CLEAR_RELEASE_ERROR:
        return {
          ...state,
          error: payload.error,
        };
      default:
        return state;
    }
  };
  