/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGPTvalue: false,
    gptLanguage:"en"
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggleGPTvalue = !state.toggleGPTvalue;
    },
    setLanguage : (state, action) =>{
      state.gptLanguage = action.payload
    }
  },
});
export const { toggleGPT, setLanguage } = gptSlice.actions;
export default gptSlice.reducer;
