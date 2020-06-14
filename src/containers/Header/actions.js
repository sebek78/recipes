import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes";

export function loginUser(loginData) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: {
      loginData,
    },
  };
}

export function loginUserSuccess() {
  return {
    type: USER_LOGIN_SUCCESS,
  };
}
