import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import singleReleaseReducer from './releaseReducer';
import bagReducer from './bagReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer';

export default combineReducers({
  release: LandingPageReducer,
  singleRelease: singleReleaseReducer,
  bag: bagReducer,
  auth: authReducer,
  profile: profileReducer,
});
