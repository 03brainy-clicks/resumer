import React from "react";
import LoaderAnime from "../assets/loader.gif"

const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div role="status">
    <img src={LoaderAnime} alt="" className="w-56 h-56 rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
