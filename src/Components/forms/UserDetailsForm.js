import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addUserDetails } from "../../Redux/Slice/UserDetailsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { addState } from "../../Redux/Slice/StateSlice";

const UserDetailsForm = () => {
  const dispatch = useDispatch();
  // * profile
  const userDetails = useSelector((state) => state.userDetails.details);
  const [name, setName] = useState(userDetails?.name);
  const [designation, setDesignation] = useState(userDetails?.designation);
  const [about, setAbout] = useState(userDetails?.about);
  const [image, setImage] = useState(userDetails?.image);
  const imageRef = useRef();

  const handleDetails = (e) => {
    toast.success("Profile Set");
    e.preventDefault();
    if (name && designation && about && image) {
      let data = {
        name,
        about,
        designation,
        image: image,
      };
      dispatch(addUserDetails(data));
    }
  };

  const handleSelectImage = (e) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event?.target?.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataURL = reader.result;
      setImage(dataURL);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className=" text-gray-700 mb-5 flex flex-col justify-between min-h-[75vh]">
      {/* user details  */}
      <div>
        <h4
          className="text-xl font-bold "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tell us about yourself
        </h4>
        <form
          className="flex gap-3 flex-col mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="flex gap-3">
            <div className="flex gap-3 flex-col flex-1">
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
                  className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
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
                  className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
                />
              </div>
              <div className="flex-1">
                <label htmlFor="imageupload" className="text-sm font-medium">
                  Image
                </label>
                <br />
                <button
                  onClick={handleSelectImage}
                  className="bg-gray-100 text-sm w-full  rounded  transition duration-200 ease-in-out py-2 px-5 text-gray-400  hover:bg-gray-200"
                >
                  Select Image
                </button>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  ref={imageRef}
                  className="hidden"
                  multiple={false}
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="w-full h-[13.25rem] bg-gray-100 overflow-hidden flex items-center  justify-center">
                {image ? (
                  <img src={image} alt="" className="object-cover" />
                ) : (
                  <h3 className="text-xl font-semibold">
                    Resumer<span className="text-indigo-500">.</span>{" "}
                  </h3>
                )}
              </div>
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
              className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            ></textarea>
          </div>
          <div>
            <button
              onClick={handleDetails}
              className="ml-auto bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="flex mt-11 justify-between">
        <Link to={"/editor/document"}>
          <button
            onClick={() => dispatch(addState(0))}
            className=" bg-gray-200 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-1" />{" "}
            Back
          </button>
        </Link>

        <Link to={"/editor/contact"}>
          <button
            onClick={() => dispatch(addState(2))}
            className=" bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
          >
            Next{" "}
            <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsForm;
