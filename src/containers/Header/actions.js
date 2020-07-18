import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "./actionTypes";

export const loginUser = (loginData) => ({
  type: USER_LOGIN_REQUEST,
  payload: {
    loginData,
  },
});

export const loginUserSuccess = (authData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: {
    authData,
  },
});

export const loginUserFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const logoutUser = () => ({
  type: USER_LOGOUT_REQUEST,
});

export const logoutUserSuccess = (authData) => ({
  type: USER_LOGOUT_SUCCESS,
  payload: {
    authData,
  },
});

export const logoutUserFailure = (error) => ({
  type: USER_LOGOUT_FAILURE,
  payload: {
    error,
  },
});

export const registerUser = (registerData) => ({
  type: USER_REGISTER_REQUEST,
  payload: {
    registerData,
  },
});

export const registerUserSuccess = (registerData) => ({
  type: USER_REGISTER_SUCCESS,
  payload: {
    registerData,
  },
});

export const registerUserFailure = (error) => ({
  type: USER_REGISTER_FAILURE,
  payload: {
    error,
  },
});
