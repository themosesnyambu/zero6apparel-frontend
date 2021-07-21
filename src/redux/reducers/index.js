import { combineReducers } from "redux";
import ReleaseReducer from "./releaseReducer";

export default combineReducers({
  release: ReleaseReducer,
});
