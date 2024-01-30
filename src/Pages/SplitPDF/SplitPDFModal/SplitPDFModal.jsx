import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./SplitPDFModal.css";

const SplitPDFModal = () => {
  const [initialFile, setInitialFile] = useState(null);
  const [pdfFileData, setPdfFileData] = useState(null);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state && state?.length > 0) {
      const initialPDFData = URL.createObjectURL(state[0]);
      setInitialFile(initialPDFData);
    }
  }, [state]);

  // ==================== react hook form ------------------------------
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

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
    setPdfFileData(docUrl);
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
        setError("from", { type: "manual", message: "Invalid page range" });
        setError("to", { type: "manual", message: "Invalid page range" });
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

  return (
    <div className="flex flex-col p-10 gap-16">
      <div className="grid grid-cols-2 gap-20">
        <section className="">
          <iframe
            className="w-[800px] h-[495px] rounded mx-auto"
            src={initialFile}
          ></iframe>
        </section>

        {/* ================== tab area ================= */}

        <section>
          <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" className={`tab text-2xl font-medium border-2 focus:bg-teal py-2 h-fit border-aqua_marine  rounded-md `} aria-label="Extract Pages" />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-aqua_marine rounded-box p-6"
            >
              <section>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center gap-10"
                >
                  <div className="grid grid-cols-2 w-fit mx-auto gap-10">
                    <div className="flex flex-col gap-1 ">
                      <label htmlFor="" className="pb-0.5 font-medium">
                        Form(Page No.)
                      </label>
                      <input
                        {...register("from", { required: true })}
                        type="text"
                        className={`p-3 rounded-lg form-input hover:outline-none focus:outline-none ${
                          errors.from ? "border-2 border-error_color" : ""
                        }`}
                        placeholder="1"
                      />
                      {errors.from && (
                        <span className="text-error_color">
                          {errors.from.message
                            ? errors.from.message
                            : "This field is required"}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="" className="pb-0.5 font-medium">
                        To(Page No.)
                      </label>
                      <input
                        {...register("to", { required: true })}
                        type="text"
                        className={`p-3 rounded-lg form-input hover:outline-none focus:outline-none ${
                          errors.to ? "border-2 border-error_color" : ""
                        }`}
                        placeholder="4"
                      />
                      {errors.to && (
                        <span className="text-error_color">
                          {errors.to.message
                            ? errors.to.message
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

            <input type="radio" name="my_tabs_1" role="tab" className="tab text-2xl font-medium border-2 focus:bg-teal py-2 h-fit border-aqua_marine rounded-md" aria-label="Split" />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-aqua_marine rounded-box p-6"
            >
              Tab content 2
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================  */}
      <section className="">
        <iframe
          className={`w-[800px] h-[495px] rounded mx-auto ${
            pdfFileData ? "" : "hidden"
          }`}
          src={pdfFileData}
        ></iframe>
      </section>
    </div>
  );
};

export default SplitPDFModal;
