import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-teal border-t-2 border-slate-900 px-10 text-slate-400'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-8 py-10 mx-auto'>
                <div>
                    <h1 className='font-bold text-xl'>About</h1><br />
                    <p>The PDF software trusted by millions of users
                        WeavePDF is your number one web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Features</h1><br />
                    <ul>
                        <li>Merge PDF</li>
                        <li>Split PDF</li>
                        <li>Word to PDF</li>
                        <li>PDF to Word</li>
                        <li>HTML to PDF</li>
                        <li>Markdown to PDF</li>
                        <li>Add Signature</li>

                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Pages</h1><br />
                    <ul>
                       
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/subscriptions'}><li>Subsciption</li></Link>
                        <Link to={'/contact'}><li>Contact Us</li></Link>
                        
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Solution</h1><br />
                    <ul>
                        <li>Business</li>
                        <li>Education</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;