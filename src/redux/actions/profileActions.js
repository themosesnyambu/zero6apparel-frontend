/* eslint-disable import/prefer-default-export */
import API_SERVICE from '../../../utils/API';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_ERROR,
} from './types/profileType';


export const getProfile = profile => ({
  type: GET_PROFILE,
  payload: {
    loading: false,
    profile,
  },
});

const flattenObject = (obj, prefix = '') => Object.keys(obj).reduce((acc, k) => {
  const pre = prefix.length ? `${prefix}` : '';
  if (typeof obj[k] === 'object' && obj[k] !== null) Object.assign(acc, flattenObject(obj[k], pre + k));
  else acc[pre + k] = obj[k];
  return acc;
}, {});

export const fetchUserProfile = id => async (dispatch) => {
  dispatch({ type: PROFILE_LOADING, payload: true });
  try {
    const userProfile = await API_SERVICE.get(`users/profile/${id}`);
    const profile = flattenObject({
      ...userProfile.data.data,
    });
    dispatch(getProfile(profile));
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.response });
  }
};
