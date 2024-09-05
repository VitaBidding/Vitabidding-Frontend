import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import searchReducer from "./features/search/searchSlice";
import auctionSlice from "./features/auction/auctionSlice";
export const store = configureStore({
  reducer: {
    auction: auctionSlice,
    user: userReducer,
    search: searchReducer,
  },
});
