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
    <div className=" pt-0  text-center min-h-screen">
      <div className="p-12   text-center bg-blue h-[500px]">
        <div className=" py-12 bg-white w-5/6 mx-auto rounded-lg shadow-lg shadow-blue h-[560px]">
          <h1 className="text-4xl font-semibold text-[#33333b]">
            PDF Splitter
          </h1>
          <p className="mt-4 mb-8 text-[#47474f] text-xl max-w-4xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
            excepturi fugiat molestias aperiam mollitia distinctio ducimus iste
            repellendus quasi debitis!
          </p>
          <section
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-4/5 py-28 mx-auto border-4 border-dashed border-[#52ab98] rounded-lg shadow-md shadow-[#52ab98] "
          >
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default SplitPDF;
