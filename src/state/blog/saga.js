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

const deleteRecordFetcher = data =>
  fetch("https://privateblog.ru/api/blog/delete", {
    method: "post",
    credentials: "include",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

function* blogSubmit(action) {
  const res = yield call(save, action.payload);
  yield put({ type: "blog/submitSuccess", payload: res });
}

function* deleteRecord(action) {
  const res = yield call(deleteRecordFetcher, action.payload);
  yield put({ type: "blog/recordDeleteSuccess", payload: res });
}

function* watchBlogSubmit() {
  yield takeLatest("blog/submit", blogSubmit);
}

function* watchDeleteRecord() {
  yield takeLatest("blog/deleteRecord", deleteRecord);
}

export function* watchAll() {
  yield spawn(watchBlogSubmit);
  yield spawn(watchDeleteRecord);
}
