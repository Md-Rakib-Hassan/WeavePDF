import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import "./SplitPDFModal.css";
import JSZip from "jszip";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import usePremium from "../../../hooks/usePremium";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const SplitPDFModal = () => {
  const { user } = useAuth();

  const [initialFile, setInitialFile] = useState(null);
  // const [pdfFileData, setPdfFileData] = useState(null);
  const [splitPdfFiles, setSplitPdfFiles] = useState([]);
  // const [isOn, setIsOn] = useState(false);
  const location = useLocation();
  const { state } = location;
  const axiosPublic = useAxiosPublic();
  const [isPremium] = usePremium();
  console.log(isPremium);
  const navigate = useNavigate();

  useEffect(() => {
    if (state && state?.length > 0) {
      const initialPDFData = URL.createObjectURL(state[0]);
      setInitialFile(initialPDFData);
    }
  }, [state]);

  // ==================== react hook form ------------------------------
  const {
    register: registerTab1,
    handleSubmit: handleSubmitTab1,
    setError: setErrorTab1,
    formState: { errors: errorsTab1 },
  } = useForm();
  const {
    register: registerTab2,
    handleSubmit: handleSubmitTab2,
    setError: setErrorTab2,
    formState: { errors: errorsTab2 },
  } = useForm();

  const handlePost = () => {
    const date = new Date();
    const user_email = user.email;
    const no_of_files = 1;
    const service_name = "Split PDF";
    const status = true;

    const service = { date, user_email, no_of_files, service_name, status };
    axiosPublic.post("/upload-service", service);
    // setIsOn(true);
  };

  // ============================== extraction functions ------------------------

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };
  // =========================== converting the file in iframe readable ====================
  const renderPdf = (uint8array) => {
    const tempBlob = new Blob([uint8array], {
      type: "application/pdf",
    });
    const docUrl = URL.createObjectURL(tempBlob);
    // setPdfFileData(docUrl); ----------------- will be used for future work

    const downloadLink = document.createElement("a");
    downloadLink.href = docUrl;
    downloadLink.download = "extracted.pdf"; //
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
    handlePost();

    document.body.removeChild(downloadLink);
  };

  // ========================= extracting range =========================

  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  };

  const extractPdfPage = async (pdfSrcDoc, fromPage, toPage) => {
    try {
      const pdfNewDoc = await PDFDocument.create();

      const pages = await pdfNewDoc?.copyPages(
        pdfSrcDoc,
        range(fromPage, toPage)
      );

      if (pages) {
        pages.forEach((page) => pdfNewDoc?.addPage(page));
        const newPdf = await pdfNewDoc?.save();
        return newPdf;
      } else {
        console.warn("Failed to copy pages");
        return null;
      }
    } catch (error) {
      console.error("Error during PDF extraction:", error);
      return null;
    }
  };

  const onSubmit = async (data) => {
    if (state?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(state[0]);

      const pdfSrcDoc = await PDFDocument.load(pdfArrayBuffer);

      if (!pdfSrcDoc) {
        console.warn("Invalid PDF source document");
        return;
      }

      // ============== validation of user entered range =================
      const pagesSrc = pdfSrcDoc.getPages();
      const numPagesSrc = pagesSrc.length;

      const fromPage = parseInt(data?.from);
      const toPage = parseInt(data?.to);

      if (
        isNaN(fromPage) ||
        isNaN(toPage) ||
        fromPage < 1 ||
        toPage > numPagesSrc ||
        fromPage > toPage
      ) {
        setErrorTab1("from", { type: "manual", message: "Invalid page range" });
        setErrorTab1("to", { type: "manual", message: "Invalid page range" });
        return;
      }

      const newPdfDoc = await extractPdfPage(pdfSrcDoc, fromPage, toPage);
      if (newPdfDoc) {
        renderPdf(newPdfDoc);
      }
    }
  };

  // ====================== Split pdf per page ============================

  const splitPdf = async (pdfSrcDoc, pagesPerFile, pdfName) => {
    try {
      const pdfFiles = [];
      const numPagesSrc = pdfSrcDoc.getPages().length;
      console.log("-== My area: ", numPagesSrc);
      const numFiles = Math.ceil(numPagesSrc / pagesPerFile);
      const zip = new JSZip();

      for (let i = 0; i < numFiles; i++) {
        const startPage = i * pagesPerFile + 1;
        const endPage = Math.min((i + 1) * pagesPerFile, numPagesSrc);

        const pdfNewDoc = await PDFDocument.create();
        const pages = await pdfNewDoc.copyPages(
          pdfSrcDoc,
          range(startPage, endPage)
        );

        if (pages) {
          console.log("---", pdfSrcDoc);
          pages.forEach((page) => pdfNewDoc.addPage(page));
          const newPdf = await pdfNewDoc.save();
          // console.log('---------------',newPdf);
          const fileName = `${pdfName}_${i + 1}.pdf`;
          pdfFiles.push({ data: newPdf, name: fileName });
          zip.file(fileName, newPdf);
        } else {
          console.warn("Failed to copy pages");
          return null;
        }
      }

      setSplitPdfFiles(pdfFiles);

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const zipFile = new File([zipBlob], "split_pdfs.zip", {
        type: "application/zip",
      });

      // here,  I am wrapping the files in zip and alos triggered it
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(zipFile);
      downloadLink.download = "split_pdfs.zip";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      handlePost();
      document.body.removeChild(downloadLink);

      return pdfFiles;
    } catch (error) {
      console.error("Error during PDF splitting:", error);
      return null;
    }
  };

  const onSubmitSplit = async (data) => {
    // console.log("hitted", data);
    // console.log('===============',state[0].name);
    if (isPremium != true) {
      navigate("/subscriptions");
      return;
    }
    const pdfArrayBuffer = await readFileAsync(state[0]);
    const pdfSrcDoc = await PDFDocument.load(pdfArrayBuffer);
    const pagesInPdf = pdfSrcDoc.getPages().length;

    if (
      isNaN(pagesInPdf) ||
      isNaN(parseInt(data?.pagesPerFile)) ||
      parseInt(data?.pagesPerFile) > pagesInPdf
    ) {
      setErrorTab2("pagesPerFile", {
        type: "manual",
        message: "Invalid page range",
      });
      return;
    }

    const pdfFiles = await splitPdf(
      pdfSrcDoc,
      parseInt(data?.pagesPerFile),
      state[0].name
    );

    if (pdfFiles && pdfFiles.length > 0) {
      console.log("Extracted PDF files:", pdfFiles);
    }
  };

  return (
    <div className="flex flex-col p-10 gap-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <section className="w-fit mx-auto lg:col-span-2 ">
          <iframe
            className="w-fit h-96 lg:w-[700px] lg:h-[500px] rounded mx-auto shadow-sm shadow-teal "
            src={initialFile}
          ></iframe>
        </section>

        {/* ================== tab area ================= */}

        <section className="w-full bg-base-300 border border-teal shadow-sm shadow-teal  rounded-sm">
          <div>
            {/* tab -1 content ===========================================  */}
            <div className="  p-6">
              <section>
                <form
                  onSubmit={handleSubmitTab1(onSubmit)}
                  className="flex flex-col justify-center gap-10"
                >
                  <div className="grid grid-cols-2 w-fit mx-auto gap-4 lg:gap-10">
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="" className="pb-0.5 font-normal">
                        Form(Page No.)
                      </label>
                      <input
                        {...registerTab1("from", { required: true })}
                        type="text"
                        className={`p-3 rounded-lg form-input hover:outline-none focus:outline-none ${
                          errorsTab1.from ? "border-2 border-error_color" : ""
                        }`}
                        placeholder="1"
                      />
                      {errorsTab1.from && (
                        <span className="text-error_color">
                          {errorsTab1.from.message
                            ? errorsTab1.from.message
                            : "This field is required"}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="pb-0.5 font-normal">
                        To(Page No.)
                      </label>
                      <input
                        {...registerTab1("to", { required: true })}
                        type="text"
                        className={`p-3 rounded-lg form-input hover:outline-none focus:outline-none ${
                          errorsTab1.to ? "border-2 border-error_color" : ""
                        }`}
                        placeholder="4"
                      />
                      {errorsTab1.to && (
                        <span className="text-error_color">
                          {errorsTab1.to.message
                            ? errorsTab1.to.message
                            : "This field is required"}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className="text-white  font-medium w-fit mx-auto rounded bg-aqua_marine px-6 py-3"
                    type="submit"
                  >
                    Extract
                  </button>
                </form>
              </section>
            </div>
            <div className="divider bg-teal h-fit"></div>
            {/* tab -2 content ===========================================  */}
            <div className="p-6 pt-2">
              <div className="flex justify-end ">
                <MdOutlineWorkspacePremium className="text-[#EF6C00] font-bold text-2xl "></MdOutlineWorkspacePremium>
              </div>
              <section>
                <form
                  onSubmit={handleSubmitTab2(onSubmitSplit)}
                  className="flex flex-col justify-center gap-10"
                >
                  <div className="">
                    <label htmlFor="" className="pb-0.5 font-medium">
                      Pages Per File
                    </label>
                    <input
                      {...registerTab2("pagesPerFile", { required: true })}
                      type="number"
                      className={`p-3 rounded-lg text-black text-lg font-medium form-input hover:outline-none focus:outline-none ${
                        errorsTab2.pagesPerFile
                          ? "border-2 border-error_color"
                          : ""
                      }`}
                      placeholder="2"
                      min={1}
                      required
                    />
                    {errorsTab2.pagesPerFile && (
                      <span className="text-error_color">
                        {errorsTab2.pagesPerFile.message
                          ? errorsTab2.pagesPerFile.message
                          : "This field is required"}
                      </span>
                    )}
                  </div>
                  <button
                    className="text-white text-base font-medium w-fit mx-auto rounded bg-aqua_marine px-5 py-3"
                    type="submit"
                  >
                    Split
                  </button>
                </form>

                {splitPdfFiles.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xl font-medium mb-2">
                      Split PDF Files:
                    </h2>
                    <ul>
                      {splitPdfFiles.map((file, index) => (
                        <li key={index}>
                          <a
                            href={URL.createObjectURL(
                              new Blob([file.data], { type: "application/pdf" })
                            )}
                            download={file.name}
                            className="text-blue-600 hover:underline"
                          >
                            {file.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================ 
      <section className="">
        <iframe
          className={`w-[800px] h-[495px] rounded mx-auto ${
            pdfFileData ? "" : "hidden"
          }`}
          src={pdfFileData}
        ></iframe>
      </section> */}
    </div>
  );
};

export default SplitPDFModal;
