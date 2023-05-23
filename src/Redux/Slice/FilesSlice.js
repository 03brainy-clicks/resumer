import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
};

const FilesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFiles(state, action) {
      state.files = action.payload;
    },
    resetFiles(state) {
      state.files = [];
    },
  },
});

export const { addFiles,resetFiles } = FilesSlice.actions;
export default FilesSlice.reducer;
