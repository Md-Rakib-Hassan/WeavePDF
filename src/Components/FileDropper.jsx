import React from 'react';

const FileDropper = () => {
    return (
        <div className='flex flex-col items-center my-10 py-10 bg-slate-800'>
            <h1 className='font-playfair text-2xl font-bold'>Create your eSignature to sign with ease.</h1><br />
            <input className='bg-slate-300' type="file" name="pdf" id="pdf" />
        </div>
    );
};

export default FileDropper;