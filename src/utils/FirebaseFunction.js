import { addContact, resetContact } from "../Redux/Slice/ContactSlice";
import { addDocument, resetDocument } from "../Redux/Slice/DocumentSlice";
import { addEducation, resetEducation } from "../Redux/Slice/EducationSlice";
import { addExperience, resetExperience } from "../Redux/Slice/ExperienceSlice";
import { resetFiles } from "../Redux/Slice/FilesSlice";
import { addSkills, resetSkills } from "../Redux/Slice/SkillsSlice";
import { resetState } from "../Redux/Slice/StateSlice";
import {
  addUserDetails,
  resetUserDetails,
} from "../Redux/Slice/UserDetailsSlice";
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

const resetAllStoreAfterSave = (dispatch) => {
  dispatch(resetContact());
  dispatch(resetDocument());
  dispatch(resetEducation());
  dispatch(resetExperience());
  dispatch(resetSkills());
  dispatch(resetState());
  dispatch(resetUserDetails());
};

const addAllValueToStore = (dispatch, data) => {
  dispatch(addDocument(data?.document));
  dispatch(addUserDetails(data?.userdetails));
  dispatch(addContact(data?.contact));
  dispatch(addExperience(data?.experience));
  dispatch(addEducation(data?.education));
  dispatch(addSkills(data.skills));
};

export { resetAllStore, resetAllStoreAfterSave, addAllValueToStore };
