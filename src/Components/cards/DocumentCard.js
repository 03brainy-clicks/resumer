import React from "react";

const DocumentCard = ({ resumeNumber }) => {
  return (
    <div className="card p-5 basis-[18%] min-w-[200px]" data-aos="fade-up"
    data-aos-duration="2000">
      <div className="mx-auto h-36 overflow-hidden">
        <img src={resumeNumber} alt="" className="w-full mx-auto" />
      </div>
      <div className="mt-5">
        <h5 className="font-semibold">Create Resume</h5>
        <p className="text-xs text-gray-400">Create from scratch</p>
      </div>
      <div className="mt-5 flex gap-1">
        <button className="bg-indigo-600 text-sm w-1/2  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
          Edit
        </button>{" "}
        <button className="bg-gray-300 text-sm w-1/2 rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
