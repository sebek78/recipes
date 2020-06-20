import { all } from "redux-saga/effects";
import authSaga from "../containers/Header/sagas";

export default function* rootSaga() {
  yield all([authSaga()]);
}
