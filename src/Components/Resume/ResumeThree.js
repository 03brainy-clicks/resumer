import React from "react";
import { useSelector } from "react-redux";

const ResumeThree = ({ data }) => {
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
        className=" text-gray-700 flex w-full min-h-[52.618rem] card p-7 gap-7 resume-3"
        style={style}
      >
        <div className="w-2/5 flex flex-col gap-7">
          {/* heading  */}
          <div className="p-5 text-white flex flex-col gap-3" style={style2}>
            {userDetails?.image ? (
              <div className="w-full h-32 rounded mx-auto overflow-hidden flex items-center  justify-center">
                <img
                  src={`${userDetails?.image}`}
                  alt=""
                  className="object-fit"
                />
              </div>
            ) : (
              ""
            )}

            <h2 className="text-2xl font-medium uppercase">
              {userDetails?.name}
            </h2>
            <h5 className="font-medium uppercase">
              {" "}
              {userDetails?.designation}
            </h5>
          </div>
          {/* contact  */}
          {contact ? (
            <div className=" flex flex-col gap-5 px-5 list-outside">
              <h5 className="uppercase font-medium ">Contact</h5>
              <ul className="flex flex-col text-xs gap-1 list-disc ml-4">
                {contact?.phone ? <li>{contact.phone}</li> : ""}
                {contact?.email ? <li>{contact.email}</li> : ""}
                {contact?.address ? <li>{contact.address}</li> : ""}
                {contact?.website ? <li>{contact.website}</li> : ""}
              </ul>
            </div>
          ) : (
            ""
          )}

          {/* skills */}
          {skills?.length > 0 ? (
            <div className=" flex flex-col gap-5 px-5">
              <h5 className="uppercase font-medium ">skills</h5>
              <ul className="flex flex-col text-xs list-disc ml-4 gap-1">
                {skills.map((item) => {
                  return <li key={item.id}>{item.skill}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-3/5 flex flex-col gap-7">
          {/* profile  */}
          {userDetails?.about ? (
            <div className="flex flex-col gap-5 mt-5">
              <h5 className="uppercase font-medium ">Profile</h5>
              <p className="text-xs">{userDetails?.about}</p>
            </div>
          ) : (
            ""
          )}
          {/* Position  */}
          {experience?.length > 0 ? (
            <div className="flex flex-col gap-5">
              <h5 className="uppercase font-medium ">Position</h5>
              <div className="flex flex-col gap-3">
                {experience.map((item) => {
                  return (
                    <div key={item.id}>
                      <h6 className="text-sm font-semibold">
                        {item.designation}
                      </h6>
                      <p className="text-xs font-semibold">
                        {item.company}, {item.start} - {item.end}
                      </p>
                      <p className="text-xs mt-2">{item.description}</p>
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
            <div className="flex flex-col gap-5">
              <h5 className="uppercase font-medium ">Education</h5>
              <div className="flex flex-col gap-3">
                {education.map((item) => {
                  return (
                    <div key={item.id}>
                      <h6 className="text-sm font-semibold">{item.degree}</h6>
                      <p className="text-xs font-semibold">
                        {item.school} | {item.start} - {item.end}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* languages  */}
          {/* <div className=" flex flex-col gap-5 ">
            <h5 className="uppercase font-medium ">Languages</h5>
            <ul className="flex flex-col text-xs list-disc ml-4 gap-1">
              <li>3432423423</li>
              <li>dfdsf@gmail.com</li>
              <li>dsfsdf sdfsdfsds dsdfsdf</li>
              <li>xyz.com</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ResumeThree;
