import { put, takeLatest, call, spawn } from "redux-saga/effects";

const fetchUser = () =>
  fetch("https://privateblog.ru/api/user", { credentials: "include" }).then(
    res => res.json()
  );

const logout = () =>
  fetch("https://privateblog.ru/api/user/logout", {
    credentials: "include"
  });

function* getUserInfo() {
  const user = yield call(fetchUser);
  yield put({ type: "user/getUserInfoSuccess", data: user });
}

function* logoutUser() {
  yield call(logout);
}

function* watchUserGetInfo() {
  yield takeLatest("user/getUserInfo", getUserInfo);
}

function* watchUserLogout() {
  yield takeLatest("user/logout", logoutUser);
}

export function* watchAll() {
  yield spawn(watchUserGetInfo);
  yield spawn(watchUserLogout);
}
