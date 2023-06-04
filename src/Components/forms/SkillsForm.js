import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { addSkills } from "../../Redux/Slice/SkillsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { addState } from "../../Redux/Slice/StateSlice";

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const [skill, setSkill] = useState("");
  const [proficiency, setproficiency] = useState("");

  const resetValue = () => {
    setSkill("");
    setproficiency("");
  };

  const handleSkill = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (skill && proficiency) {
      let data = {
        id: uuidv4(),
        skill,
        proficiency,
      };
      toast.success("skill Set");
      dispatch(addSkills([data, ...skills]));
      resetValue();
    }
  };

  const handleDelete = (id) => {
    const copy = skills;
    dispatch(addSkills([...copy.filter((item) => item.id !== id)]));
  };

  return (
    <div className="  text-gray-700  mb-5  flex flex-col  justify-between min-h-[75vh] ">
      {/* skills details  */}
      <div>
        <h4
          className="text-xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tell us about your skills
        </h4>

        <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000">
          {skills?.length > 0 ? (
            <div className="flex flex-col gap-3  mt-5">
              <div className="flex flex-wrap gap-2">
                {skills.map((item) => {
                  return (
                    <div
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      key={item.id}
                      onClick={() => handleDelete(item.id)}
                      className="bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-red-600 cursor-pointer"
                    >
                      {item.skill}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <form
          method="POST"
          className="flex gap-3 flex-col  mt-5"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          <div className="">
            <label htmlFor="Skill" className="text-sm font-medium">
              Skill
            </label>
            <br />
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="py-2 px-2 bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            />
          </div>
          <div>
            <label htmlFor="Proficiency" className="text-sm font-medium">
              Proficiency
            </label>
            <select
              id="proficiency"
              value={proficiency}
              onChange={(e) => setproficiency(e.target.value)}
              className="py-2 placeholder:text-sm bg-gray-100 rounded  text-sm  mt-1 w-full outline-none  "
            >
              <option className="hidden" >Proficiency</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="">
            <button
              onClick={handleSkill}
              className="bg-indigo-600 text-sm mt-1 rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-11 justify-between">
        <Link to={"/editor/education"}>
          <button
            onClick={() => dispatch(addState(4))}
            className=" bg-gray-200 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mr-1" />{" "}
            Back home
          </button>
        </Link>
        <Link to={"/preview"}>
          <button className=" bg-indigo-600 text-sm  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
            Preview <FontAwesomeIcon icon={faEye} size="sm" className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SkillsForm;
