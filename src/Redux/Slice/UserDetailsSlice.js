import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

const UserDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUserDetails(state, action) {
      state.details = action.payload;
    },
    resetUserDetails(state) {
      state.details = {};
    },
  },
});

export const { addUserDetails,resetUserDetails } = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;
