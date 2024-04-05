/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGPTvalue: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggleGPTvalue = !state.toggleGPTvalue;
    },
  },
});
export const { toggleGPT } = gptSlice.actions;
export default gptSlice.reducer;
