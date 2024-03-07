import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LuFileEdit, LuListTodo } from "react-icons/lu";
import { MdOutlineSplitscreen } from "react-icons/md";
import { BsSignMergeRight } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { BsMarkdown } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FcImageFile } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TbNumbers } from "react-icons/tb";

const MostPopularPDF = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="tools" className="max-w-5xl mx-auto py-10 p-2">
      <div className="text-center">
        <h1 className="text-[36px] font-bold pb-3">Most Popular Tools</h1>
        <p className="text-[18px] font-normal pb-9">
          Unique tools to convert, compress, and edit PDFs for free. Try it out
          today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/merge-pdf">
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <BsSignMergeRight className="text-[50px] text-[#ee4030]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Merge PDF</h2>
              <p className="font-normal pt-1">
                Combine multiple PDFs into one undefine document
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        <Link to="/split-pdf">
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <MdOutlineSplitscreen className="text-[40px] text-[#30bc1e]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Split PDF</h2>
              <p className="font-normal pt-1">
                Split your PDF file into multiple pages
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        <Link to={"/edit-pdf"}>
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <LuFileEdit className="text-[50px] text-[#24b2ff]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Edit PDF</h2>
              <p className="font-normal pt-1">
                Add signatures, images, highlight, draw and many other! 
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        <Link to={"/wordToPdf"}>
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <FaRegFilePdf className="text-[30px] text-[#ee4030]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Word to PDF</h2>
              <p className="font-normal pt-1">
                Convert doc file to editable PDF Documents
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        <Link to={"/md-to-pdf-editor"}>
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <BsMarkdown className="text-[50px] text-[#9d4ed6]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Markdown to PDF</h2>
              <p className="font-normal pt-1">
                Write to markdown & converting to PDF
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        <Link to={"/speech-To-Text"}>
          {" "}
          <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
            <MdOutlineSettingsVoice className="text-[40px] text-[#693080]" />
            <div className="pl-3">
              {" "}
              <h2 className="font-bold text-[20px]">Speech to Text</h2>
              <p className="font-normal pt-1">
                Convert your Speech into text
              </p>
            </div>
            <IoIosArrowForward className="mt-3 text-2xl" />
          </div>
        </Link>
        {showMore && (
          <>
            <Link to={"/imageToPdf"}>
              {" "}
              <div className="bg-base-300 hover:scale-110 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <FcImageFile className="text-[45px]" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">Image to PDF</h2>
                  <p className="font-normal pt-1">Convert your Image into PDF File</p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>
            <Link to={"/draw-signature"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <FcSignature className="text-[60px] text-[#ee4030]" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">Draw Signature</h2>
                  <p className="font-normal pt-1">
                    Get your online signature just do a draw
                  </p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>

            <Link to={"/addWaterMark"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <img className="h-[40px] w-auto" src="https://i.ibb.co/4fWq7sY/watermark.png" alt="" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">Add WaterMark</h2>
                  <p className="font-normal pt-1">
                    Add watermark to your PDF files.
                  </p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>
            <Link to={"/htmlToPdf"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <FaHtml5 className="text-[30px] text-[#ee4030]" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">HTML to PDF</h2>
                  <p className="font-normal pt-1">
                    Convert your HTML editor file into PDF
                  </p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>

            <Link to={"/add-pg-number"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <TbNumbers className="text-[40px] text-[#ee4030]" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">Add Page Number</h2>
                  <p className="font-normal pt-1">
                    Add page numbers to the pages of PDF
                  </p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>
            <Link to={"/toDoList"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <LuListTodo className="text-[35px] text-[#ee4030]" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">To Do List</h2>
                  <p className="font-normal pt-1">
                    Use todo list for your daily task and get it </p>
                    </div>
                    </div>
                    </Link>

                    <Link to={"/pdf-to-audiobook"}>
              {" "}
              <div className="bg-base-300 hover:scale-105 ease-in-out flex pb-16 pt-6 px-4 justify-center rounded-md border border-neutral-300">
                <img className="h-[40px] w-auto" src="https://i.ibb.co/WVnDTPM/audiobook-1.png" alt="" />
                <div className="pl-3">
                  {" "}
                  <h2 className="font-bold text-[20px]">PDF To Audiobook</h2>
                  <p className="font-normal pt-1">
                  Listen to Your PDFs Anytime, Anywhere
                  </p>
                </div>
                <IoIosArrowForward className="mt-3 text-2xl" />
              </div>
            </Link>
          </>)}
      </div>
      <div className="flex justify-center py-9">
        <button
          onClick={toggleSeeMore}
          className="btn bg-[#52ab98] text-white font-bold mr-4"
        >
          {showMore ? "See Less" : "See all Tools"}
        </button>
      </div>
    </div>
  );
};

export default MostPopularPDF;