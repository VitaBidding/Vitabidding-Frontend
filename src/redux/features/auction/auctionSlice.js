import { createSlice } from "@reduxjs/toolkit";

export const auctionSlice = createSlice({
  name: "auction",
  initialState: {
    auction: "",
  },
  reducers: {
    auction: (state, action) => {
      state.auction = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { auction } = auctionSlice.actions;

export const selectauction = (state) => state.auction.auction;

export default auctionSlice.reducer;
