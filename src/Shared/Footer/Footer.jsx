import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className='bg-teal pt-0 overflow-hidden p-3'>
                <div className="bg-teal">
                    <div className="mx-auto w-full container">
                        <div className='flex gap-10 items-center flex-col lg:flex-row mb-5'>
                            <div className='mr-6 w-full lg:w-1/4'>
                                <h2 className="mb-6 text-sm font-bold text-white uppercase">About</h2>
                                <div className='text-[#e5e6e6]'>
                                    <p>
                                        The PDF software trusted by millions of users
                                        WeavePDF is your number one web app for editing PDF with ease. Enjoy all the tools you need to work efficiently with your digital documents while keeping your data safe and secure.
                                    </p>
                                </div>
                            </div>
                            <div className="grid gap-10 grid-cols-2 lg:py-8 md:grid-cols-3 lg:grid-cols-6 w-full lg:flex-1">
                                <div>
                                    <h2 className="mb-6 text-sm font-bold uppercase text-white">Features</h2>
                                    <ul className="text-[#e5e6e6] font-medium">
                                        <li className="mb-4">
                                            <a href="/merge-pdf" target='blank' className="hover:underline">Merge PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="split-pdf" target='blank' className="hover:underline">Split PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/edit-pdf" target='blank'  className="hover:underline">Edit PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="wordToPdf" target='blank'  className="hover:underline">Word to PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/md-to-pdf-editor" target='blank' className="hover:underline">Markdown to PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/htmlToPdf" target='blank' className="hover:underline">Html to Pdf</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-bold uppercase text-white">Features</h2>
                                    <ul className="text-[#e5e6e6] font-medium">
                                        <li className="mb-4">
                                            <a href="/speech-To-Text" target='blank' className="hover:underline">Speech To Text</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/imageToPdf" target='blank' className="hover:underline">Image to PDF</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/draw-signature" target='blank' className="hover:underline">Draw Signature</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/addWaterMark" target='blank' className="hover:underline">Add WaterMark</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/add-pg-number" target='blank' className="hover:underline">Add Page Number</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="/toDoList" target='blank'    className="hover:underline">To Do List</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-bold text-white uppercase">Pages</h2>
                                    <ul className="text-[#e5e6e6] font-medium">
                                        <li className="mb-4">
                                            <Link to={'/'}                                            className=" hover:underline">Home</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to={'/subscriptions'} target='blank'               className=" hover:underline">Subsciption</Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to={'/contact'} target='blank' className=" hover:underline">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-bold uppercase text-white">Download</h2>
                                    <ul className="text-[#e5e6e6] font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">iOS</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Android</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Windows</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">MacOS</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-bold uppercase text-white">Solution</h2>
                                    <ul className="text-[#e5e6e6] font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Business</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Education</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center py-5 bg-teal text-white border-t-2 border-blue'>
                            <p><span className='font-bold'>WeavePDF</span> © 2024 - Your PDF Editor</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;