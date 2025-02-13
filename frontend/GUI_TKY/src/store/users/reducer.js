import { GET_USERS_LIST_BY_ROLE_ID,GET_USERS_DETAILS_BY_ID } from './actionTypes';

const INIT_STATE = {
  usersList: [],
};

const userListReducer = (state = INIT_STATE, action) => {
 
  switch (action.type) {
    case GET_USERS_LIST_BY_ROLE_ID:
      return {
        ...state,
      };
      case GET_USERS_DETAILS_BY_ID:
      return {
        ...state,
      };
      
    default:
      return state;
  }
};

export default userListReducer;
