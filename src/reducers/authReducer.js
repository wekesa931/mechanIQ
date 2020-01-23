import { AUTHENTICATE } from '../actions/authentication';

const initialState = {
  loggedIn: false
};

export const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        loggedIn: action.loggedIn
      };
    default:
      return state;
  }
};