import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './actionTypes.js';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

/**
 * User registration reducer to manage registration state.
 *
 * @param {Object} state - The current state of registration.
 * @param {Object} action - The dispatched action.
 * @param {string} action.type - The type of the dispatched action.
 * @param {Object} [action.payload] - The payload of the action, if applicable.
 * @returns {Object} - The updated state for the registration process.
 */
const registerUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    // When registration starts
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // When registration is successful
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload, // Save the server response
        error: null,
      };

    // When registration fails
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registerUserReducer;
