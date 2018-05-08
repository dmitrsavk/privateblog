import { put, takeLatest, call, spawn } from "redux-saga/effects";

const save = data =>
  fetch("https://privateblog.ru/api/blog", {
    method: "post",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

function* blogSubmit(action) {
  console.log(action);
  const res = yield call(save, action.payload);
  yield put({ type: "blog/submitSuccess", data: res });
}

function* watchBlogSubmit() {
  yield takeLatest("blog/submit", blogSubmit);
}

export function* watchAll() {
  yield spawn(watchBlogSubmit);
}
