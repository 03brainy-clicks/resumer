import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import Resume1 from "../assets/resumes/1.webp";
import Resume2 from "../assets/resumes/2.webp";
import Resume3 from "../assets/resumes/3.webp";
import Resume4 from "../assets/resumes/4.webp";
import Resume5 from "../assets/resumes/5.webp";
import TemplateCard from "../Components/cards/TemplateCard";
import DocumentCard from "../Components/cards/DocumentCard";
import { Link } from "react-router-dom";
import { addDocument } from "../Redux/Slice/DocumentSlice";
import Loader from "../Components/Loader";


const HomePage = () => {
  const userData = useSelector((state) => state.user.cred);
  const files = useSelector((state) => state.files.files);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) return <Loader />;
  
  const handleCreate = () => {
    dispatch(
      addDocument({
        documentName: "Resume",
        template: "Resume-5",
        textColor: "#121212",
        backgroundColor: "#F8EEE6",
      })
    );
  };
  const templates = [
    {
      resumeNo: Resume1,
      template: "Resume-1",
      textColor: "#121212",
      backgroundColor: "#CAE6EF",
    },
    {
      resumeNo: Resume2,
      template: "Resume-2",
      textColor: "#121212",
      backgroundColor: "#121212",
    },
    {
      resumeNo: Resume3,
      template: "Resume-3",
      textColor: "#121212",
      backgroundColor: "#020323",
    },
    {
      resumeNo: Resume4,
      template: "Resume-4",
      textColor: "#121212",
      backgroundColor: "#030d54",
    },
    {
      resumeNo: Resume5,
      template: "Resume-5",
      textColor: "#121212",
      backgroundColor: "#F8EEE6",
    },
  ];

  return (
    <>
      <Navigation />
      <div>
        <div className="lg:w-9/12 w-10/12 mx-auto py-10 flex flex-col gap-11">
          <div
            className="flex gap-10 p-24 bg-indigo-600 text-white rounded"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <h3 className="text-3xl font-bold ">
                Hello,{" "}
                <span className="capitalize">
                  {userData?.email?.split("@")[0]}!
                </span>
              </h3>
              <p
                className="text-gary-400 text-lg font-medium"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1000" 
              >
                What do you want to create?
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="1000"
              className="text-white bg-white bg-opacity-10  transition duration-500 hover:bg-opacity-20 cursor-pointer py-2 px-5 rounded  flex items-center gap-3"
            >
              <div>
                {" "}
                <FontAwesomeIcon icon={faFile} className="white" />
              </div>
              <Link to="/editor/document">
                <div onClick={handleCreate}>
                  <h5 className="font-semibold">Create Resume</h5>
                  <p className="text-xs">Create from scratch</p>
                </div>
              </Link>
            </div>
          </div>
          <hr />

          {files?.length > 0 ? (
            <>
              {" "}
              <div>
                <h3 className="text-xl font-bold ">Your Documents</h3>
                <div className="mt-5 flex gap-7 flex-wrap">
                  {files.map((item, index) => {
                    return (
                      <DocumentCard
                        resumeNumber={item.resumeNo}
                        key={item.uid}
                        data={item}
                      />
                    );
                  })}{" "}
                </div>
              </div>{" "}
            </>
          ) : (
            ""
          )}

          <div>
            <h3 className="text-xl font-bold ">Templates</h3>
            <div className="mt-5 flex gap-7 flex-wrap">
              {templates.map((item, index) => {
                return <TemplateCard data={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
