import {
  USER_AUTHENTICATED_REQUEST,
  USER_AUTHENTICATED_SUCCESS,
  USER_AUTHENTICATED_FAILURE,
} from "./actionTypes";

export const checkUserAuthenticated = () => ({
  type: USER_AUTHENTICATED_REQUEST,
});

export const userAuthenticatedSuccess = (authData) => ({
  type: USER_AUTHENTICATED_SUCCESS,
  payload: {
    authData,
  },
});

export const userAuthenticatedFailure = (error) => ({
  type: USER_AUTHENTICATED_FAILURE,
  payload: {
    error,
  },
});
