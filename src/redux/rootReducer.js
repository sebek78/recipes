import { combineReducers } from "redux";
import userReducer from "../containers/Header/reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
