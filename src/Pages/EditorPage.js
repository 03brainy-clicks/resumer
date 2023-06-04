import React from "react";
import { Link, Outlet } from "react-router-dom";
import Resume from "../Components/Resume/Index";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "../Redux/Slice/StateSlice";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Components/Loader";

const EditorPage = () => {
  const dispatch = useDispatch();
  const document = useSelector((state) => state.document.document);
  const state = useSelector((state) => state.state.state);
  const Component = Resume(document?.template);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className=" min-h-[100vh]">
      <div className="lg:w-9/12 w-10/12 mx-auto py-5  ">
        <div
          className="flex items-center justify-between gap-3 text-lg font-medium  text-gray-400 my-7"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Link to={"document"}>
            <span
              onClick={() => dispatch(addState(0))}
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
              onClick={() => dispatch(addState(1))}
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
              onClick={() => dispatch(addState(2))}
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
              onClick={() => dispatch(addState(3))}
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
              onClick={() => dispatch(addState(4))}
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
              onClick={() => dispatch(addState(5))}
              className={`transition duration-1000 ease-in-out  ${
                state >= 5 ? "text-indigo-600" : ""
              }`}
            >
              Skills
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:w-9/12 w-10/12 mx-auto flex gap-7 ">
        <div className="flex-1 ">
          <Outlet />
        </div>
        <div
          className="flex-1 flex relative justify-center "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-[37.205rem] min-h-[52.618rem] mx-auto lg:scale-[.7] md:scale-[.6] absolute  origin-top">
            <Component />
          </div>
        </div>
      </div>
      <div className="p-5">&nbsp;</div>
    </div>
  );
};

export default EditorPage;
