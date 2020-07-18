import produce from "immer";
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
import {
  USER_AUTHENTICATED_REQUEST,
  USER_AUTHENTICATED_SUCCESS,
  USER_AUTHENTICATED_FAILURE,
} from "./../App/actionTypes";

const initialState = {
  authenticated: false,
  isRequesting: false,
  register: null,
  isCheckingAuthenticated: false,
  message: null,
  username: null,
};

const userReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      draft.isRequesting = true;
      break;
    case USER_LOGIN_SUCCESS:
      draft.isRequesting = false;
      draft.authenticated = payload.authData.authenticated;
      draft.message = payload.authData.message;
      draft.username = payload.authData.username;
      break;
    case USER_LOGIN_FAILURE:
      draft.isRequesting = false;
      draft.message = payload.error.message;
      break;
    case USER_LOGOUT_REQUEST:
      draft.isRequesting = true;
      break;
    case USER_LOGOUT_SUCCESS:
      draft.isRequesting = false;
      draft.authenticated = payload.authData.authenticated;
      draft.message = null;
      draft.username = null;
      break;
    case USER_LOGOUT_FAILURE:
      draft.isRequesting = false;
      draft.message = payload.error.message;
      break;
    case USER_AUTHENTICATED_REQUEST:
      draft.isCheckingAuthenticated = true;
      break;
    case USER_AUTHENTICATED_SUCCESS:
      draft.isCheckingAuthenticated = false;
      draft.authenticated = payload.authData.authenticated;
      draft.username = payload.authData.username || null;
      break;
    case USER_AUTHENTICATED_FAILURE:
      draft.isCheckingAuthenticated = false;
      draft.authenticated = payload.authData.authenticated;
      draft.username = null;
      break;
    case USER_REGISTER_REQUEST:
      draft.isRequesting = true;
      draft.register = null;
      break;
    case USER_REGISTER_SUCCESS:
      draft.isRequesting = false;
      draft.message = payload.registerData.message;
      draft.register = payload.registerData.register;
      draft.authenticated = payload.registerData.authenticated || false;
      draft.username = payload.registerData.username || null;
      break;
    case USER_REGISTER_FAILURE:
      draft.isRequesting = false;
      draft.message = payload.error.message;
      draft.register = payload.error.register;
      break;
  }
}, initialState);

export default userReducer;
