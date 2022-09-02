import { configureStore } from "@reduxjs/toolkit";
import holidaysReducer from './holidaysSlice';
import textReducer from './textSlice';
import imgReducer from './imgSlice';

export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    text: textReducer,
    img: imgReducer,
  }
})