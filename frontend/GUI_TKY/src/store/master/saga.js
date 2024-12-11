import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import {
  GET_CONTINENT_LIST,
  GET_COUNTRY_LIST,
  GET_CURRENCIES_LIST,
  GET_LANGUAGE_LIST,
  POST_GENERAL_INFORMATION,
} from './actionTypes';

import {
  getCountryListData,
  getCurrenciesListData,
  getLanguageListData,
  getContinentListData,
  postGeneralInformationData,
} from '@/services/api_helper';

function* fetchCountryList(action) {
  const { continentId } = action.payload;
  try {
    const response = yield call(getCountryListData, {continentId});
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
function* fetchContinentList(action) {
  // const { customerList_filter } = action.payload;
  try {
    const response = yield call(getContinentListData, {});
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching continent list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}
function* fetchLanguageList(action) {
  // const { customerList_filter } = action.payload;
  try {
    const response = yield call(getLanguageListData, {});
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching language list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}
function* fetchCurrenciesList(action) {
  // const { customerList_filter } = action.payload;
  try {
    const response = yield call(getCurrenciesListData, {});
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching currencies list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}

function* postGeneralInformation(action) {
  const { data } = action.payload;
  try {
    const response = yield call(postGeneralInformationData, data);
    if (action.callback) {
      action.callback(response);
    }
  } catch (error) {
    console.error('Error fetching currencies list:', error);
    if (action.callback) {
      action.callback(null, error);
    }
  }
}

function* masterSaga() {
  yield takeEvery(GET_COUNTRY_LIST, fetchCountryList);
  yield takeEvery(GET_LANGUAGE_LIST, fetchLanguageList);
  yield takeEvery(GET_CURRENCIES_LIST, fetchCurrenciesList);
  yield takeEvery(GET_CONTINENT_LIST, fetchContinentList);
  /**Post */
  yield takeEvery(POST_GENERAL_INFORMATION, postGeneralInformation);
}

export default masterSaga;
