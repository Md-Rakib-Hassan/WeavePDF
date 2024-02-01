// src/App.js
import { useState } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import Signature from './Signature';


const PdfSignature = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [signature, setSignature] = useState(null);

    const handleFileUpload = (file) => {
        setSelectedFile(file);
    };

    const handleSignature = (signatureData) => {
        setSignature(signatureData);
    };

    const handleDownload = async () => {
        try {
            const formData = new FormData();
            formData.append('pdfFile', selectedFile);
            formData.append('signature', signature);

            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Assuming the server responds with a download link
            window.open(response.data.downloadLink, '_blank');
        } catch (error) {
            console.error('Error uploading and signing PDF', error);
        }
    };

    const handleDocumentLoadSuccess = (numPages) => {
        // Optionally handle the number of pages loaded
        console.log('Number of pages:', numPages);
    };

    return (
        <>
            {/* <div className="App">
                <h1 className="text-2xl font-bold m-4">PDF Signature App</h1>
                <FileUpload onFileUpload={handleFileUpload} />
                {selectedFile && <Signature onSign={handleSignature} />}
                {selectedFile && signature && (
                    <button onClick={handleDownload} className="m-4 bg-green-500 text-white px-4 py-2">
                        Download Signed PDF
                    </button>
                )}
            </div> */}
            <div className="App">
                <h1 className="text-2xl font-bold m-4">PDF Signature App</h1>
                <FileUpload onFileUpload={handleFileUpload} onDocumentLoadSuccess={handleDocumentLoadSuccess} />
                {selectedFile && <Signature onSign={handleSignature} />}
                {selectedFile && signature && (
                    <button onClick={handleDownload} className="m-4 bg-green-500 text-white px-4 py-2">
                        Download Signed PDF
                    </button>
                )}
            </div>
        </>

    );
};

export default PdfSignature;
