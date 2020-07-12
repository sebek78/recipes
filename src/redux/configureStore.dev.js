import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { sagaMiddleware } from "../index";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [
    require("redux-immutable-state-invariant").default(),
    sagaMiddleware,
  ];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}
