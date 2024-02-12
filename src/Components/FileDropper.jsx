import { useState } from 'react';

const FileDropper = () => {
    const [selectedFile, setselectedFile] = useState(null);

    const handleDrag = e => {
        e.preventDefault();
    }

    const handleDrop = e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setselectedFile(file)
    }

    return (
        <div className='bg-blue py-16 mb-10 text-slate-400'>
            <div className='flex flex-col items-center mb-10 py-14'>
                <h1 className='text-3xl font-bold text-center text-black'>Create your eSignature to sign with ease.</h1><br />
                <input className='bg-slate-300' type="file" name="pdf" id="pdf" />

                {/* drop zone */}
                <div
                    className='my-5'
                    onDrop={handleDrop}
                    onDragOver={handleDrag}
                >
                    {
                        selectedFile ? <h1 className='text-white'>Selected File : {selectedFile.name}</h1>
                            : <h1 className='text-black'>or Drag and Drop a file here</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default FileDropper;
