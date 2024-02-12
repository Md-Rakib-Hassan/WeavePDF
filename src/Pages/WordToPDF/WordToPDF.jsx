import { useState } from "react";
import Swal from "sweetalert2";
import mammoth from "mammoth";
import html2pdf from "html2pdf.js";

const WordToPDF = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    try {
      if (!file) {
        Swal.fire({
          icon: "warning",
          title: "Please select a file to convert.",
        });
        return;
      }

      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const result = event.target.result;

          // Convert DOC to HTML using mammoth
          const { value } = await mammoth.extractRawText({ arrayBuffer: result });

          // Create a temporary div to hold the HTML content
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = value;

          // Convert HTML to PDF using html2pdf
          const pdfBlob = await html2pdf(tempDiv);

          // Create a download link for the PDF
          const url = window.URL.createObjectURL(pdfBlob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "converted_document.pdf");
          document.body.appendChild(link);
          link.click();
        } catch (error) {
          console.error("Successfully converting file:", error);
          Swal.fire({
            icon: "success",
            title: "Successfully download converting file",
          });
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error handling file:", error);
      Swal.fire({
        icon: "success",
        title: "Error handling file",
      });
    }
  };

  return (
    <div className="container mx-auto bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl py-10 font-extrabold">
          Convert your DOC File into PDF
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="relative max-w-lg m-20 p-14 bg-blue rounded-md shadow-md">
          <label
            htmlFor="example1"
            className="mb-2 block text-xl font-medium text-gray-700"
          >
            Upload file
          </label>
          <input
            id="example1"
            type="file"
            onChange={handleFileChange}
            className="w-full text-base rounded-md border-0 bg-teal-500 py-2 px-4 text-black font-bold focus:outline-none hover:bg-teal-700"
          />
          <div className="flex pt-8 justify-end">
            <button
              onClick={handleConvert}
              className="btn text-xl m-3 bg-[#52ab98] text-white"
            >
              Convert to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordToPDF;