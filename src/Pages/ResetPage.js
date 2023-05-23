import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validEmail } from "../utils/Regex";
import { auth } from "../Firebase/Firebase.Config";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPage = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const navigate = useNavigate();

  const reset = () => {
    setEmailErr(false);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    reset();

    if (!validEmail.test(email)) {
      setEmailErr(true);
    }

    if (email && !emailErr) {
      await sendPasswordResetEmail(auth, email).then((res) => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="">
      <div className="lg:w-9/12 w-10/12 mx-auto flex justify-center items-center h-[100vh]  ">
        <div className="lg:w-1/3 md:3/4 w-full shadow-2xl card p-9 rounded-sm" data-aos="fade-up"
          data-aos-duration="2000">
          <h3 className="text-xl text-center  font-semibold">
            Resumer<span className="text-indigo-500">.</span>{" "}
          </h3>{" "}
          <h4 className="text-2xl font-semibold text-center  mt-2">
            Forgot Password
          </h4>
          <p className="text-sm text-center text-gray-500 mt-2">
            No worries, we'll send you reset instructions
          </p>
          <form method="POST" className="flex gap-3 flex-col mt-5 ">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Enter your email
              </label>
              <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />
              {emailErr && (
                <p className="text-red-500 mt-1 text-xs">
                  *Your email is invalid
                </p>
              )}
            </div>{" "}
            <div className="mt-2">
              <button
                onClick={handleReset}
                className="bg-indigo-600 transition text-sm  rounded-sm duration-200  ease-in-out py-2 px-5 text-white hover:bg-indigo-800 w-full"
              >
                Reset Password
              </button>{" "}
              <Link to={"/login"}>
                <button className="border-2 font-medium transition text-sm mt-3  rounded-sm duration-200  ease-in-out py-2 px-5 hover:text-indigo-800 w-full">
                  <FontAwesomeIcon icon={faArrowLeft} /> Back to Login
                </button>
              </Link>
              <p className="text-sm pt-5 text-center text-gray-500 ">
                Don't have an account?
                <Link to="/signup">
                  <span className="text-indigo-500"> Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
