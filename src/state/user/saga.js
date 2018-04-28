import { put, takeLatest, call } from 'redux-saga/effects';

const fetchUser = () => fetch('https://privateblog.ru/api/user', { credentials: 'include' }).then(res => res.json());

function* getUserInfo() {
  const user = yield call(fetchUser);
  yield put({ type: 'user/getUserInfoSuccess', data: user});
}

export function* watchUser() {
  yield takeLatest('user/getUserInfo', getUserInfo);
}
