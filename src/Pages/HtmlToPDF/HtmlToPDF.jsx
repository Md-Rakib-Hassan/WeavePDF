import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const HtmlToPDF = () => {
  const axiosPublic = useAxiosPublic();
  const [url, setUrl] = useState("");
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const convertToPDF = async () => {
    try {
      setIsLoading(true);
      const response = await axiosPublic.post(
        "/convertToPDF",
        { url },
        { responseType: "blob" }
      );
      setPdfBlob(response.data);
    } catch (error) {
      console.error("Error converting URL to PDF", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="hero min-h-[40vh] bg-[#43434b]">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-center text-2xl font-bold text-white">
              Add Web addresses to convert PDF
            </h1>
            <div className="my-5">
              <input
                className="input input-bordered input-lg w-full max-w-md"
                type="text"
                placeholder="Ex: https://www.w3schools.com/"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <br />
              <button className="buttonProject3 my-5" onClick={convertToPDF}>
                Convert to PDF
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        {isLoading && <progress className="progress w-56"></progress>}
        {pdfBlob && (
          <iframe
            className="rounded-2xl"
            title="PDF Preview"
            src={URL.createObjectURL(pdfBlob)}
            width="70%"
            height="700px"
          />
        )}
      </div>
    </div>
  );
};

export default HtmlToPDF;
