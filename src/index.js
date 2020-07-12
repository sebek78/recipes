import React from "react";
import { render } from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./containers/App";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/rootSaga";

export const sagaMiddleware = createSagaMiddleware();
const store = configureStore();
sagaMiddleware.run(rootSaga);

render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
