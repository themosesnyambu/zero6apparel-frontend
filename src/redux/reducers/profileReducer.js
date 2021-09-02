import {
    GET_PROFILE,
    PROFILE_LOADING, PROFILE_ERROR,
  } from '../actions/types/profileType';
  
  export const initialState = {
    profile: {},
    errors: {},
    loading: false,
  };
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case PROFILE_LOADING:
        return {
          ...state,
          loading: payload,
        };
      case GET_PROFILE:
        return {
          ...state,
          profile: payload.profile,
          loading: false,
        };
      case PROFILE_ERROR:
        return {
          ...state,
          errors: payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  