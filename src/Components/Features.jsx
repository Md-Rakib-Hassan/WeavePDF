import { FaCodeMerge } from "react-icons/fa6";
import { FaArrowsSplitUpAndLeft } from "react-icons/fa6";
import { FaFileWord } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaMarkdown } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaSignature } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <div className='my-20'>
            <h1 className='font-playfair text-xl md:text-3xl font-bold text-center'>All your PDFs Tool in One Spot</h1>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-7 text-center">
                    <Link to="/merge-pdf"><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaCodeMerge className="text-6xl"></FaCodeMerge>
                        <h1 className="font-bold text-xl">Merge PDF</h1>
                    </div></Link>
                    <Link><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaArrowsSplitUpAndLeft className="text-6xl"></FaArrowsSplitUpAndLeft>
                        <h1 className="font-bold text-xl">Split PDF</h1>
                    </div></Link>
                    <Link><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaFileWord className="text-6xl"></FaFileWord>
                        <h1 className="font-bold text-xl">PDF to Word</h1>
                    </div></Link>
                    <Link><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaFilePdf className="text-6xl"></FaFilePdf>
                        <h1 className="font-bold text-xl">Word to PDF</h1>
                    </div></Link>
                    <Link><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaMarkdown className="text-6xl"></FaMarkdown>
                        <h1 className="font-bold text-xl">Markdown to PDF</h1>
                    </div></Link>
                    <Link><div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                        <FaHtml5 className="text-6xl"></FaHtml5>
                        <h1 className="font-bold text-xl">HTML to PDF</h1>
                    </div></Link>
                    <Link to="/add-signature">
                        <div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                            <FaSignature className="text-6xl"></FaSignature>
                            <h1 className="font-bold text-xl">Add Signature</h1>
                        </div>
                    </Link>
                    <Link to="/draw-signature">
                        <div className="flex flex-col items-center justify-center bg-slate-100 py-3 w-[250px] lg:w-[150px] h-[150px] rounded-lg hover:scale-110 ease-in-out">
                            <FaPaintbrush className="text-6xl"></FaPaintbrush>
                            <h1 className="font-bold text-xl">Draw Signature</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Features;