import { combineReducers } from 'redux';

import { authReducer } from '../state/auth/reducer';
import { userReducer } from '../state/user/reducer';

export default combineReducers({ auth: authReducer, user: userReducer });
