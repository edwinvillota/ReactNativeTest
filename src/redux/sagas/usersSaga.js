import {put, call, takeEvery} from 'redux-saga/effects';

import {GET_USERS, GET_USERS_REQUESTED} from '../actions/usersActions';

import {getAllUsers} from '../api/usersApi';

function* getUsers() {
  yield put({type: GET_USERS});

  const users = yield call(getAllUsers);

  yield put({type: GET_USERS, payload: users});
}
export default function* usersSaga() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
}
