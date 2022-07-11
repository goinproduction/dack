import { all } from 'redux-saga/effects';
import { default as requestDistrict, default as requestProvince } from './location';

function* locationSaga() {
  yield all([requestProvince(), requestDistrict()]);
}

export default locationSaga;
