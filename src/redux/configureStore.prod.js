import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";

export default function configureStore(initialState) {
  const middleware = [];
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
