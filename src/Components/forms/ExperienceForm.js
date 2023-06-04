import { faArrowLeft, faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addExperience } from "../../Redux/Slice/ExperienceSlice";
import { toast } from "react-toastify";
import { addState } from "../../Redux/Slice/StateSlice";

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience.experience);
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");

  const resetValue = () => {
    setCompany("");
    setDescription("");
    setDesignation("");
    setStart("");
    setEnd("");
  };

  const handleExperience = (e) => {
    e.preventDefault();
    if (company && designation && start && end && description) {
      let data = {
        id: uuidv4(),
        company,
        designation,
        start,
        end,
        description,
      };
      toast.success("Experience Set");
      dispatch(addExperience([data, ...experience]));
      resetValue();
    }
  };

  const handleDelete = (id) => {
    const copy = experience;
    dispatch(addExperience([...copy.filter((item) => item.id !== id)]));
  };

  return (
    <div className=" text-gray-700  mb-5 flex flex-col  justify-between min-h-[75vh] ">
      {/* work details  */}
      <div>
        <h4
          className="text-xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tell us about your work experience
        </h4>
        {experience?.length > 0 ? (
          <div
            className="flex flex-col gap-3  mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            {experience.map((item) => {
              return (
                <div
                  className="flex-1 flex items-center justify-between"
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="flex flex-col gap-1">
                    <h5 className="font-semibold text-sm">
                      {" "}
                      {item.designation}
                    </h5>
                    <h6 className="text-xs font-medium text-gray-600">
                      {item.company}, {item.start} - {item.end}
                    </h6>
                    <p className="text-xs">{item.description}</p>
                  </div>
                  <div
                    className="w-20 rounded-full"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="sm"
                      className="p-3 rounded-full h-3 w-3 bg-gray-200 hover:bg-gray-300 hover:text-red-600 cursor-pointer  transition duration-200 ease-in-out "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <form
          method="POST"
          className="flex gap-3 flex-col  mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="w-full ">
            <label htmlFor="Company" className="text-sm font-medium">
              Company
            </label>
            <br />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            />
          </div>{" "}
          <div className="w-full ">
            <label htmlFor="Designation" className="text-sm font-medium">
              Designation
            </label>
            <br />
            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            />
          </div>{" "}
          <div className="flex gap-3">
            <div className="w-full ">
              <label htmlFor="Start Date" className="text-sm font-medium">
                Start Date
              </label>
              <br />
              <input
                type="date"
                placeholder="Start Date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
              />
            </div>{" "}
            <div className="w-full ">
              <label htmlFor="End Date" className="text-sm font-medium">
                End Date
              </label>
              <br />
              <input
                type="date"
                placeholder="End Date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
              />
            </div>
          </div>
          <div className="">
            {" "}
            <label htmlFor="Description" className="text-sm font-medium">
              Description
            </label>
            <br />
            <textarea
              name="Description"
              rows="3"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            ></textarea>
          </div>
          <div className="">
            <button
              onClick={handleExperience}
              className="bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-11 justify-between">
        <Link to={"/editor/contact"}>
          <button onClick={() => dispatch(addState(2))} className=" bg-gray-200 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
          <FontAwesomeIcon icon={faArrowLeft } size="sm" className="mr-1"/>  Back 
          </button>
        </Link>
        <Link to={"/editor/education"}>
          <button onClick={() => dispatch(addState(4))} className=" bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
          Next <FontAwesomeIcon icon={faArrowRight}  size="sm" className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceForm;
