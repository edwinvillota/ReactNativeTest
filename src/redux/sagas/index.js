import {spawn} from 'redux-saga/effects';

// Sagas
import usersSaga from './usersSaga';

export default function* rootSaga() {
  yield spawn(usersSaga);
}
