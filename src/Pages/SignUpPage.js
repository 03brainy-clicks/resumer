import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase.Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUserCred } from "../Redux/Slice/UserSlice";
import { toast } from "react-toastify";
import { validEmail, validPassword } from "../utils/Regex";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reset = () => {
    setEmailErr(false);
    setPwdError(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    reset();

    if (!validEmail.test(email)) {
      setEmailErr(true);
    }

    if (!validPassword.test(password)) {
      setPwdError(true);
    }

    if (email && password && !emailErr && !pwdError) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("Signup Successful");
          let cred = {
            email: res.user.email,
            uid: res.user.uid,
          };
          dispatch(addUserCred(cred));
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Signup failed");
        });
    }
    //
  };

  return (
    <div className="">
      <div className="lg:w-9/12 w-10/12 mx-auto flex justify-center items-center h-[100vh]  ">
        <div className="lg:w-1/3 md:3/4 w-full shadow-2xl card p-9 rounded " data-aos="fade-up"
          data-aos-duration="2000">
          <h3 className="text-xl font-semibold text-center">
            Resumer<span className="text-indigo-500">.</span>{" "}
          </h3>{" "}
          <h4 className="text-2xl font-semibold text-center  mt-2">
            Create your account
          </h4>
          <p className="text-sm text-center text-gray-500 mt-2">
            Enter your credentials to access your account
          </p>
          <form method="POST" className="flex gap-3 flex-col mt-5  ">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
              />
              {emailErr && (
                <p className="text-red-500 mt-1 text-xs">
                  *Your email is invalid
                </p>
              )}
            </div>{" "}
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1  w-full outline-none  "
              />
              {pwdError && (
                <p className="text-red-500 mt-1 text-xs">
                  *Your password is invalid. Minimum eight characters, at least
                  one letter and one number
                </p>
              )}
            </div>
            <div className="mt-2">
              <button
                onClick={handleSignUp}
                className="bg-indigo-600 transition text-sm  rounded duration-200  ease-in-out py-2 px-5 text-white hover:bg-indigo-800 w-full"
              >
                Sign Up
              </button>
              <Link to={"/"}>
                <button className="border-2 font-medium transition text-sm mt-3  rounded duration-200  ease-in-out py-2 px-5 hover:text-indigo-800 w-full">
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
              </Link>
              <p className="text-sm pt-5 text-center text-gray-500 ">
                Already have an account?
                <Link to="/login">
                  <span className="text-indigo-500"> Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
