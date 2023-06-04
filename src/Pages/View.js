import React, { useRef } from "react";
import Resume from "../Components/Resume/Index";
import downloadComponentAsPDF from "../utils/PdfDownload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetAllStoreAfterSave } from "../utils/FirebaseFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.Config";
import { addFiles } from "../Redux/Slice/FilesSlice";

const View = () => {
  const { id } = useParams();
  const cred = useSelector((state) => state.user.cred);
  const files = useSelector((state) => state.files.files);
  const document = useSelector((state) => state.document.document);
  const userDetails = useSelector((state) => state.userDetails.details);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Component = Resume(document?.template);
  const resumeRef = useRef();

  const handleDownloadCover = () => {
    downloadComponentAsPDF(resumeRef,userDetails?.image);
  };

  const handleBack = (e) => {
    resetAllStoreAfterSave(dispatch);
    navigate("/home");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const filteredArray = files.filter((item) => item.uid !== id);
    await setDoc(doc(db, "userFiles", cred.uid), {
      files: [...filteredArray],
    })
      .then((res) => {
        dispatch(addFiles([...filteredArray]));
        resetAllStoreAfterSave(dispatch);
        navigate("/home");
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
                onClick={handleDownloadCover}
                className="bg-indigo-600 text-sm w-full  rounded  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
              >
                Download{" "}
                <FontAwesomeIcon icon={faDownload} size="sm" className="ml-1" />
              </button>{" "}
              <button
                onClick={handleBack}
                className="bg-gray-100 text-sm w-full font-medium  rounded  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-200"
              >
                Back
              </button>{" "}
              <button
                onClick={handleDelete}
                className="bg-gray-100 text-sm w-full font-medium  rounded  transition duration-200 ease-in-out py-2 px-5 hover:text-white hover:bg-red-500"
              >
                Delete
              </button>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default View;
