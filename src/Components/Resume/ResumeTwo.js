import React from "react";
import { useSelector } from "react-redux";

const ResumeTwo = ({ data }) => {
  const document = useSelector((state) => state.document.document);
  const userDetails = useSelector((state) => state.userDetails.details);
  const contact = useSelector((state) => state.contact.contact);
  const experience = useSelector((state) => state.experience.experience);
  const education = useSelector((state) => state.education.education);
  const skills = useSelector((state) => state.skills.skills);

  const style = {
    color: document?.textColor,
  };

  return (
    <>
      <div className="flex">
        <div
          className=" text-gray-700 flex flex-col  w-full min-h-[52.618rem] card p-7 gap-5 "
          style={style}
        >
          {/* header  */}
          <div className="flex gap-5 justify-between items-center">
            <div className="flex-1 flex flex-col gap-3">
              <div>
                <h2 className="text-2xl font-semibold"> {userDetails?.name}</h2>
                <span className="text-lg font-medium ">
                  {userDetails?.designation}
                </span>{" "}
                <br />
              </div>
              <ul className="space-y-2 text-xs flex flex-col gap-2 list-outside">
                <div className="flex ">
                  {contact?.phone ? (
                    <li className="lowercase flex-1">{contact.phone}</li>
                  ) : (
                    ""
                  )}
                  {contact?.email ? (
                    <li className="lowercase flex-1 truncate ">
                      {contact.email}
                    </li>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex">
                  {contact?.website ? (
                    <li className="lowercase flex-1">{contact.website}</li>
                  ) : (
                    ""
                  )}

                  {contact?.address ? (
                    <li className="  flex-1">{contact.address}</li>
                  ) : (
                    ""
                  )}
                </div>
              </ul>
            </div>
            {/* image  */}
            {userDetails?.image ? (
              <div className="w-32 h-32 rounded mx-auto overflow-hidden border flex items-center  justify-center">
                <img
                  src={`${userDetails?.image}`}
                  alt=""
                  className="object-fit"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {/* about  */}
          {userDetails?.about ? (
            <div>
              <h3 className="text-lg font-semibold">About me</h3>
              <p className="text-xs mt-3">{userDetails?.about}</p>
            </div>
          ) : (
            ""
          )}
          {/* experience  */}
          {experience?.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              <div className="text-xs mt-3 flex flex-col gap-3">
                {experience.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex justify-between">
                        <h6 className="text-sm font-medium mb-0">
                          {" "}
                          {item.designation}{" "}
                        </h6>
                        <span>
                          {" "}
                          {item.start} - {item.end}
                        </span>
                      </div>
                      <span className="text-xs font-medium">
                        {" "}
                        {item.company}
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
          {/* education  */}
          {education?.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="flex flex-col gap-3 mt-3">
                {education.map((item) => {
                  return (
                    <div>
                      <div className="flex justify-between" key={item.id}>
                        <h6 className="text-sm font-medium mb-0">
                          {" "}
                          {item.degree}
                        </h6>
                        <span className="text-xs">
                          {" "}
                          {item.start} - {item.end}
                        </span>
                      </div>
                      <span className="text-xs font-medium">{item.school}</span>
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
            <div>
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="flex gap-5 text-xs mt-3 ">
                {skills.map((item) => {
                  return <div key={item.id}>{item.skill}</div>;
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ResumeTwo;
