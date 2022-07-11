import locationAPI from 'api/location/locationApi';
import { province } from 'features/Account/locationSlice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_PROVINCE } from './actionType';

function* fetchProvince() {
  try {
    const res = yield call(() => locationAPI.province());
    if (res) yield put(province(res.data));
  } catch (e) {}
}

function* requestProvince() {
  yield takeLatest(FETCH_PROVINCE, fetchProvince);
}

export default requestProvince;

function* fetchDistrict({ provinceId }) {
  try {
    const res = yield call((provinceId) => locationAPI.province(provinceId));
    if (res) yield put();
  } catch (e) {}
}

function* requestDistrict() {
  yield takeLatest(FETCH_PROVINCE, fetchDistrict);
}
