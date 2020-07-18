import { put, call, all, takeEvery } from "redux-saga/effects";
import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
} from "./actionTypes";
import api from "../../utils/api";
import {
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
  registerUserSuccess,
  registerUserFailure,
} from "./actions";

function* userLoginSaga({ payload }) {
  try {
    const data = yield call(api.post, "/login", payload.loginData);
    yield put(loginUserSuccess(data));
  } catch (error) {
    console.log("Login request error");
    yield put(loginUserFailure(error));
  }
}

function* userLogoutSaga() {
  try {
    const data = yield call(api.post, "/logout");
    yield put(logoutUserSuccess(data));
  } catch (error) {
    console.log("Logout request error");
    yield put(logoutUserFailure(error));
  }
}

function* userRegisterSaga({ payload }) {
  try {
    const data = yield call(api.post, "/register", payload.registerData);
    yield put(registerUserSuccess(data));
  } catch (error) {
    console.log("Register user error");
    yield put(registerUserFailure(error));
  }
}

export default function* authSaga() {
  yield all([
    yield takeEvery(USER_LOGIN_REQUEST, userLoginSaga),
    yield takeEvery(USER_LOGOUT_REQUEST, userLogoutSaga),
    yield takeEvery(USER_REGISTER_REQUEST, userRegisterSaga),
  ]);
}
