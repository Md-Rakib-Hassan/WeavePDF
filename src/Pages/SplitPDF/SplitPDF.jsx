import { useState } from "react";



const SplitPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSplitPDF = () => {
    
    if (selectedFile) {
      
      console.log("Splitting PDF:", selectedFile);
    } else {
      console.warn("No PDF file selected");
    }
  };
  

  return (
    <div className="p-12 pt-0  text-center ">
      <div className="bg-[#ecf4fa] py-12">
      <h1 className="text-4xl font-semibold text-[#33333b]">PDF Splitter</h1>
      <p className="mt-4 mb-8 text-[#47474f] text-xl max-w-4xl mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, excepturi fugiat molestias aperiam mollitia distinctio ducimus iste repellendus quasi debitis!</p>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="outline-2 outline-dashed outline-[#ccc] bg-[#52ab98] rounded-lg p-5 w-60 mx-auto text-center cursor-pointer"
      >
        <label htmlFor="pdf-input" className="custom-file-input-label text-white text-xl font-semibold">
          {selectedFile ? selectedFile.name : "Choose PDF File"}
        </label>
        <input
          type="file"
          id="pdf-input"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <p>or Drag PDF here</p>
      {selectedFile && (
        <button onClick={handleSplitPDF} className="text-red-600">
          Split
        </button>
      )}
      </div>
    </div>
  );
};

export default SplitPDF;
