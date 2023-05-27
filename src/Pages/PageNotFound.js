import React from "react";
import { ReactComponent as PNF } from "../assets/page404.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const cred = useSelector((state) => state.user.cred);
  return (
    <div>
      <div className="lg:w-9/12 w-10/12 mx-auto flex justify-center items-center border py-3  gap-5  text-center h-[100vh]">
        <div className="w-full flex flex-col gap-7">
          <PNF className="w-1/3 mx-auto" />
          <p>
            You didn't break the internet but we can't find what you are looking
            for.
          </p>
          {cred?.uid ? (
            <Link to={"/home"}>
              {" "}
              <button className="bg-indigo-600 mt-12 transition mx-auto rounded-sm duration-200  ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
                Back home
              </button>{" "}
            </Link>
          ) : (
            <Link to={"/"}>
              <button className="bg-indigo-600 mt-12 transition mx-auto rounded-sm duration-200  ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
                Back home
              </button>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
