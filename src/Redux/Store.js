import { configureStore } from "@reduxjs/toolkit";

//  import reducers
import UserReducer from "./Slice/UserSlice";
import UserDetailsReducer from "./Slice/UserDetailsSlice";
import EducationReducer from "./Slice/EducationSlice";
import ExperienceReducer from "./Slice/ExperienceSlice";
import ContactReducer from "./Slice/ContactSlice";
import SkillsReducer from "./Slice/SkillsSlice";
import DocumentReducer from "./Slice/DocumentSlice";
import StateReducer from "./Slice/StateSlice";
import FilesReducer from "./Slice/FilesSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    userDetails: UserDetailsReducer,
    education: EducationReducer,
    experience: ExperienceReducer,
    skills: SkillsReducer,
    contact: ContactReducer,
    document: DocumentReducer,
    state: StateReducer,
    files: FilesReducer,
  },
});

export default store;
