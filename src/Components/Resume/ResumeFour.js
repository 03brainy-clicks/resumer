import React from "react";
import { useSelector } from "react-redux";

const ResumeFour = ({ data }) => {
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
        className="flex text-gray-700 w-full min-h-[52.618rem] card  p-5"
        style={style2}
      >
        <div className={`w-1/3  p-5 gap-7 flex flex-col`}>
          {/* image  */}
          {userDetails?.image ? (
            <div className="w-32 h-32 rounded-full overflow-hidden border flex items-center  justify-center">
              <img
                src={`${userDetails?.image}`}
                alt=""
                className="object-fit"
              />
            </div>
          ) : (
            ""
          )}
          {/* contact  */}
          <div className="flex flex-col gap-3 mx-5">
            {Object.keys(contact)?.length > 0 ? (
              <h4 className="font-bold  pb-2" style={style}>
                Contact
              </h4>
            ) : (
              ""
            )}
            <ul className="space-y-2 text-xs list-outside">
              {contact?.phone ? (
                <li className="lowercase">
                  <h6 className="text-xs font-medium ">Phone</h6>
                  {contact.phone}
                </li>
              ) : (
                ""
              )}
              {contact?.email ? (
                <li className="lowercase truncate ">
                  <div>
                    {" "}
                    <h6 className="text-xs font-medium ">Email</h6>
                  </div>
                  {contact.email}
                </li>
              ) : (
                ""
              )}
              {contact?.website ? (
                <li className="lowercase">
                  <h6 className="text-xs font-medium ">Website</h6>
                  {contact.website}
                </li>
              ) : (
                ""
              )}

              {contact?.address ? <li className=" ">{contact.address}</li> : ""}
            </ul>
          </div>

          {/* skills  */}
          {skills?.length > 0 ? (
            <div className="flex flex-col gap-3  mx-5">
              <h4 className="font-bold pb-2   " style={style}>
                Skills
              </h4>
              <ul className="ml-3 space-y-1 list-disc list-outside text-xs">
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
        <div className="w-2/3 p-5 gap-7 flex flex-col ">
          {/* heading   */}
          <div>
            <h2 className="text-3xl font-semibold" style={style}>
              {userDetails?.name}
            </h2>
            <p className=" font-medium ">{userDetails?.designation}</p>
          </div>

          {/* about  */}
          {userDetails?.about ? (
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold" style={style}>
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
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold" style={style}>
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
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold " style={style}>
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

export default ResumeFour;
