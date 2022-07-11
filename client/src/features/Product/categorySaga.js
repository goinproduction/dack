import { categoryActions } from './categorySlice';
import categoryApi from 'api/categoryApi';
import { takeLatest, call, put } from 'redux-saga/effects';

function* getAll() {
  try {
    const response = yield call(categoryApi.getAll);
    yield put(categoryActions.getAllSuccess(response.categories));
  } catch (error) {
    yield put(categoryActions.getAllFail());
  }
}

export default function* categorySaga() {
  yield takeLatest(categoryActions.getAll, getAll);
}
