import { put, takeLatest } from 'redux-saga/effects';

function* test() {
  console.log('saga');
  yield put({type: 'lol'})
}

function* rootSaga() {
  yield takeLatest('auth/login', test);
}

export default rootSaga;