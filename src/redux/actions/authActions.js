import jwtDecode from 'jwt-decode';
import { message as alert } from 'antd';
import API_SERVICE from '../../../utils/API';

import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGOUT,
} from './types/authType';


export const authLoading = () => ({
  type: AUTH_LOADING,
  payload: {
    loading: true,
  },
});

export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  payload: {
    loading: false,
    user,
  },
});


export const authFailed = error => ({
  type: AUTH_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const signInAccount = (userData, history, accountVerificationToken) => async (dispatch) => {
  dispatch(authLoading());
  try {
    let userToken;
    if (userData !== null) {
      const logInUser = await API_SERVICE.post('/auth/signin', userData);
      const { token } = logInUser.data.user;
      userToken = token;
    } else userToken = accountVerificationToken;

    localStorage.setItem('jwtToken', userToken);
    const user = jwtDecode(userToken);
    const successMessage = accountVerificationToken ? 'Your account is successfully verified' : 'User successfully logged in';
    alert.success(successMessage);
    dispatch(authSuccess(user));
    return history.push('/');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(authFailed(message));
  }
};

export const registerAccount = (userData, history) => async (dispatch) => {
  dispatch(authLoading());

  try {
    const newUser = await API_SERVICE.post('/auth/signup', userData);
    const { token } = newUser.data.user;
    alert.success('Account Created! Check your inbox to verify your email');
    dispatch(authSuccess(token));
    return history.push('/signin');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(authFailed(message));
  }
};

export const getCurrentUserProfile = () => async (dispatch, getState) => {
  dispatch(authLoading());
  try {
    const { auth } = getState();
    const userProfile = await API_SERVICE.get(`/profiles/${auth.user.id}`);
    const newUserState = {
      ...getState().auth.user,
      avatar: userProfile.data.profile.profile.avatar,
    };
    dispatch(authSuccess(newUserState));
  } catch (error) {
    alert.error('There was a problem while fetching your profile');
  }
};

export const logout = () => ({
  type: LOGOUT,
});

export const logoutAccount = history => async (dispatch) => {
  try {
    await API_SERVICE.post('/auth/logout');
    dispatch(logout());
    localStorage.removeItem('jwtToken');
    alert.success('You have successfully signed out!');
    return history.push('/');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    return dispatch(authFailed(message));
  }
};

export const getToken = (tokenString) => {
  const startIndex = tokenString.indexOf('=') + 1;
  const token = tokenString.slice(startIndex);
  return token;
};
