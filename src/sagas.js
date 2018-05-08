import { spawn } from 'redux-saga/effects';

import { watchAll } from './state/user/saga';
import { watchAll as watchAll1 } from './state/blog/saga';

export default function* rootSaga() {
  yield spawn(watchAll);
  yield spawn(watchAll1);
}
