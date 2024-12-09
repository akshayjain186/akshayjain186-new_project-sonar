import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './actionTypes.js';


/**
 * Creates an action to initiate the user registration process.
 * 
 * This action triggers the `REGISTER_USER` type and provides the registration
 * payload along with a callback function to handle post-registration logic.
 * 
 * @param {Object} payload - The registration data (e.g., name, email, password).
 * @param {Function} callback - A function to execute after registration is successful or fails.
 * @returns {Object} - An action with type `REGISTER_USER`, payload, and callback.
 */
export const registerUser = (data, callback) => ({
  type: REGISTER_USER,
  payload: { data },
  callback,
});

/**
 * Creates an action to indicate successful registration of a user.
 * 
 * @param {Object} response - The server's response containing user registration info.
 * @returns {Object} - An action with type `REGISTER_USER_SUCCESS` and the response as a payload.
 */
export const registerUserSuccess = (response) => ({
  type: REGISTER_USER_SUCCESS,
  payload: response,
});

/**
 * Creates an action to handle registration failures.
 * 
 * @param {Object|string} error - The error message or object received from the server/API.
 * @returns {Object} - An action with type `REGISTER_USER_FAILURE` and the error as a payload.
 */
export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

