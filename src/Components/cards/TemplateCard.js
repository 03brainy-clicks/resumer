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
      className="card p-5 basis-[18%] cursor-pointer min-w-[200px]" data-aos="fade-up"
      data-aos-duration="2000"
      onClick={handleCreate}
    >
      <div className="mx-auto overflow-hidden">
        <img src={data.resumeNo} alt="" className="w-full mx-auto" />
      </div>
    </div>
  );
};

export default TemplateCard;
