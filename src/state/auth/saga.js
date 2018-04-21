import { put, takeLatest } from 'redux-saga/effects';

import { routerActions } from 'react-router-redux';

const url = 'https://www.facebook.com/v2.12/dialog/oauth?client_id=159008188111833&redirect_uri=https://privateblog.ru/api/auth/fb';


function* login() {
  yield put(routerActions.push(url))
}

export function* watchAuth() {
  yield takeLatest('auth/login', login);
}
