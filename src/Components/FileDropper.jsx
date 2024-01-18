import React, { useState } from 'react';

const FileDropper = () => {
    const [selectedFile, setselectedFile] = useState(null);

    const handleDrag = e =>{
        e.preventDefault();
    }
    const handleDrop = e =>{
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setselectedFile(file)
    }
    console.log(selectedFile?.name);
    return (
        <div className='flex flex-col items-center my-10 py-10 bg-slate-800'>
            <h1 className='font-playfair text-2xl font-bold'>Create your eSignature to sign with ease.</h1><br />
            <input className='bg-slate-300' type="file" name="pdf" id="pdf" />

            {/* drop zone */}
            <div 
            className='my-5'
            onDrop={handleDrop}
            onDragOver={handleDrag}
            >
                {
                    selectedFile ? <h1>Selected File : {selectedFile.name}</h1>
                    : <h1>or Drag and drop a file here</h1>
                }
            </div>
        </div>
    );
};

export default FileDropper;