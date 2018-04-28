import { put, takeLatest, call } from 'redux-saga/effects';

const fetchUser = () => fetch('https://privateblog.ru/api/user', { credentials: 'include' });

function* getUserInfo() {
  console.log('start')
  const user = yield call(fetchUser);
  console.log(user)
  yield put({ type: 'user/getUserInfoSuccess', data: user});
}

export function* watchUser() {
  yield takeLatest('user/getUserInfo', getUserInfo);
}
