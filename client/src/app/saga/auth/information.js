import authAPI from 'api/userApi';
import { notLoading, updateInformation } from 'features/Auth/userSlice';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { USER_UPDATE_INFORMATION_REQUEST } from './actionType';

function* updateInfor({ data, userId }) {
  try {
    const res = yield call(() => authAPI.updateInformation(data, userId));
    if (res) {
      if (res.success) {
        toast.success(res.message);
      }
      yield put(updateInformation(res));
    }
  } catch (e) {
    yield put(notLoading());
    toast.error(e.response.data.message);
  }
}

function* requestUpdataInfor() {
  yield takeLatest(USER_UPDATE_INFORMATION_REQUEST, updateInfor);
}

export default requestUpdataInfor;
