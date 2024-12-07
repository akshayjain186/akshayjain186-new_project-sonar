import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { GET_COUNTRY_LIST } from './actionTypes';

import { getCountryListData } from '@/services/api_helper';

function* fetchCountryList(action) {
  // const { customerList_filter } = action.payload;
  try {
    const response = yield call(getCountryListData, {});
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching country list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}

function* masterSaga() {
  yield takeEvery(GET_COUNTRY_LIST, fetchCountryList);
}

export default masterSaga;
