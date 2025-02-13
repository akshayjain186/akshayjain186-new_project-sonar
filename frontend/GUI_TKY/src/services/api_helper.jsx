import {
  POST_LOGIN,
  GET_USER_PROFILE,
  GET_COUNTRY_LIST,
  GET_LANGUAGE_LIST,
  GET_CURRENCIES_LIST,
  GET_CONTINENT_LIST,
  GET_USERS_LIST_BY_ROLE_ID,
  GET_USERS_DETAILS_BY_ID,
  POST_REGISTER_USER,
} from './url_service'; // Import the specific URL constant
import { post, get } from './api_service'; // Import the post method from api_service

/**
 * Helper function to handle user login.
 * Sends login data to the server via a POST request.
 *
 * @param {object} data - The login credentials (e.g., username, password).
 */
const postLogin = (data) => {
  // Send the POST request to the login URL with the provided data
  return post(POST_LOGIN, data);
};
/**
 * Helper function to handle user registration.
 * Sends registration data to the server via a POST request.
 *
 * @param {object} userData - The registration information (name, email, password, etc.).
 */
export const postRegister = (data) => {
  return post(POST_REGISTER_USER, data);
};
/**
 * Fetches the user profile from the server.
 * Sends a GET request to retrieve the user's profile data.
 *
 * @returns {Promise} - Returns a promise that resolves to the user profile data.
 */
export const getUserProfile = () => get(GET_USER_PROFILE);
// master list
export const getCountryListData = ({ continentId }) => {
  if (continentId === null) {
    return get(GET_COUNTRY_LIST);
  } else {
    const apiUrl = `${GET_CONTINENT_LIST}/${continentId}`;
    return get(apiUrl);
  }
};
export const getLanguageListData = () => get(GET_LANGUAGE_LIST);
export const getCurrenciesListData = () => get(GET_CURRENCIES_LIST);
export const getContinentListData = () => get(GET_CONTINENT_LIST);
export const getUsersDetailsById = (payload) => {
  const apiUrl = `${GET_USERS_DETAILS_BY_ID}/${payload.userId}`;
  return get(apiUrl);
};
// export const getUsersListData = (roleId ,search) => get(GET_USERS_LIST_BY_ROLE_ID);

export const getUsersListData = ({ roleId, search }) => {
  const apiUrl = `${GET_USERS_LIST_BY_ROLE_ID}/?roleId=${roleId}&search=${search}`;
  return get(apiUrl);
};

export const postGeneralInformationData = (data) => {
  return;
};

export { postLogin }; // Export the postLogin function for use in other parts of the application
