import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';

const userInfor = JSON.parse(localStorage.getItem(StorageKeys.USER));

const initialState = {
  userData: userInfor,
  token: '',
  addressDelivery: {},
  isLoading: false,
  isLoadingScreen: true,
  order: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem(StorageKeys.TOKEN, action.payload.token);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload.user));
      state.userData = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
    },
    updateInformation(state, action) {
      state.userData = action.payload.update;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload.update));
      state.isLoading = false;
    },
    updateDeliveryAddress(state, action) {
      // state.userData = action.payload.address;
      state.addressDelivery = action.payload;
      localStorage.setItem(StorageKeys.ADDRESS, JSON.stringify(action.payload.address));
      state.isLoading = false;
    },
    logout(state, action) {
      state.userData = {};
      state.addressDelivery = {};
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
    },
    addressDelivery(state, action) {
      // localStorage.setItem('address', JSON.stringify( action.payload.address));
      state.addressDelivery = action.payload.data;
    },
    loading(state) {
      state.isLoading = true;
    },
    notLoading(state) {
      state.isLoading = false;
    },
    getOrder(state, action) {
      state.order = action.payload.orderLst;
      state.isLoadingScreen = false;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  login,
  updateInformation,
  updateDeliveryAddress,
  addressDelivery,
  logout,
  loading,
  notLoading,
  getOrder,
} = actions;
export default reducer;
