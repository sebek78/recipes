import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { sagaMiddleware } from "../index";

export default function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
