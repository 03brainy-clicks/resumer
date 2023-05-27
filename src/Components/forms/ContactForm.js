import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact } from "../../Redux/Slice/ContactSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);

  const [email, setEmail] = useState(contact?.email);
  const [phone, setPhone] = useState(contact?.phone);
  const [website, setWebsite] = useState(contact?.website);
  const [address, setAddress] = useState(contact?.address);

  const handleContact = (e) => {
    e.preventDefault();
    const data = {
      email,
      phone,
      website,
      address,
    };
    dispatch(addContact(data));
    toast.success("Contact set");
  };

  return (
    <div className=" text-gray-700  mb-5 flex flex-col  justify-between min-h-[75vh]  ">
      {/* contact details  */}
      <div>
        <h4
          className="text-xl font-bold"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tell us about your contact details
        </h4>
        <form
          method="POST"
          className="flex gap-3 flex-col  mt-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <div className="w-full ">
            <label htmlFor="Email" className="text-sm font-medium">
              Email
            </label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            />
          </div>
          <div className="w-full ">
            <label htmlFor="Phone Number" className="text-sm font-medium">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxlength="10"
              placeholder="Phone Number"
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            />
          </div>{" "}
          <div className="w-full ">
            <label htmlFor="Website" className="text-sm font-medium">
              Website
            </label>
            <br />
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Website"
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            />
          </div>
          <div className="w-full ">
            <label htmlFor="Address" className="text-sm font-medium">
              Address
            </label>
            <br />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
            />
          </div>{" "}
          <div className="">
            <button
              onClick={handleContact}
              className="bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-11 justify-between">
        <Link to={"/editor/userdetails"}>
          <button className=" bg-gray-200 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
          <FontAwesomeIcon icon={faArrowLeft } size="sm" className="mr-1"/>  Back 
          </button>
        </Link>
        <Link to={"/editor/experience"}>
          <button className=" bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
          Next <FontAwesomeIcon icon={faArrowRight}  size="sm" className="ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
