import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
};

const SkillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkills(state, action) {
      state.skills = action.payload;
    },
    resetSkills(state) {
      state.skills = [];
    },
  },
});

export const { addSkills, resetSkills } = SkillsSlice.actions;
export default SkillsSlice.reducer;
