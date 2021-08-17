import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import singleReleaseReducer from './releaseReducer';
import bagReducer from './bagReducer'
import authReducer from './authReducer'

export default combineReducers({
  release: LandingPageReducer,
  singleRelease: singleReleaseReducer,
  bag: bagReducer,
  auth: authReducer
});
