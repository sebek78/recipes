import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [require("redux-immutable-state-invariant").default()];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
