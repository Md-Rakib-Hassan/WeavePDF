import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SimpleTask = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 p-2">
        
      <div className="text-center">
        <h1 className="text-[40px] font-bold">Keep Your Simple Tasks Simple</h1>
        <p className="py-3">
          Smallpdf is the first and only PDF software you’ll love. We have all
          the tools <br /> you’ll need to start, manage, and finish your work
          with digital documents.
        </p>
      </div>
      {/* section 1 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <h1 className="text-[30px] font-bold">Work Directly on Your Files</h1>
          <p className="py-3">
            Do more than just view PDFs. Highlight and add text, images, shapes,
            and freehand annotations to your documents. You can connect to 20
            other tools to enhance your files further.
          </p>
          <Link to={"/merge-pdf"}>
            {" "}
            <div className="flex items-center gap-2 text-[#283fd1] font-semibold">
              {" "}
              <p className="" href="/merge-pdf">
                Split Your PDF{" "}
              </p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div>
          <img src="https://i.ibb.co/GngVK6v/J1kFCe1.png" alt="" />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-between items-center py-20">
        <div>
          <img src="https://i.ibb.co/cJr9cnS/J16o3cN.png" alt="" />
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-[30px] font-bold">
            Digital Signatures Made Easy
          </h1>
          <p className="py-3">
            Fill in forms, e-sign contracts, and close deals in a few simple
            steps. You can also request e-signatures and track your document
            every step of the way.
          </p>
          <Link to={"/draw-signature"}>
            {" "}
            <div className="flex items-center gap-2 text-[#283fd1] font-semibold">
              {" "}
              <p className="" href="/merge-pdf">
                Try eSign{" "}
              </p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <h1 className="text-[30px] font-bold">Edit the Perfect Document</h1>
          <p className="py-3">
            File too big? Compress it. Need a specific format? Convert it.
            Things getting chaotic? Merge and split files, or remove excess
            pages has it all..
          </p>
          <Link to={"/edit-pdf"}>
            {" "}
            <div className="flex items-center gap-2 text-[#283fd1] font-semibold">
              {" "}
              <p className="" href="/htmlToPdf">
                Try Edit{" "}
              </p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
        <div>
          <img src="https://iili.io/J16xSLb.png" alt="" />
        </div>
      </div>
      {/* section 4 */}
      <div className="flex flex-col md:flex-row justify-between items-center py-20">
        <div>
          <img src="https://i.ibb.co/nzvB684/J16xZTF.png" alt="" />
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-[30px] font-bold">
            Manage Documents—All in One Place
          </h1>
          <p className="py-3">
            No more working across multiple apps! Save time by storing,
            managing, and sharing files across devices—straight from our web
            platform.
          </p>
          <Link to={"/merge-pdf"}>
            {" "}
            <div className="flex items-center gap-2 text-[#283fd1] font-semibold">
              {" "}
              <p className="" href="/merge-pdf">
                Merge Your Document{" "}
              </p>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleTask;
