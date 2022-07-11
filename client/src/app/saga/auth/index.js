import { all } from 'redux-saga/effects';
import requestUpdateAddress from './deliveryAddress';
import requestUpdataInfor from './information';
import loginRequest from './login';
import getOrderRequest from './order';

export const authSaga = function* root() {
  yield all([loginRequest(), requestUpdataInfor(), requestUpdateAddress(), getOrderRequest()]);
};
