import { GET_COUNTRY_LIST } from './actionTypes';

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
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default masterListReducer;
