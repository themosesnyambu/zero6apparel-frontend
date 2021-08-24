/* eslint-disable no-return-assign */
import jwtDecode from 'jwt-decode';
import store from '../src/redux/store';
import { authSuccess, logoutAccount } from '../src/redux/actions/authActions';

const setUser = () => {
  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(authSuccess(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      const history = { push: () => window.location.href = '/signin' };
      store.dispatch(logoutAccount(history));
    }
  }
};

export default setUser;
