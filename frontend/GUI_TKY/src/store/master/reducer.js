import {
  GET_CONTINENT_LIST,
  GET_COUNTRY_LIST,
  GET_CURRENCIES_LIST,
  GET_LANGUAGE_LIST,
  POST_GENERAL_INFORMATION,
} from './actionTypes';

const INIT_STATE = {
  countryList: [],
  languageList: [],
  currenciesList: [],
  continentList: [],
};

const masterListReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRY_LIST:
      return {
        ...state,
      };
    case GET_LANGUAGE_LIST:
      return {
        ...state,
      };
    case GET_CURRENCIES_LIST:
      return {
        ...state,
      };
    case GET_CONTINENT_LIST:
      return {
        ...state,
      };
    case POST_GENERAL_INFORMATION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default masterListReducer;
