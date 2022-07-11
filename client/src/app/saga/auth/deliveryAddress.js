import authAPI from 'api/userApi';
import { addressDelivery, updateDeliveryAddress, notLoading } from 'features/Auth/userSlice';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DELIVERY_ADDRESS_REQUEST, USER_UPDATE_DELIVERY_ADDRESS_REQUEST } from './actionType';

function* fetchAddressDelivery({ userId }) {
  try {
    const res = yield call(() => authAPI.getDeliveryAddress(userId));
    if (res) {
      yield put(addressDelivery(res));
    }
  } catch (e) {}
}

function* requestAddressDelivery() {
  yield takeLatest(FETCH_DELIVERY_ADDRESS_REQUEST, fetchAddressDelivery);
}

function* updateAddress({ params, userId }) {
  try {
    const res = yield call(() => authAPI.updateDeliveryAddress(params, userId));
    if (res) {
      if (res.success) {
        toast.success(res.message);
      }
      yield put(updateDeliveryAddress(params));
    }
  } catch (e) {
    yield put(notLoading());
    toast.error(e.response.data.message);
  }
}

function* requestUpdateAddress() {
  yield takeLatest(USER_UPDATE_DELIVERY_ADDRESS_REQUEST, updateAddress);
}

export default function* () {
  yield all([requestAddressDelivery(), requestUpdateAddress()]);
}
