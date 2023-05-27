import React, { useRef, useState } from "react";
import Resume from "../Components/Resume/Index";
import downloadComponentAsPDF from "../utils/PdfDownload";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BlockPicker } from "react-color";
import { addDocument } from "../Redux/Slice/DocumentSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.Config";
import { resetAllStoreAfterSave } from "../utils/FirebaseFunction";
import { addFiles } from "../Redux/Slice/FilesSlice";
import { v4 as uuidv4 } from "uuid";

const Preview = () => {
  const files = useSelector((state) => state.files.files);
  const cred = useSelector((state) => state.user.cred);
  const document = useSelector((state) => state.document.document);
  const userdetails = useSelector((state) => state.userDetails.details);
  const contact = useSelector((state) => state.contact.contact);
  const experience = useSelector((state) => state.experience.experience);
  const education = useSelector((state) => state.education.education);
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Component = Resume(document?.template);
  const resumeRef = useRef();

  const handleDownloadCover = () => {
    downloadComponentAsPDF(resumeRef);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      uid: uuidv4(),
      document,
      userdetails,
      contact,
      experience,
      education,
      skills,
    };
    console.table(data)
    await setDoc(doc(db, "userFiles", cred.uid), {
      files: [data, ...files],
    })
      .then((res) => {
        let datas = [data, ...files];
        dispatch(addFiles(datas));
        resetAllStoreAfterSave(dispatch);
        navigate("/home");
        toast.success("Save success");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="lg:w-9/12 w-10/12 mx-auto text-gray-700 py-12 flex gap-5 justify-center h-min-[100vh]">
        <div className="flex-1 h-full">
          <div
            className="mx-auto w-[37.205rem] min-h-[52.618rem] "
            ref={resumeRef}
          >
            <Component />
          </div>
        </div>
        <div className=" w-[400px]  p-7 bg-white gap-12 flex flex-col">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h3 className="text-2xl font-bold text-center  bg-white ">
              Here's your Resume!{" "}
            </h3>
            <p className="text-center text-sm text-gray-500 mt-3">
              What do you want to do next ?
            </p>
          </div>
          <div>
            <h4
              className="text-lg font-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Document Options
            </h4>
            <div
              className="flex flex-col gap-3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-sm w-full  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
              >
                Save
              </button>{" "}
              <button
                onClick={handleDownloadCover}
                className="bg-gray-100 text-sm w-full font-medium rounded-sm  transition duration-200 ease-in-out py-2 px-5 hover:bg-gray-200"
              >
                Download
              </button>{" "}
              <Link to="/editor/document">
                <button className="bg-gray-100 text-sm w-full font-medium  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-200">
                  Back To Edit
                </button>{" "}
              </Link>
            </div>
          </div>{" "}
          <div>
            <DocumentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className=" text-gray-700 mb-5 flex flex-col  justify-between ">
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
              className="py-2 px-2 bg-gray-100 rounded-sm  text-sm  mt-1 w-full outline-none  "
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
              className="bg-indigo-600 text-sm w-full  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preview;
