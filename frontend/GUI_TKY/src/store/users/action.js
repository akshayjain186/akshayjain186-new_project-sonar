import {
  GET_USERS_LIST_BY_ROLE_ID,
  GET_USERS_DETAILS_BY_ID,
} from './actionTypes';

export const getUsersListData = ({ roleId, search }, callback) => ({
  type: GET_USERS_LIST_BY_ROLE_ID,
  payload: { roleId, search },
  callback,
});

export const getUserDetailsData = ({ userId }, callback) => ({
  type: GET_USERS_DETAILS_BY_ID,
  payload: { userId },
  callback,
});
