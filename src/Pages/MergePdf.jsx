import React, { useState } from 'react';

const MergePdf = () => {

    const [pdfs, setPdfs] = useState([]);

    const handleInput  = e =>{
        e.preventDefault();
        const mergeInput = document.getElementById('merge-input');
        const files = mergeInput.files;
        setPdfs(files)
    }
    return (
        <div className='flex flex-col items-center py-10'>
            <h1 className='text-3xl font-playfair font-bold'>Merge your PDF Files here</h1><br />
            <p>Combine PDFs in the order you want with the easiest PDF merger available.</p>
            <label className='label'>
                <input onChange={handleInput} accept='application/pdf' type="file" name="" id="merge-input" multiple /><br />
                <span className='font-bold text-xl text-white'>Select PDF files</span>
            </label>
        </div>
    );
};

export default MergePdf;