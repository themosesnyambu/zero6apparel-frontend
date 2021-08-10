/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import Toastr from 'toastr';
import API_SERVICE from '../../../utils/API';
import {
  SET_TAGS, LOADING, SET_RELEASES, SET_ERROR, SET_NEW_RELEASES,
} from './types/landingPage';

const setTags = payload => ({
  type: SET_TAGS,
  payload,
});
const setReleases = payload => ({
  type: SET_RELEASES,
  payload,
});

const setNewReleases = payload => ({
  type: SET_NEW_RELEASES,
  payload,
});

const setError = payload => ({
  type: SET_ERROR,
  payload,
});

export const getTags = () => async (dispatch) => {
  try {
    const response = await API_SERVICE.get('/releases/tags');
    const { tags } = response.data;
    dispatch(setTags(tags));
    return tags;
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    return Toastr.error(message);
  }
};

export const loaded = payload => (dispatch) => {
  dispatch({
    type: LOADING,
    payload,
  });
};

export const getReleasesByCategory = (tag, tags) => async (dispatch) => {
  try {
  /* istanbul ignore next-line */
    const url = `/releases?tag=${tag}&limit=2`;
    const res = await API_SERVICE.get(url);
    dispatch(setReleases(res.data));
    if (tags.indexOf(tag) === 9) {
      dispatch({ type: LOADING, payload: false });
    }
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    Toastr.error(message);
    Toastr.error(error);
  }
};

export const getNewReleases = () => async (dispatch) => {
  try {
    const response = await API_SERVICE.get('/releases');
    const newReleases  = response.data;
    dispatch(setNewReleases(newReleases));
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    Toastr.error(message);
    Toastr.error(error);
  }
};
