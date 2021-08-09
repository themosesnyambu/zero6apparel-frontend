import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import singleReleaseReducer from './releaseReducer';

export default combineReducers({
  release: LandingPageReducer,
  singleRelease: singleReleaseReducer,
});
