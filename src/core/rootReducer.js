import { combineReducers } from 'redux';

export const login = data => ({
  type: 'auth/login',
  payload: data
});

const authReducer = (auth = false, action) => {
  switch (action.type) {
    case 'auth/login':
      return true;
    default:
      return auth;
  }
}

export default combineReducers({ auth: authReducer});
