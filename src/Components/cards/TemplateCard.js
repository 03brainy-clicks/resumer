import React from "react";
import { useDispatch } from "react-redux";
import { addDocument } from "../../Redux/Slice/DocumentSlice";
import { useNavigate } from "react-router-dom";

const TemplateCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      addDocument({
        documentName: data.template,
        template: data.template,
        textColor: data.textColor,
        backgroundColor: data.backgroundColor,
      })
    );
    navigate("/editor/document");
  };
  return (
    <div
      className="card p-5 basis-[18%] min-w-[200px] relative rounded"
      data-aos="fade-up"
      data-aos-duration="2000"
      onClick={handleCreate}
    >
      <div className="mx-auto overflow-hidden">
        <img src={data.resumeNo} alt="" className="w-full mx-auto" />
      </div>
      <div className="absolute top-0 z-10 p-5 w-full left-0 rounded bg-indigo-600 transition duration-1000 ease-in-out opacity-0 hover:opacity-100 h-full flex items-center justify-center">
        <div className="mt-3 flex gap-3 flex-col w-full">
          <button
            onClick={handleCreate}
            className="text-white bg-white bg-opacity-10  transition duration-500 hover:bg-opacity-20 cursor-pointer text-sm   rounded  ease-in-out py-2 px-5  "
          >
            Create
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
