import { combineReducers } from 'redux';

import { userReducer } from '../state/user/reducer';

export default combineReducers({ user: userReducer });
