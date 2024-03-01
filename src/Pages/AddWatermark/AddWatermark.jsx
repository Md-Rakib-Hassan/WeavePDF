import { useState } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddWatermark = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [file, setFile] = useState(null);
  const [watermarkText, setWatermarkText] = useState("");
  const [watermarkSize, setWatermarkSize] = useState(50);
  const [watermarkColor, setWatermarkColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const [rotationAngle, setRotationAngle] = useState(0);
  const [modifiedPdfUrl, setModifiedPdfUrl] = useState("");
  const handlePost = () => {
    const date = new Date();
    const user_email = user.email;
    const no_of_files = 1;
    const service_name = "Add Watermark";
    const status = true;

    const service = { date, user_email, no_of_files, service_name, status };
    axiosPublic.post("/upload-service", service);
    // setIsOn(true);
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleWatermarkTextChange = (event) => {
    setWatermarkText(event.target.value);
    console.log(watermarkText.length);
  };

  const handleWatermarkSizeChange = (event) => {
    setWatermarkSize(parseInt(event.target.value));
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    const [r, g, b] = color
      .substring(1)
      .match(/.{1,2}/g)
      .map((val) => parseInt(val, 16) / 255);
    setWatermarkColor({ r, g, b });
  };

  const handleRotationChange = (event) => {
    setRotationAngle(parseInt(event.target.value));
  };

  const addWatermark = async () => {
    if (!file) {
      alert("Please upload a PDF file.");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = async (event) => {
      const pdfBytes = new Uint8Array(event.target.result);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
  
      pages.forEach((page) => {
        const { width, height } = page.getSize();
  
        const fontSizeInPoints = watermarkSize;
        const textWidth = watermarkText.length * (fontSizeInPoints / 2);
        const textHeight = fontSizeInPoints;
  
        // Calculate the position of the watermark after rotation
        const centerX = width / 2;
        const centerY = height / 2;
        const rotationRad = rotationAngle * (Math.PI / 180);
  
        // Calculate the dimensions of the rotated watermark
        const rotatedWidth = Math.abs(Math.cos(rotationRad) * textWidth) + Math.abs(Math.sin(rotationRad) * textHeight);
        const rotatedHeight = Math.abs(Math.sin(rotationRad) * textWidth) + Math.abs(Math.cos(rotationRad) * textHeight);
  
        // Ensure the watermark remains within the page bounds after rotation
        const maxRotatedWidth = width;
        const maxRotatedHeight = height;
  
        // Calculate the final position of the watermark to keep it centered
        const finalX = Math.min(Math.max(centerX - rotatedWidth / 2, 0), maxRotatedWidth - rotatedWidth);
        const finalY = Math.min(Math.max(centerY - rotatedHeight / 2, 0), maxRotatedHeight - rotatedHeight);
  
        page.drawText(watermarkText, {
          x: finalX,
          y: finalY,
          size: watermarkSize,
          color: rgb(watermarkColor.r, watermarkColor.g, watermarkColor.b),
          opacity: 0.5,
          rotate: degrees(rotationAngle),
        });
      });
  
      const modifiedPdfBytes = await pdfDoc.save();
      const modifiedPdfUrl = URL.createObjectURL(
        new Blob([modifiedPdfBytes], { type: "application/pdf" })
      );
      setModifiedPdfUrl(modifiedPdfUrl);
      handlePost();
    };
  
    reader.readAsArrayBuffer(file);
  };
  
  
  
  
  

  return (
    <div className="py-16 ">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h2 className="text-center text-5xl font-semibold text-teal">
          Add Watermark to PDF
        </h2>
        <div className="outline-2 outline-dashed outline-[#ccc] bg-[#52ab98] rounded-lg p-5 w-fit mx-auto text-center cursor-pointer">
          <label
            htmlFor="pdf-input"
            className="custom-file-input-label text-white text-sm lg:text-xl font-semibold"
          >
            {file ? file?.name : "Choose PDF File"}
          </label>
          <input
            type="file"
            id="pdf-input"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-fit mx-auto  p-10 rounded-md shadow-sm shadow-teal bg-base-300">
          <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-3">
            <label className="text-xl font-semibold text-teal mr-1">
              Text:
            </label>
            <input
              type="text"
              className="w-fit text-sm lg:text-2xl font-medium border-2 text-aqua_marine py-2 h-fit border-aqua_marine e  rounded-md focus:outline-none"
              value={watermarkText}
              onChange={handleWatermarkTextChange}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-semibold text-teal mr-1">
              Text Size:
            </label>
            <input
              type="number"
              className="text-sm w-20 border-2 lg:text-2xl font-medium text-aqua_marine py-2 h-fit border-aqua_marine e  rounded-md focus:outline-none"
              value={watermarkSize}
              onChange={handleWatermarkSizeChange}
              min={1}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-semibold text-teal mr-1">
              Text Color:
            </label>
            <input
              type="color"
              className="border  border-aqua_marine e  rounded focus:outline-none"
              value={`#${Math.floor(watermarkColor.r * 255)
                .toString(16)
                .padStart(2, "0")}${Math.floor(watermarkColor.g * 255)
                .toString(16)
                .padStart(2, "0")}${Math.floor(watermarkColor.b * 255)
                .toString(16)
                .padStart(2, "0")}`}
              onChange={handleColorChange}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <label className="text-xl font-semibold text-teal mr-1">
              Rotation Angle:
            </label>
            <input
              type="number"
              className="text-sm w-20 border-2 lg:text-2xl font-medium text-aqua_marine py-2 h-fit border-aqua_marine e  rounded-md focus:outline-none"
              value={rotationAngle}
              onChange={handleRotationChange}
              max={60}
              min={-60}
            />
          </div>
        </div>
        <div>
          <button
            className="px-8 py-5 bg-teal text-white rounded text-lg"
            onClick={addWatermark}
          >
            Add Watermark
          </button>
        </div>
      </div>

      {modifiedPdfUrl && (
        <div className="flex justify-center mt-10">
          {/* <h3>Modified PDF with Watermark</h3>
          <iframe
            src={modifiedPdfUrl}
            width="100%"
            height="600px"
            title="Modified PDF"
          ></iframe> */}
          <a
            href={modifiedPdfUrl}
            className="px-8 py-5  bg-teal text-white rounded text-lg"
            download="modified_pdf_with_watermark.pdf"
          >
            Download Modified PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default AddWatermark;
