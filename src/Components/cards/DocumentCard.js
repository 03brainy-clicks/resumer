import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  addAllValueToStore,
  resetAllStoreAfterSave,
} from "../../utils/FirebaseFunction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase.Config";
import { addFiles } from "../../Redux/Slice/FilesSlice";

const DocumentCard = ({ data }) => {
  const files = useSelector((state) => state.files.files);
  const cred = useSelector((state) => state.user.cred);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        className="card p-5 basis-[18%] min-w-[200px] relative rounded"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <div className="mx-auto h-36 overflow-hidden">
            {data?.userdetails?.image ? (
              <img
                src={`${data?.userdetails?.image}`}
                alt=""
                className="w-full mx-auto"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <h3 className="text-xl font-semibold">
                  Resumer<span className="text-indigo-500">.</span>{" "}
                </h3>
              </div>
            )}
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
        </div>
        <div className="absolute top-0 z-10 rounded p-5 w-full left-0 bg-indigo-600  transition duration-1000 ease-in-out opacity-0 hover:opacity-100 h-full flex items-center justify-center">
          <div className="mt-3 flex gap-3 flex-col w-full">
            <button
              onClick={handleView}
              className="text-white bg-white bg-opacity-10  transition duration-500 hover:bg-opacity-20 cursor-pointer text-sm   rounded  ease-in-out py-2 px-5  "
            >
              View <FontAwesomeIcon icon={faEye} className="mr-1" size="sm" />
            </button>{" "}
            <button
              onClick={handleDelete}
              className="text-white bg-white bg-opacity-10  transition duration-500 hover:bg-opacity-20 cursor-pointer  text-sm  rounded  ease-in-out py-2 px-5 "
            >
              Delete
              <FontAwesomeIcon icon={faTrash} className="ml-1" size="sm" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentCard;
