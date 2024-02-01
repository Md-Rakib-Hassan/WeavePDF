// src/components/FileUpload.js
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Dropzone from 'react-dropzone';

const FileUpload = ({ onFileUpload, onDocumentLoadSuccess }) => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        onFileUpload(selectedFile);

        // Load the PDF to get the number of pages
        onDocumentLoadSuccess(1);
    };

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };

    return (
        <div>
            <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="border-dashed border-2 p-4 m-4">
                        <input {...getInputProps()} />
                        <p>Drag & drop a PDF file here, or click to select one.</p>
                        {file && (
                            <div>
                                <p>Selected File: {file.name}</p>
                                <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                                    <Page pageNumber={pageNumber} width={300} />
                                </Document>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </Dropzone>
        </div>
    );
};

export default FileUpload;
