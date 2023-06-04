import { faArrowLeft, faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addEducation } from "../../Redux/Slice/EducationSlice";
import { addState } from "../../Redux/Slice/StateSlice";

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education.education);

  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const resetValue = () => {
    setDegree("");
    setSchool("");
    setStart("");
    setEnd("");
  };

  const handleEducation = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (school && degree && start && end) {
      let data = {
        id: uuidv4(),
        degree,
        school,
        start,
        end,
      };
      toast.success("Education Set");
      dispatch(addEducation([data, ...education]));
      resetValue();
    }
  };

  const handleDelete = (id) => {
    const copy = education;
    dispatch(addEducation([...copy.filter((item) => item.id !== id)]));
  };

  return (
    <div className=" text-gray-700  mb-5  flex flex-col  justify-between min-h-[75vh]">
      {/* education details  */}
      <div>
      <h4
        className="text-xl font-bold"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Tell us about your education
      </h4>
      {education?.length > 0 ? (
        <>
          <div
            className="flex flex-col gap-3  mt-5"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            {education.map((item) => {
              return (
                <div
                  className="flex items-center justify-center"
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="flex flex-col flex-1 gap-1">
                    <h5 className="font-semibold text-sm"> {item.degree}</h5>
                    <h6 className="text-xs font-medium text-gray-600">
                      {item.school}
                    </h6>
                    <p className="text-xs">
                      {item.start} - {item.end}
                    </p>
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
        </>
      ) : (
        ""
      )}
      <form
        method="POST"
        className="flex gap-3 flex-col  mt-5"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="2000"
      >
        <div className="w-full ">
          <label
            htmlFor="Degree/Specialization"
            className="text-sm font-medium"
          >
            Specialization
          </label>
          <br />
          <input
            type="text"
            placeholder="Specialization"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
          />
        </div>{" "}
        <div className="w-full ">
          <label
            htmlFor="School/College/University"
            className="text-sm font-medium"
          >
            Institute
          </label>
          <br />
          <input
            type="text"
            placeholder="institute"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
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
          <button
            onClick={handleEducation}
            className="bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
          >
            Add
          </button>
        </div>
      </form>
      </div>
      <div className="flex mt-11 justify-between">
        <Link to={"/editor/experience"}>
          <button onClick={() => dispatch(addState(3))} className=" bg-gray-200 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
          <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-1"/>  Back 
          </button>
        </Link>
        <Link to={"/editor/skills"}>
          <button onClick={() => dispatch(addState(5))} className=" bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
         Next <FontAwesomeIcon icon={faArrowRight } size="sm" className="ml-1"/>  
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EducationForm;
