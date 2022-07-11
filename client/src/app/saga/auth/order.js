import authAPI from 'api/userApi';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getOrder,
  loadingScreen,
  login,
  notLoading,
  addOrder,
} from '../../../features/Auth/userSlice';
import { ADD_ORDER, FETCH_ORDER_PRODUCT } from './actionType';

function* getOrderSaga({ userId }) {
  try {
    const res = yield call(() => authAPI.getOrder(userId));
    if (res) {
      yield put(getOrder(res));
    }
  } catch (error) {}
}

function* getOrderRequest() {
  yield takeLatest(FETCH_ORDER_PRODUCT, getOrderSaga);
}

export default function* () {
  yield all([getOrderRequest()]);
}
