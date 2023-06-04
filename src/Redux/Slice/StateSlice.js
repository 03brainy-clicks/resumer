import { createSlice } from "@reduxjs/toolkit";

const initialState = { state: 0 };

const StateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addState(state, action) {
      state.state = action.payload;
    },
    resetState(state) {
      state.state = 0;
    },
  },
});

export const { addState, resetState } = StateSlice.actions;
export default StateSlice.reducer;
