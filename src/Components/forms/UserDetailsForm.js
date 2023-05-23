import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addUserDetails } from "../../Redux/Slice/UserDetailsSlice";

const UserDetailsForm = () => {
  const dispatch = useDispatch();
  // * profile
  const userDetails = useSelector((state) => state.userDetails.details);
  const [name, setName] = useState(userDetails?.name);
  const [designation, setDesignation] = useState(userDetails?.designation);
  const [about, setAbout] = useState(userDetails?.about);

  const handleDetails = (e) => {
    toast.success("Profile Set");
    e.preventDefault();
    if (name && designation && about) {
      let data = {
        name,
        about,
        designation,
      };
      dispatch(addUserDetails(data));
    }
  };

  return (
    <div className=" text-gray-700 mb-5 flex flex-col  justify-between min-h-[75vh]">
      {/* user details  */}
      <div>
        <h4
          className="text-xl font-bold  mt-11 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tell us about yourself
        </h4>
        <form
          className="flex gap-3 flex-col  mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="flex gap-3">
            <div className="flex-1">
              {" "}
              <label htmlFor="Name" className="text-sm font-medium">
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />
            </div>
            <div className="flex-1 ">
              <label htmlFor="Designation" className="text-sm font-medium">
                Designation
              </label>
              <br />
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Designation"
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <label htmlFor="About" className="text-sm font-medium">
              About
            </label>
            <br />
            <textarea
              name="About"
              rows="5"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            ></textarea>
          </div>
          <div>
            <button
              onClick={handleDetails}
              className="ml-auto bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="flex mt-11 justify-between">
        <Link to={"/editor/document"}>
          <button className=" bg-gray-200 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
            Back
          </button>
        </Link>
        <Link to={"/editor/contact"}>
          <button className=" bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsForm;
