import React from 'react';

const Brands = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center font-playfair text-3xl font-bold'>Our PDF Tools are trusted by 5000+ <br />Company Worldwide</h1>
            <br />
            <div className=''>
            <div className='flex justify-center gap-7'>
            <img className='w-28 h-20' src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" alt="google-logo" />
            <img className='w-28 h-20' src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-768x432.png" alt="google-logo" />
            <img className='w-28 h-20' src="https://1000logos.net/wp-content/uploads/2021/03/UNICEF-logo-768x432.png" alt="google-logo" />
            <img className='w-32 h-20' src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png" alt="google-logo" /><br />
            </div><br />
            <div className='flex justify-center gap-7'>
            <img className='w-32 h-20' src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo-768x251.png" alt="google-logo" />
            <img className='w-28 h-20' src="https://1000logos.net/wp-content/uploads/2017/02/Hilton-logo-640x504.png" alt="google-logo" />
            <img className='w-28 h-20' src="https://1000logos.net/wp-content/uploads/2017/06/Unilever-Logo-768x582.png" alt="google-logo" />
            </div>
            </div>
        </div>
    );
};

export default Brands;