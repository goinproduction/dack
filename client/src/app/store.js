import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import locationSlice from '../features/Account/locationSlice';
import userSlice from '../features/Auth/userSlice';
import categorySlice from '../features/Product/categorySlice';
import rootSaga from './saga/rootSaga';
import cartSlice from '../features/Cart/cartSlice';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    user: userSlice,
    location: locationSlice,
    category: categorySlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
