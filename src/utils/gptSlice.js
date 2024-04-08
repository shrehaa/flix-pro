/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGPTvalue: false,
    gptLanguage:"en",
    gptSearchResult:null
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggleGPTvalue = !state.toggleGPTvalue;
    },
    setLanguage : (state, action) =>{
      state.gptLanguage = action.payload
    },
    addGPTResults : (state, action) => {
      state.gptSearchResult = action.payload
    }
  },
});
export const { toggleGPT, setLanguage, addGPTResults } = gptSlice.actions;
export default gptSlice.reducer;
