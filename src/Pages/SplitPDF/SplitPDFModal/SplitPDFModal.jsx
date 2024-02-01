import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./SplitPDFModal.css";
import JSZip from "jszip";

const SplitPDFModal = () => {
  const [initialFile, setInitialFile] = useState(null);
  // const [pdfFileData, setPdfFileData] = useState(null);
  const [splitPdfFiles, setSplitPdfFiles] = useState([]);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state && state?.length > 0) {
      const initialPDFData = URL.createObjectURL(state[0]);
      setInitialFile(initialPDFData);
    }
  }, [state]);

  // ==================== react hook form ------------------------------
  const { register: registerTab1, handleSubmit: handleSubmitTab1, setError: setErrorTab1, formState: { errors: errorsTab1 } } = useForm();
  const { register: registerTab2, handleSubmit: handleSubmitTab2, setError: setErrorTab2, formState: { errors: errorsTab2 } } = useForm();

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

    document.body.removeChild(downloadLink);
  };

  // ========================= extracting range =========================

  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i - 1);
  };

  const extractPdfPage = async (arrayBuff, data) => {
    try {
      const pdfSrcDoc = await PDFDocument.load(arrayBuff);

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
      const newPdfDoc = await extractPdfPage(pdfArrayBuffer, data);
      if (newPdfDoc) {
        renderPdf(newPdfDoc);
      }
    }
  };

  // ====================== Split pdf per page ============================

  const splitPdf = async (pdfSrcDoc, pagesPerFile,pdfName) => {
    try {
      const pdfFiles = [];
      const numPagesSrc = pdfSrcDoc.getPages().length;
      const numFiles = Math.ceil(numPagesSrc / pagesPerFile);
      const zip = new JSZip();

      for (let i = 0; i < numFiles; i++) {
        const startPage = i * pagesPerFile + 1;
        const endPage = Math.min((i + 1) * pagesPerFile, numPagesSrc);

        const pdfNewDoc = await PDFDocument.create();
        const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(startPage, endPage));

        if (pages) {
          console.log('---',pdfSrcDoc);
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
      const zipFile = new File([zipBlob], "split_pdfs.zip", { type: "application/zip" });

      //  I am wrapping the files in zip and alos triggered it 
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(zipFile);
      downloadLink.download = "split_pdfs.zip";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      return pdfFiles;
    } catch (error) {
      console.error("Error during PDF splitting:", error);
      return null;
    }
  };

  const onSubmitSplit = async (data) => {
    console.log('hitted', data);
    // console.log('===============',state[0].name);
    const pdfArrayBuffer = await readFileAsync(state[0]);
    const pdfSrcDoc = await PDFDocument.load(pdfArrayBuffer);
    const pdfFiles = await splitPdf(pdfSrcDoc, parseInt(data?.pagesPerFile),state[0].name);

    if (pdfFiles && pdfFiles.length > 0) {
      console.log("Extracted PDF files:", pdfFiles);
    }


  };

  return (
    <div className="flex flex-col p-10 gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <section className="w-fit mx-auto">
          <iframe
            className="w-fit h-96 lg:w-[700px] lg:h-[495px] rounded mx-auto"
            src={initialFile}
          ></iframe>
        </section>

        {/* ================== tab area ================= */}

        <section className="w-full">
          <div role="tablist" className="tabs tabs-lifted">
            {/* tab -1 content ===========================================  */}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className={`tab  w-fit text-sm lg:text-2xl font-medium border-2 text-aqua_marine py-2 h-fit border-aqua_marine e  rounded-md `}
              aria-label="Extract Pages" checked required
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-2 border-aqua_marine rounded-box p-6"
            >
              <section>
                <form
                  onSubmit={handleSubmitTab1(onSubmit)}
                  className="flex flex-col justify-center gap-10"
                >
                  <div className="grid grid-cols-2 w-fit mx-auto gap-4 lg:gap-10">
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="" className="pb-0.5 font-medium">
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
                      <label htmlFor="" className="pb-0.5 font-medium">
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
                    className="text-grey text-xl font-medium w-fit mx-auto rounded bg-aqua_marine px-8 py-5"
                    type="submit"
                  >
                    Split this file
                  </button>
                </form>
              </section>
            </div>

            {/* tab -2 content ===========================================  */}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-sm lg:text-2xl font-medium border-2 text-aqua_marine  py-2 h-fit border-aqua_marine  rounded-md"
              aria-label="Split by Per Page"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-2 border-aqua_marine rounded-box p-6"
            >
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
                      errorsTab2.pagesPerFile ? "border-2 border-error_color" : ""
                    }`}
                    placeholder="2" min={1} required
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
                    className="text-grey text-xl font-medium w-fit mx-auto rounded bg-aqua_marine px-8 py-5"
                    type="submit"
                  >
                    Split this file
                  </button>
              </form>

              {splitPdfFiles.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-medium mb-2">Split PDF Files:</h2>
                  <ul>
                    {splitPdfFiles.map((file, index) => (
                      <li key={index}>
                        <a
                          href={URL.createObjectURL(new Blob([file.data], { type: "application/pdf" }))}
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
