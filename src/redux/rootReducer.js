import { combineReducers } from "redux";
import userReducer from "../containers/App/reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
