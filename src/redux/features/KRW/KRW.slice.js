import { createSlice } from "@reduxjs/toolkit";

export const KRWSlice = createSlice({
  name: "KRW",
  initialState: {
    KRW: "",
  },
  reducers: {
    setKRW: (state, action) => {
      state.KRW = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKRW } = KRWSlice.actions;

export const selectKRW = (state) => state.KRW.KRW;

export default KRWSlice.reducer;
