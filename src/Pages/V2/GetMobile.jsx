import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
const GetMobile = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 p-3">
      <div className="bg-base-300 py-32 px-10 flex flex-col md:flex-row justify-between rounded">
        <div className="w-full flex items-center md:w-1/3 pl-6">
          <div>
            <h1 className="text-[30px] font-bold">Get It on Mobile</h1>
            <p className="py-3 text-[20px]">
              Create PDF scans, organize documents, and share files from all
              your connected devices with the Smallpdf Mobile App—wherever you
              are.
            </p>
            <div className="flex gap-4 pt-3">
              <a href="https://play.google.com/store/games?device=windows&pli=1">
                <button className="btn bg-black text-white">
                  <FaGooglePlay />
                  Google Play
                </button>
              </a>
              <a href="https://www.apple.com/app-store/">
                <button className="btn bg-black text-white">
                  <BsApple />
                  App Store
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/xLVcY1V/J16zS9I.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetMobile;
