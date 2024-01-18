import React from 'react';

const Newsletter = () => {
    return (
        <div className='py-16 bg-black my-10'>
            <h1 className='font-playfair text-3xl font-bold text-center uppercase'>Newsletter</h1><br /> 
            <p className='text-center'>Subscribe to our newsletter for updates and special offer </p><br />

            <div className="join my-3 rounded-none flex justify-center">
            <input className="input input-bordered join-item" placeholder="Email"/>
            <button className="btn join-item">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;