import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import locationSaga from './location';
import categorySaga from 'features/Product/categorySaga';

export default function* rootSaga() {
  yield all([authSaga(), locationSaga(), categorySaga()]);
}
