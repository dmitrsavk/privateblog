import { spawn } from 'redux-saga/effects';

import { watchAll } from './state/user/saga';

export default function* rootSaga() {
  yield spawn(watchAll);
}
