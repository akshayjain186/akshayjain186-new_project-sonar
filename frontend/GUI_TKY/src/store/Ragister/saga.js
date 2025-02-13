import { call, put, takeEvery } from 'redux-saga/effects';
import { postRegister } from '@/services/api_helper';
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './actionTypes';
import { registerUserFailure, registerUserSuccess } from './action';

/**
 * Worker saga to handle user registration
 * @param {Object} action - Dispatched action with payload and callback.
 */
function* RegisterUser(action) {
  const { payload, callback } = action;

  try {
    const response = yield call(postRegister, payload?.data);
    // Dispatch success action

    // yield put(registerUserSuccess(response?.data));

    // Invoke callback if provided
    if (callback) callback(response, null);
  } catch (error) {

    // Dispatch failure action
    // yield put(registerUserFailure(error));

    // Invoke callback if provided
    if (callback) callback(null, error);
  }
}

/**
 * Watcher saga for user registration
 */
function* RegisterUserSaga() {
  yield takeEvery(REGISTER_USER, RegisterUser);
}

export default RegisterUserSaga;
