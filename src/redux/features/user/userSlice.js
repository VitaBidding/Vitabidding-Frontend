import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    real_name: "",
    email: "",
    login_type: "",
    nick_name: "",
    phone: "",
    reduxFuAddress: "",
    reduxDeAddress: "",
    reduxExAddress: "",
    reduxZonecode: "",
  },
  reducers: {
    real_name: (state, action) => {
      state.real_name = action.payload;
    },
    email: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload;
    },
    login_type: (state, action) => {
      state.login_type = action.payload;
    },
    nick_name: (state, action) => {
      state.nick_name = action.payload;
    },
    phone: (state, action) => {
      state.phone = action.payload;
    },
    reduxExAddress: (state, action) => {
      state.reduxExAddress = action.payload;
    },
    reduxFuAddress: (state, action) => {
      state.reduxFuAddress = action.payload;
    },
    reduxDeAddress: (state, action) => {
      state.reduxDeAddress = action.payload;
    },
    reduxZonecode: (state, action) => {
      state.reduxZonecode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  real_name,
  email,
  login_type,
  nick_name,
  phone,
  reduxExAddress,
  reduxFuAddress,
  reduxDeAddress,
  reduxZonecode,
} = userSlice.actions;
export const selectreal_name = (state) => state.user.real_name;
export const selectEmail = (state) => state.user.email;
export const selectlogin_type = (state) => state.user.login_type;
export const selectNickName = (state) => state.user.nick_name;
export const selectphone = (state) => state.user.phone;
export const selectExAddress = (state) => state.user.reduxExAddress;
export const selectFuAddress = (state) => state.user.reduxFuAddress;
export const selectDeAddress = (state) => state.user.reduxDeAddress;
export const selectZonecode = (state) => state.user.reduxZonecode;

export default userSlice.reducer;
