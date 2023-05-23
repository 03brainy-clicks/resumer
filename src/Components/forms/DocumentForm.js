import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDocument } from "../../Redux/Slice/DocumentSlice";
import { toast } from "react-toastify";
import { BlockPicker } from "react-color";

const DocumentForm = () => {
  const dispatch = useDispatch();

  // * document
  const document = useSelector((state) => state.document.document);
  const [documentName, setDocumentName] = useState(document?.documentName);
  const [textColor, setTextColor] = useState(
    document?.textColor ? document?.textColor : "#000000"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    document?.backgroundColor ? document?.backgroundColor : "#ffffff"
  );

  const handleDocument = (e) => {
    e.preventDefault();
    if (documentName) {
      toast.success("Document Set");
      let data = {
        documentName,
        textColor,
        backgroundColor,
      };
      dispatch(addDocument(data));
    }
  };

  //   for changing color of BlockPicker
  const handleChangeText = (color) => {
    setTextColor(color.hex);
  };

  const handleChangeBackground = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div className=" text-gray-700 mb-5 flex flex-col  justify-between min-h-[75vh]">
      {/* document details  */}
      <div>
        <h4
          className="text-xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Document Details
        </h4>
        <form
          className="flex gap-3 flex-col  mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="w-full ">
            <label htmlFor="Document" className="text-sm font-medium">
              Document Name
            </label>
            <br />
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              placeholder="Document Name"
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            />
          </div>
          <div className="w-full flex gap-5 items-center ">
            <div className="flex-1 min-[300px]">
              <label htmlFor="backcolor" className="text-sm font-medium mb-3">
                Text Color
              </label>
              <br />

              <BlockPicker
                className="mt-5"
                color={document?.textColor}
                onChangeComplete={handleChangeText}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="backcolor" className="text-sm font-medium mb-1">
                Background Color
              </label>
              <br />
              <BlockPicker
                className="mt-5 "
                color={document?.backgroundColor}
                onChangeComplete={handleChangeBackground}
              />
            </div>
          </div>
          <div className="mt-1">
            <button
              onClick={handleDocument}
              className="bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-11 justify-between">
        <Link to={"/"}>
          <button className=" bg-gray-200 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
            Back home
          </button>
        </Link>
        <Link to={"/editor/userdetails"}>
          <button className=" bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DocumentForm;
