import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  province: [],
  district: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    province(state, action) {
      state.province = action.payload;
    },
    district(state, action) {},
  },
});

const { actions, reducer } = locationSlice;

export const { province, district } = actions;

export default reducer;
