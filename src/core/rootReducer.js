import { combineReducers } from 'redux';

import { authReducer } from '../state/auth/reducer';

export default combineReducers({ auth: authReducer});
