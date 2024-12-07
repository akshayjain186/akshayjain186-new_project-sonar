import { GET_COUNTRY_LIST } from './actionTypes';

export const getCountryListData = ({}, callback) => ({
  type: GET_COUNTRY_LIST,
  payload: {},
  callback,
});
