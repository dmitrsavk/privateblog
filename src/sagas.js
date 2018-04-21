import { watchAuth } from './state/auth/saga';

export default function* rootSaga() {
  yield watchAuth();
}
