import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: [],
};

const ExperienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience(state, action) {
      state.experience = action.payload;
    },
    resetExperience(state, action) {
      state.experience = action.payload;
    },
  },
});

export const { addExperience ,resetExperience} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;
