import ResumeFive from "./ResumeFive";
import ResumeFour from "./ResumeFour";
import ResumeOne from "./ResumeOne";
import ResumeThree from "./ResumeThree";
import ResumeTwo from "./ResumeTwo";

const Resume = (name) => {
  switch (name) {
    case "Resume-1": {
      return ResumeOne;
    }
    case "Resume-2": {
      return ResumeTwo;
    }
    case "Resume-3": {
      return ResumeThree;
    }
    case "Resume-4": {
      return ResumeFour;
    }
    case "Resume-5": {
      return ResumeFive;
    }
    default: {
      return ResumeFive;
    }
  }
};

export default Resume;
