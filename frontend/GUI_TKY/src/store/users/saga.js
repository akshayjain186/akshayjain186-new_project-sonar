import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { GET_USERS_LIST_BY_ROLE_ID,GET_USERS_DETAILS_BY_ID } from './actionTypes';

import { getUsersListData,getUsersDetailsById } from '@/services/api_helper';

function* fetchUsersList(action) {
   const { roleId ,search} = action.payload;
  try {
    const response = yield call(getUsersListData, {roleId ,search});
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching users list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}

function* fetchUsersDetailsById(action) {
 try {
   const response = yield call(getUsersDetailsById, action.payload);
   if (action.callback) {
     action.callback(response);
   }
 } catch (error) {
   console.error('Error fetching users list:', error);
   if (action.callback) {
     action.callback(null, error);
   }
 }
}

function* usersListSaga() {
  yield takeEvery(GET_USERS_LIST_BY_ROLE_ID, fetchUsersList);
  yield takeEvery(GET_USERS_DETAILS_BY_ID, fetchUsersDetailsById);
  
}

export default usersListSaga;
