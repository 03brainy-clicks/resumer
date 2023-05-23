import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Resume from "../Components/Resume/Index";
import { useSelector } from "react-redux";

const EditorPage = () => {
  const [state, setState] = useState(0);
  const document = useSelector((state) => state.document.document);
  console.log(document);
  const Component = Resume(document?.template);

  return (
    <div>
      <div className="lg:w-9/12 w-10/12 mx-auto py-5  ">
        <div
          className="flex items-center justify-between gap-3 text-lg font-medium  text-gray-400 my-7"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Link to={"document"}>
            <span
              onClick={() => setState(0)}
              className={`transition duration-1000 ease-in-out  ${
                state >= 0 ? "text-indigo-600" : ""
              }`}
            >
              Document
            </span>
          </Link>{" "}
          <div
            className={`flex-1 border transition duration-1000 ease-in-out  ${
              state >= 1 ? "border-indigo-600" : ""
            }`}
          ></div>
          <Link to={"userdetails"}>
            <span
              onClick={() => setState(1)}
              className={`transition duration-1000 ease-in-out  ${
                state >= 1 ? "text-indigo-600" : ""
              }`}
            >
              Profile
            </span>
          </Link>{" "}
          <div
            className={`flex-1 border transition duration-1000 ease-in-out  ${
              state >= 2 ? "border-indigo-600" : ""
            }`}
          ></div>
          <Link to={"contact"}>
            <span
              onClick={() => setState(2)}
              className={`transition duration-1000 ease-in-out ${
                state >= 2 ? "text-indigo-600" : ""
              }`}
            >
              Contact
            </span>
          </Link>{" "}
          <div
            className={`flex-1 border transition duration-1000 ease-in-out  ${
              state >= 3 ? "border-indigo-600" : ""
            }`}
          ></div>
          <Link to={"experience"}>
            <span
              onClick={() => setState(3)}
              className={`transition duration-1000 ease-in-out ${
                state >= 3 ? "text-indigo-600" : ""
              }`}
            >
              Experience
            </span>
          </Link>{" "}
          <div
            className={`flex-1 border transition duration-1000 ease-in-out  ${
              state >= 4 ? "border-indigo-600" : ""
            }`}
          ></div>
          <Link to={"education"}>
            <span
              onClick={() => setState(4)}
              className={`transition duration-1000 ease-in-out ${
                state >= 4 ? "text-indigo-600" : ""
              }`}
            >
              Education
            </span>
          </Link>{" "}
          <div
            className={`flex-1 border transition duration-1000 ease-in-out ${
              state >= 5 ? "border-indigo-600" : ""
            }`}
          ></div>
          <Link to={"skills"}>
            <span
              onClick={() => setState(5)}
              className={`transition duration-1000 ease-in-out  ${
                state >= 5 ? "text-indigo-600" : ""
              }`}
            >
              Skills
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-9/12 w-10/12 mx-auto flex gap-7  ">
        <div className="flex-1 ">
          <Outlet />
        </div>
        <div className="flex-1 w-[210mm] flex items-start overflow-auto " data-aos="fade-up" data-aos-duration="2000" >
          <div className=" w-full scale-[0.70707070707] h-full">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
