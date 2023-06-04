import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.Config";
import { resetAllStore } from "../utils/FirebaseFunction";
import { toast } from "react-toastify";
import DropDown from "./DropDown";

const Navigation = () => {
  const [active, setActive] = useState("home");
  const dispatch = useDispatch();
  const cred = useSelector((state) => state.user.cred);

  const handleLogout = async () => {
    signOut(auth)
      .then((res) => {
        resetAllStore(dispatch);
      })
      .catch((e) => {
        toast.error("Logout error");
      });
  };
  return (
    <div
      className="sticky top-0 bg-white z-50 shadow"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="lg:w-9/12 w-10/12 mx-auto flex justify-between items-center py-3 ">
        <div className="logo">
          <h3 className="text-xl font-semibold">
            Resumer<span className="text-indigo-500">.</span>{" "}
          </h3>
        </div>

        <div className="menu">
          <ul className="font-medium    text-sm flex gap-7 items-center text-gray-500">
            {cred?.email ? (
              <Link to={"/home"}>
                <li
                  className={`hover:text-indigo-700 cursor-pointer ${
                    active === "home" ? "text-indigo-600" : ""
                  } `}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  Home
                </li>
              </Link>
            ) : (
              <Link to={"/"}>
                <li
                  className={`hover:text-indigo-700 cursor-pointer ${
                    active === "home" ? "text-indigo-600" : ""
                  } `}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  Home
                </li>
              </Link>
            )}

            {cred?.email ? (
              <>
                <li>
                  <DropDown
                    user={cred?.email.split("@")[0]}
                    logout={handleLogout}
                  />
                </li>
              </>
            ) : (
              <>
                {" "}
                <Link to={"/login"}>
                  <li
                    className={`hover:text-indigo-700 cursor-pointer ${
                      active === "login" ? "text-indigo-600" : ""
                    } `}
                    onClick={() => {
                      setActive("login");
                    }}
                  >
                    Login
                  </li>
                </Link>
                <Link to={"/signup"}>
                  <li>
                    <button
                      onClick={() => {
                        setActive("signup");
                      }}
                      className="bg-indigo-600 transition  rounded duration-200  ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
                    >
                      Get Started
                    </button>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
