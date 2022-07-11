import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  loading: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getAll(state) {
      if (state.list.length <= 0) {
        state.loading = true;
      }
    },
    getAllSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    getAllFail(state, action) {
      state.loading = false;
    },
  },
});

// Actions
export const categoryActions = categorySlice.actions;

// Reducers
const categoryReducer = categorySlice.reducer;
export default categoryReducer;
