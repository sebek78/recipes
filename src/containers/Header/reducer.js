import produce from "immer";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  authenticated: false,
  isRequesting: false,
};

const userReducer = produce((draft, { type }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      draft.isRequesting = true;
      break;
    case USER_LOGIN_SUCCESS:
      draft.isRequesting = false;
      break;
  }
}, initialState);

export default userReducer;
