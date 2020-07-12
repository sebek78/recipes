import { call, put, all, takeEvery } from "redux-saga/effects";
import api from "./../../utils/api";
import { USER_AUTHENTICATED_REQUEST } from "./actionTypes";
import { userAuthenticatedSuccess, userAuthenticatedFailure } from "./actions";

function* checkUserAuthenticatedSaga() {
  try {
    const data = yield call(api.get, "/authenticated");
    yield put(userAuthenticatedSuccess(data));
  } catch (error) {
    console.log("Check authentication error");
    console.log(error);
    yield put(userAuthenticatedFailure(error));
  }
}

export default function* checkAuthenticatedSaga() {
  yield all([
    yield takeEvery(USER_AUTHENTICATED_REQUEST, checkUserAuthenticatedSaga),
  ]);
}
