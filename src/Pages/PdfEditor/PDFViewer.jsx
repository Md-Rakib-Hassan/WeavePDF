import { useState } from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";



const PdfViewer = () => {
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)

    const fileType = ['application/pdf']
    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else {
                setPDFFile(null)
            }
        }
        else {
            console.log("please select")
        }
    }
    // const handleChange = (e) => {
    //     let selectedFile = e.target.files[0]
    //     if (selectedFile) {
    //         if (selectedFile && fileType.includes(selectedFile.type)) {
    //             let reader = new FileReader()
    //             reader.readAsArrayBuffer(selectedFile)  // Use readAsArrayBuffer instead of readAsDataURL
    //             reader.onload = (e) => {
    //                 setPDFFile(e.target.result)
    //             }
    //         }
    //         else {
    //             setPDFFile(null)
    //         }
    //     }
    //     else {
    //         console.log("please select")
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
        // if (pdfFile !== null) {
        //     const pdfUrl = URL.createObjectURL(new Blob([pdfFile], { type: 'application/pdf' }));
        //     setViewPdf(pdfUrl);
        // } else {
        //     setViewPdf(null);
        // }

    }
    const newplugin = defaultLayoutPlugin()
    return (
        <>
            <div className=" min-h-screen flex flex-col items-center">
                <div className="container mx-auto my-10 p-5 bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-bold mb-5">PDF Viewer</h1>
                    <form onSubmit={handleSubmit}
                        className="flex items-center space-x-4">
                        <input
                            type="file"
                            className="w-8/12 border p-2 rounded-md"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            // onChange={}
                            className="bg-blue text-black px-4 py-2 rounded-md"
                        >
                            View PDF
                        </button>
                    </form>
                </div>

                <div className="w-full bg-blue-500 text-black py-10">
                    <h2 className="text-2xl font-bold text-center">View PDF</h2>
                    {/* Render PDF content here */}
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        {/* <!-- The viewer component will be put here -->
                        ... */}
                        {viewPdf && <>
                            <Viewer fileUrl={viewPdf} plugins={[newplugin]} />

                        </>
                        }
                        {!viewPdf && <>No PDF</>}
                    </Worker>
                </div>
            </div>
        </>
    );
};

export default PdfViewer;
