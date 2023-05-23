import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact } from "../../Redux/Slice/ContactSlice";
import { toast } from "react-toastify";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);

  const [email, setEmail] = useState(contact?.email);
  const [phone, setPhone] = useState(contact?.phone);
  const [website, setWebsite] = useState(contact?.website);
  const [address, setAddress] = useState(contact?.address);
  const [linkedin, setLinkedin] = useState(contact?.linkedin);
  const [instagram, setInstagram] = useState(contact?.instagram);
  const [twitter, setTwitter] = useState(contact?.twitter);
  const [facebook, setFacebook] = useState(contact?.facebook);

  const handleContact = (e) => {
    e.preventDefault();
    const data = {
      email,
      phone,
      website,
      address,
      linkedin,
      facebook,
      instagram,
      twitter,
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
          <div className="w-full ">
            <label htmlFor="Social Links" className="text-sm font-medium">
              Social Links
            </label>
            <br />
            <div className="lg:flex gap-3 ">
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="Linkedin"
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />{" "}
              <input
                type="text"
                placeholder="Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />{" "}
              <input
                type="text"
                placeholder="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />{" "}
              <input
                type="text"
                placeholder="Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="py-2 px-2 bg-indigo-50 rounded-sm  text-sm  mt-1 w-full outline-none  "
              />
            </div>
          </div>
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
            Back
          </button>
        </Link>
        <Link to={"/editor/experience"}>
          <button className=" bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
