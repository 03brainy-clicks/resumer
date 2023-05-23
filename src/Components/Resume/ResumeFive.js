import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

const ResumeFive = () => {
  const document = useSelector((state) => state.document.document);
  const userDetails = useSelector((state) => state.userDetails.details);
  const contact = useSelector((state) => state.contact.contact);
  const experience = useSelector((state) => state.experience.experience);
  const education = useSelector((state) => state.education.education);
  const skills = useSelector((state) => state.skills.skills);
  const pdfRef = useRef(null);

  const style = {
    color: document?.textColor,
  };
  const style2 = {
    backgroundColor: document?.backgroundColor,
  };

  

  return (
    <>
      <div
        className="flex text-gray-700 w-full h-full card p-7 "
        style={style}
        ref={pdfRef}
      >
        {/* <div
        className="flex text-gray-700 w-full card min-w-[38rem] max-w-[38rem] min-h-[53rem] max-h-[53rem]"
        style={style}
      > */}
        <div
          className={`w-2/5  p-4 gap-7 flex flex-col bg-pink-50  `}
          style={style2}
        >
          {/* image  */}
          <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="w-full"
            />
          </div>
          {/* contact  */}
          <div className="flex flex-col gap-4">
            {contact ? (
              <h4 className="font-bold uppercase pb-2 border-b-2 border-gray-500">
                Contact
              </h4>
            ) : (
              ""
            )}
            <div className="flex gap-1 justify-center">
              {contact?.linkedin ? (
                <a href={contact.linkedin}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="sm"
                    className="mr-1"
                  />
                </a>
              ) : (
                " "
              )}
              {contact?.instagram ? (
                <a href={contact.instagram}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="sm"
                    className="mr-1"
                  />
                </a>
              ) : (
                " "
              )}{" "}
              {contact?.facebook ? (
                <a href={contact.facebook}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="sm"
                    className="mr-1"
                  />
                </a>
              ) : (
                " "
              )}
              {contact?.twitter ? (
                <a href={contact.twitter}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="sm"
                    className="mr-1"
                  />
                </a>
              ) : (
                " "
              )}
            </div>
            <ul className="space-y-1 text-xs list-outside">
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
