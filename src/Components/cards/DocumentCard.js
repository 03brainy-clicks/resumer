import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  addAllValueToStore,
  resetAllStoreAfterSave,
} from "../../utils/FirebaseFunction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Resume from "../Resume/Index";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase.Config";
import { addFiles } from "../../Redux/Slice/FilesSlice";

const DocumentCard = ({ resumeNumber, data }) => {
  const files = useSelector((state) => state.files.files);
  const cred = useSelector((state) => state.user.cred);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Component = Resume(data?.document?.template);

  const handleView = (e) => {
    e.preventDefault();
    addAllValueToStore(dispatch, data);
    navigate(`/view/${data.uid}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const filteredArray = files.filter((item) => item.uid !== data?.uid);
    await setDoc(doc(db, "userFiles", cred.uid), {
      files: [...filteredArray],
    })
      .then((res) => {
        dispatch(addFiles([...filteredArray]));
        resetAllStoreAfterSave(dispatch);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className="card p-5 basis-[18%] min-w-[200px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="mx-auto h-36 overflow-hidden">
        {data?.userdetails?.image ?   <img
            src={`${data?.userdetails?.image}`}
            alt=""
            className="w-full mx-auto"
          /> : <div className="w-full h-full flex items-center justify-center">
             <h3 className="text-xl font-semibold">
            Resumer<span className="text-indigo-500">.</span>{" "}
          </h3>
          </div>   }
        </div> 
        <div className="mt-5">
          <h5 className="font-semibold">
            {data?.userdetails?.name
              ? data?.userdetails?.name
              : data?.document?.documentName}
          </h5>
          <p className="text-xs text-gray-400">
            {data?.userdetails?.designation
              ? data?.userdetails?.designation
              : "A4"}
          </p>
        </div>
        <div className="mt-3 flex gap-1 flex-col">
          <button
            onClick={handleView}
            className="bg-indigo-600 text-sm   rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
          >
            View <FontAwesomeIcon icon={faEye} className="mr-1" size="sm" />
          </button>{" "}
          <button
            onClick={handleDelete}
            className="bg-gray-200 text-gray-700 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:text-white  hover:bg-red-500"
          >
            Delete
            <FontAwesomeIcon icon={faTrash} className="ml-1" size="sm" />
          </button>
        </div>
      </div>
      <div className="hidden">
        <Component />
      </div>
    </>
  );
};

export default DocumentCard;
