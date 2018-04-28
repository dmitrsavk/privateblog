import { spawn } from 'redux-saga/effects';

import { watchUser } from './state/user/saga';

export default function* rootSaga() {
  yield spawn(watchUser);
}
