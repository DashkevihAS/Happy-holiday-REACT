import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  'holidays/fetchHolidays',
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
)

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: {},
    holiday: '',
    error: '',
    loading: '',
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    }
  },
  extraReducers: {
    [fetchHolidays.pending]: (state) => {
        state.loading = 'loading';
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.holidays = action.payload;
      state.loading = 'success';

    },
    [fetchHolidays.rejected]: (state, action) => {
      state.loading = 'failed';
      state.error = action.payload;
      state.holidays = {};


    },
  }
});

export const {
  setHoliday,
} = holidaysSlice.actions;

export default holidaysSlice.reducer;