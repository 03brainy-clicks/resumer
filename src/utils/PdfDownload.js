import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Function to download React component as a perfect PDF cover
const downloadComponentAsPDF = async (componentRef) => {
  const component = componentRef.current;

  // Use html2canvas library to capture the component as an image
  const canvas = await html2canvas(component, {
    scale: 3, // Increase scale for higher resolution
    useCORS: true, // Enable CORS if necessary
  });

  const imgData = canvas.toDataURL("image/png", 1.0);

  // Set the page size to A4
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const pdf = new jsPDF("portrait", "pt", "a4");
  // Calculate the aspect ratio of the component
  const aspectRatio = component.offsetWidth / component.offsetHeight;

  // Calculate the width and height of the image based on the aspect ratio and page size
  let imgWidth, imgHeight;
  if (aspectRatio > 1) {
    imgWidth = pageWidth;
    imgHeight = imgWidth / aspectRatio;
  } else {
    imgHeight = pageHeight;
    imgWidth = imgHeight * aspectRatio;
  }

  // Calculate the center position on the page
  const xPos = (pageWidth - imgWidth) / 2;
  const yPos = 0; // Start from the top of the page
  // Add the captured image to the PDF as a cover page
  pdf.addImage(imgData, "PNG", xPos, yPos, imgWidth, imgHeight);

  // Download the PDF
  pdf.save("component_cover.pdf");
};
export default downloadComponentAsPDF;
