import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [],
};

const EducationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation(state, action) {
      state.education = action.payload;
    },
    resetEducation(state) {
      state.education = [];
    },
  },
});

export const { addEducation,resetEducation } = EducationSlice.actions;
export default EducationSlice.reducer;
