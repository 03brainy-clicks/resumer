import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const ResumeOne = ({ data }) => {
  const document = useSelector((state) => state.document.document);
  const userDetails = useSelector((state) => state.userDetails.details);
  const contact = useSelector((state) => state.contact.contact);
  const experience = useSelector((state) => state.experience.experience);
  const education = useSelector((state) => state.education.education);
  const skills = useSelector((state) => state.skills.skills);

  const style = {
    color: document?.textColor,
  };
  const style2 = {
    backgroundColor: document?.backgroundColor,
  };

  return (
    <>
      <div
        className=" text-gray-700 flex flex-col w-full min-h-[52.618rem] card p-7  resume-1"
        style={style}
      >
        {/* header section  */}
        {userDetails?.name ? (
          <>
            <div className="flex border-b  pb-5 gap-5">
              {userDetails?.image ? (
                <div className=" h-32 w-32 bg-gray-200 ">
                  <img
                    src={`${userDetails?.image}`}
                    alt=""
                    className="object-cover"
                  />
                </div>
              ) : (
                ""
              )}
              {userDetails?.name ? (
                <div
                  className="flex-1 p-5 text-white flex items-center justify-center gap-5"
                  style={style2}
                >
                  <div className="flex-1">
                    <h2 className="uppercase text-2xl font-semibold">
                      {userDetails?.name}
                    </h2>
                    <p className="uppercase font-medium text-sm">
                      {" "}
                      {userDetails?.designation}
                    </p>
                  </div>
                  <div className="flex-1">
                    <ul className="flex flex-col justify-between h-full text-xs list-inside gap-1">
                      {contact?.phone ? (
                        <li>
                          {" "}
                          <FontAwesomeIcon
                            icon={faMobilePhone}
                            className="mr-1"
                          />{" "}
                          {contact?.phone}
                        </li>
                      ) : (
                        ""
                      )}
                      {contact?.email ? (
                        <li>
                          {" "}
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mr-1"
                          />{" "}
                          {contact.email}
                        </li>
                      ) : (
                        ""
                      )}
                      {contact?.address ? (
                        <li>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="mr-1"
                          />
                          {contact.address}
                        </li>
                      ) : (
                        ""
                      )}
                      {contact?.website ? (
                        <li>
                          <FontAwesomeIcon icon={faGlobe} className="mr-1" />{" "}
                          {contact.website}
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          ""
        )}
        {/* about me  */}
        {userDetails?.about ? (
          <div className="flex border-b py-5 gap-5 ">
            <div className="w-32">
              <span className="font-bold">About Me</span>
            </div>
            <div className="flex-1">
              <p className="text-xs">{userDetails?.about}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Experience */}
        {experience?.length > 0 ? (
          <div className="flex border-b py-5 gap-5 ">
            <div className="w-32">
              <span className="font-bold">Experience</span>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              {experience.map((item) => {
                return (
                  <div key={item.id}>
                    <h6 className="text-sm font-medium mb-0">
                      {item.designation}
                    </h6>
                    <span className="text-xs">
                      {item.company}, {item.start} - {item.end}
                    </span>
                    <p className="mt-2 text-xs">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* Education*/}
        {education?.length > 0 ? (
          <div className="flex border-b py-5 gap-5 ">
            <div className="w-32">
              <span className="font-bold">Education</span>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              {education.map((item) => {
                return (
                  <div key={item.id}>
                    <h6 className="text-sm font-medium mb-0">{item.degree}</h6>
                    <span className="text-xs"> {item.school}</span> <br />
                    <span className="text-xs">
                      {item.start} - {item.end}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        {/* skills */}
        {skills?.length > 0 ? (
          <div className="flex border-b py-5 gap-5 ">
            <div className="w-32">
              <span className="font-bold">Skills</span>
            </div>
            <div className="flex-1 flex gap-3 flex-wrap text-xs">
              {skills.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="py-1 px-3 rounded text-white"
                    style={style2}
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
    </>
  );
};

export default ResumeOne;
