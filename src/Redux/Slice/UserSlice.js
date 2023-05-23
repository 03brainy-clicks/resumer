import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cred: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserCred(state, action) {
      state.cred = action.payload;
    },
    resetUserCred(state) {
      state.cred = {};
    },
  },
});

export const { addUserCred, resetUserCred } = UserSlice.actions;
export default UserSlice.reducer;
