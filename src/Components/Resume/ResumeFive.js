import {
  faEnvelope,
  faGlobe,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const ResumeFive = ({ data }) => {
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
        className="flex text-gray-700 w-full min-h-[52.618rem] card resume-5"
        style={style}
      >
        <div
          className={`w-2/5  p-5 gap-7 flex flex-col bg-pink-50  `}
          style={style2}
        >
          {/* image  */}
          {userDetails?.image ? (
            <div className="w-32 h-32 rounded mx-auto overflow-hidden border flex items-center  justify-center">
              <img src={`${userDetails?.image}`} alt="" className="object-fit" />
            </div>
          ) : (
            ""
          )}
          {/* contact  */}
          <div className="flex flex-col gap-4">
            {contact?.length > 0 ? (
              <h4 className="font-bold uppercase pb-2 border-b-2 border-gray-500">
                Contact
              </h4>
            ) : (
              ""
            )}
            <ul className="space-y-2 text-xs list-outside">
              {contact?.phone ? (
                <li className="lowercase">
                  <FontAwesomeIcon icon={faPhone} size="sm" className="mr-1" />{" "}
                  {contact.phone}
                </li>
              ) : (
                ""
              )}
              {contact?.email ? (
                <li className="lowercase truncate ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="sm"
                    className="mr-1"
                  />{" "}
                  {contact.email}
                </li>
              ) : (
                ""
              )}
              {contact?.website ? (
                <li className="lowercase">
                  <FontAwesomeIcon icon={faGlobe} size="sm" className="mr-1" />{" "}
                  {contact.website}
                </li>
              ) : (
                ""
              )}

              {contact?.address ? (
                <li className=" ">
                  <FontAwesomeIcon icon={faHome} size="sm" className="mr-1" />
                  {contact.address}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>

          {/* skills  */}
          {skills?.length > 0 ? (
            <div className="flex flex-col gap-4">
              <h4 className="font-bold pb-2 border-b-2 border-gray-500 uppercase">
                Skills
              </h4>
              <ul className="ml-4 space-y-1 list-disc list-outside text-xs">
                {skills.map((item) => {
                  return <li key={item.id}>{item.skill}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* side second  */}
        <div className="w-3/5 p-5 gap-7 flex flex-col bg-white">
          {/* heading   */}
          <div>
            <h2 className="text-3xl uppercase font-bold">
              {userDetails?.name}
            </h2>
            <p className="text-lg uppercase font-bold">
              {userDetails?.designation}
            </p>
          </div>

          {/* about  */}
          {userDetails?.about ? (
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase pb-2 border-b-2 border-gray-500">
                Professional Experience
              </h4>
              <p className="text-xs">{userDetails?.about}</p>
            </div>
          ) : (
            ""
          )}

          {/* experience */}
          {experience?.length > 0 ? (
            <>
              <div className="flex flex-col gap-4">
                <h4 className="font-bold uppercase pb-2 border-b-2 border-gray-500">
                  Work Experience
                </h4>
                <div className="flex flex-col gap-3">
                  {experience.map((item) => {
                    return (
                      <div className="flex flex-col gap-1" key={item.id}>
                        <h5 className="font-semibold text-sm">
                          {" "}
                          {item.designation}
                        </h5>
                        <h6 className="text-xs font-medium">
                          {" "}
                          {item.company}, {item.start} - {item.end}
                        </h6>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* education  */}
          {education?.length > 0 ? (
            <div className="flex flex-col gap-4">
              <h4 className="font-bold uppercase pb-2 border-b-2 border-gray-500">
                Education
              </h4>
              <div className="flex flex-col gap-3">
                {education.map((item) => {
                  return (
                    <div className="flex flex-col gap-1" key={item.id}>
                      <h5 className="font-semibold text-sm"> {item.degree}</h5>
                      <h6 className="text-xs font-medium ">{item.school}</h6>
                      <p className="text-xs">
                        {item.start} - {item.end}
                      </p>
                    </div>
                  );
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

export default ResumeFive;
