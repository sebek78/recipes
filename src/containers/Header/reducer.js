import produce from "immer";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from "./actionTypes";

const initialState = {
  authenticated: false,
  isRequesting: false,
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
  }
}, initialState);

export default userReducer;
