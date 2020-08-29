import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUser = (state) => state.userReducer || initialState;

const makeSelectUsername = createSelector(
  selectUser,
  (userState) => userState.username || ""
);

const makeSelectIsRequesting = createSelector(
  selectUser,
  (userState) => userState.isRequesting
);

const makeSelectAuthenticated = createSelector(
  selectUser,
  (userState) => userState.authenticated
);

const makeSelectRegister = createSelector(
  selectUser,
  (userState) => userState.register
);

export {
  selectUser,
  makeSelectUsername,
  makeSelectIsRequesting,
  makeSelectAuthenticated,
  makeSelectRegister,
};
