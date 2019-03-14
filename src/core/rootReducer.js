import { combineReducers } from 'redux';

import { userReducer } from '../state/user/reducer';
import { blogReducer } from '../state/blog/reducer';

export default combineReducers({ user: userReducer, blog: blogReducer });
