import React from "react";
import Hero from "../assets/hero.svg";
// import Details from "../assets/details.svg";
// import Save from "../assets/save.svg";
// import Choose from "../assets/choose.svg";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center">
        <Navigation />
        <div className="flex-1 ">
          <div className="lg:w-9/12 w-10/12 mx-auto py-16">
            <h2
              className="text-3xl font-bold text-center "
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Let's <span className="text-indigo-600">create a resume</span> for
              your dream job
            </h2>
            <p
              className="my-5 text-center  lg:w-1/3  w-3/5 mx-auto text-gray-600"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              No more efforts for the best looking resume design choose from the
              best templates we have created for you and just follow the
              instruction
            </p>
            <div
              className="text-center my-5"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <Link to={"/signup"}>
                <button className="bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800">
                  Create Resume for Free
                </button>
              </Link>
            </div>
            <div
              className="lg:w-2/6 md:h-2/3  mx-auto mt-11"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img src={Hero} alt="" />
            </div>
          </div>
        </div>
    <div          data-aos="fade-down"
              data-aos-duration="2000">
    <Footer  />
    </div>
      </div>
    </>
  );
};

export default LandingPage;
