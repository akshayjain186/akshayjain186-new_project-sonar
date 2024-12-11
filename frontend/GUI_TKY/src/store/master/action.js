import {
  GET_CONTINENT_LIST,
  GET_COUNTRY_LIST,
  GET_CURRENCIES_LIST,
  GET_LANGUAGE_LIST,
  POST_GENERAL_INFORMATION,
} from './actionTypes';

export const getContinentListData = ({}, callback) => ({
  type: GET_CONTINENT_LIST,
  payload: {},
  callback,
});

export const getCountryListData = ({continentId}, callback) => ({
  type: GET_COUNTRY_LIST,
  payload: {continentId},
  callback,
});

export const getLanguageListData = ({}, callback) => ({
  type: GET_LANGUAGE_LIST,
  payload: {},
  callback,
});

export const getCurrenciesListData = ({}, callback) => ({
  type: GET_CURRENCIES_LIST,
  payload: {},
  callback,
});

export const postGeneralInformation = (data, callback) => ({
  type: POST_GENERAL_INFORMATION,
  payload: { data },
  callback,
});


