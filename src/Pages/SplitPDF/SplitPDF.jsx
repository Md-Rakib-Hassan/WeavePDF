import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SplitPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  // Execute when user select a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    setSelectedFile(fileList);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const fileList = event.dataTransfer.files;
    setSelectedFile(fileList);
    console.log(fileList);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="p-12 pt-0  text-center min-h-screen"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="p-12 pt-0  text-center ">
        <div className="bg-[#ecf4fa] py-12 ">
          <h1 className="text-4xl font-semibold text-[#33333b]">
            PDF Splitter
          </h1>
          <p className="mt-4 mb-8 text-[#47474f] text-xl max-w-4xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
            excepturi fugiat molestias aperiam mollitia distinctio ducimus iste
            repellendus quasi debitis!
          </p>
          <div className="outline-2 outline-dashed outline-[#ccc] bg-[#52ab98] rounded-lg p-5 w-fit mx-auto text-center cursor-pointer">
            <label
              htmlFor="pdf-input"
              className="custom-file-input-label text-white text-xl font-semibold"
            >
              {selectedFile ? selectedFile[0].name : "Choose PDF File"}
            </label>
            <input
              type="file"
              id="pdf-input"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={onFileSelected}
            />
          </div>
          <p>or Drag PDF here</p>
          {selectedFile && (
            <button
              onClick={() =>
                navigate("/splitting-page", { state: selectedFile })
              }
              className="text-grey text-xl font-medium w-fit mx-auto rounded bg-aqua_marine px-10 py-4 mt-8"
            >
              {" "}
              Split
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitPDF;
