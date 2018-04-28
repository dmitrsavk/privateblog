import { spawn } from 'redux-saga/effects';

import { watchAuth } from './state/auth/saga';
import { watchUser } from './state/user/saga';

export default function* rootSaga() {
  yield spawn(watchAuth);
  yield spawn(watchUser);
}
