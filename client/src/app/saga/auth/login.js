import authAPI from 'api/userApi';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login, notLoading } from '../../../features/Auth/userSlice';
import { USER_LOGIN_REQUEST } from './actionType';

function* loginSaga({ data }) {
  try {
    const res = yield call(() => authAPI.login(data));
    if (res) {
      yield put(login(res));
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (error) {
    yield put(notLoading());
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

function* loginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, loginSaga);
}

export default loginRequest;
