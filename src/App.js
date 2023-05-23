import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ResetPage from "./Pages/ResetPage";
import HomePage from "./Pages/HomePage";
import EditorPage from "./Pages/EditorPage";
import UserDetailsForm from "./Components/forms/UserDetailsForm";
import ExperienceForm from "./Components/forms/ExperienceForm";
import EducationForm from "./Components/forms/EducationForm";
import SkillsForm from "./Components/forms/SkillsForm";
import ContactForm from "./Components/forms/ContactForm";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Preview from "./Pages/Preview";
import DocumentForm from "./Components/forms/DocumentForm";

AOS.init({ once: true });
function App() {
  return (
    <div class Name="text-gray-800">
      <ToastContainer position="top-right" autoClose={3000} closeOnClick />

      <Routes>
        <Route path="/editor" element={<EditorPage />}>
          <Route path="/editor/document" element={<DocumentForm />} />{" "}
          <Route path="/editor/userdetails" element={<UserDetailsForm />} />{" "}
          <Route path="/editor/experience" element={<ExperienceForm />} />{" "}
          <Route path="/editor/education" element={<EducationForm />} />{" "}
          <Route path="/editor/skills" element={<SkillsForm />} />{" "}
          <Route path="/editor/contact" element={<ContactForm />} />
        </Route>
        <Route path="/preview" element={<Preview />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
