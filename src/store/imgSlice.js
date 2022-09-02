import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImg = createAsyncThunk(
  'img/fetchImg',
  async (holiday) => {
    const res = await fetch(`${URI_API}/image/${holiday}`);
    const data = await res.json();
    return data;
  }
)

const imgSlice = createSlice({
  name: 'img',
  initialState: {
    urlImg: '',
    idImg: '',
    loading: '',
  },
  reducers: {},  
  extraReducers: {
    [fetchImg.pending]: (state) => {
      state.loading = 'loading';
      state.urlImg = '';
      state.idImg = '';
    },
    [fetchImg.fulfilled]: (state, action) => {
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
      state.loading = 'success';

    },
    [fetchImg.rejected]: (state, action) => {
      state.loading = 'failed';
      state.urlImg = '';
      state.idImg = ''; 
    },
  }
});

export default imgSlice.reducer;