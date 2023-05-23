import React, { useRef } from "react";
import Resume from "../Components/Resume/Index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";


// const Portal = ({ scomponent }) => {
//   return ReactDOM.createPortal(component, document.querySelector("#portal"));
// };

const Preview = () => {
  const printRef = useRef();
  const document = useSelector((state) => state.document.document);
  const Component = Resume(document?.template);
  console.log(Component);

  const handleDownload = () => {
    const content = printRef.current;
    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save("sample.pdf");
      },
      // windowWidth: 793.7007874
    //   html2canvas: { scale: 1 - 0.735 }, // change the scale to whatever number you need
    });
  };


  return (
    <div>
      <div className="lg:w-9/12 w-10/12 mx-auto ">
        <div className="flex justify-between py-5 mb-5">
          <Link to={"/editor/document"}>
            {" "}
            <button className="font-medium text-gray-700 bg-gray-200 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5  hover:bg-gray-300">
              Back Editor
            </button>
          </Link>
          <button
            // onClick={handleDownload}
            onClick={handleDownload}
            className="bg-indigo-600 text-sm  rounded-sm  transition duration-200 ease-in-out py-2 px-5 text-white hover:bg-indigo-800"
          >
            Save and Print
          </button>
        </div>
        <div className=" mx-auto w-[210mm] h-[297mm] bg-red-500" ref={printRef}>
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Preview;
