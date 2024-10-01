import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user.slice";
import searchReducer from "./features/search/search.slice";
import auctionSlice from "./features/auction/auction.slice";
import KRWSlice from "./features/KRW/KRW.slice";
export const store = configureStore({
  reducer: {
    auction: auctionSlice,
    user: userReducer,
    search: searchReducer,
    KRW: KRWSlice,
  },
});
