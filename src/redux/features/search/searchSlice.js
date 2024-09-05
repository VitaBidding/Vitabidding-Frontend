import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { search } = searchSlice.actions;

export const selectsearch = (state) => state.search.search;

export default searchSlice.reducer;
