import { all } from "redux-saga/effects";
import authSaga from "../containers/Header/sagas";
import checkAuthenticatedSaga from "../containers/App/sagas";

export default function* rootSaga() {
  yield all([authSaga(), checkAuthenticatedSaga()]);
}
