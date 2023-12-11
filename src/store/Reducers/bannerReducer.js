import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const add_banner = createAsyncThunk(
  'banner/add_banner',
  async (info, {}) => {
    try {
      const { data } = await api.post('/banner/add', info, {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const bannerReducer = createSlice({
  name: 'banner',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    banners: [],
    products: [],
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = '';
      state.successMessage = '';
    },
  },
  extraReducers: {},
});
export const { messageClear } = bannerReducer.actions;
export default bannerReducer.reducer;
