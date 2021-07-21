import API_SERVICE from '../../../utils/API';
import isEmpty from '../../../utils/isEmpty';

import {
    GET_RELEASE,
    GET_RELEASE_ERROR,
    GET_SINGLE_RELEASE,
    RELEASE_LOADING,
    CLEAR_RELEASE_ERROR
  } from './types/releaseType';
  
  const releases = [];
  
  export const releaseLoading = () => ({
    type: RELEASE_LOADING,
    payload: {
      loading: true,
    },
  });
  
  export const getSingleRelease = release => ({
    type: GET_SINGLE_RELEASE,
    payload: {
      loading: false,
      release,
    },
  });
  
  export const releaseError = error => ({
    type: GET_RELEASE_ERROR,
    payload: {
      loading: false,
      error,
    },
  });
  
  export const clearReleaseError = () => ({
    type: CLEAR_RELEASE_ERROR,
    payload: {
      error: {},
    },
  });
  
  export const getReleaseBySlug = slug => async (dispatch) => {
    dispatch(clearReleaseError());
    dispatch(releaseLoading());
    try {
      const fetchedRelease = await API_SERVICE.get(`/releases/${slug}`);
      const { tagsList } = fetchedRelease.data.article;
      if (!isEmpty(tagsList)) {
        const randomTag = tagsList[Math.floor(Math.random() * tagsList.length)];
        const relatedReleases = await API_SERVICE.get(`/search?keyword=${randomTag}`);
        fetchedRelease.data.article.relatedArticles = relatedReleases.data.matches.tags;
      }
      dispatch(getSingleRelease(fetchedRelease.data.article));
    } catch (error) {
      dispatch(releaseError(error.response.data.errors));
    }
  };
  
  export const getReleases = () => ({
    type: GET_RELEASE,
    payload: { releases, loading: false },
  });
 