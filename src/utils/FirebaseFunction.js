import { resetContact } from "../Redux/Slice/ContactSlice";
import { resetDocument } from "../Redux/Slice/DocumentSlice";
import { resetEducation } from "../Redux/Slice/EducationSlice";
import { resetExperience } from "../Redux/Slice/ExperienceSlice";
import { resetFiles } from "../Redux/Slice/FilesSlice";
import { resetSkills } from "../Redux/Slice/SkillsSlice";
import { resetState } from "../Redux/Slice/StateSlice";
import { resetUserDetails } from "../Redux/Slice/UserDetailsSlice";
import { resetUserCred } from "../Redux/Slice/UserSlice";

const resetAllStore = (dispatch) => {
  dispatch(resetContact());
  dispatch(resetDocument());
  dispatch(resetEducation());
  dispatch(resetExperience());
  dispatch(resetFiles());
  dispatch(resetSkills());
  dispatch(resetState());
  dispatch(resetUserDetails());
  dispatch(resetUserCred());
};

export { resetAllStore };
