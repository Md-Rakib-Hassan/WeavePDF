import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div>
          <h1 className="text-[48px] font-bold">We make PDF easy.</h1>
          <p className="text-[22px] font-normal">
            All the tools you’ll need to be more productive and work smarter
            with documents.
          </p>
          <div className="py-6 flex flex-col md:flex-row gap-4">
            <Link to={'/subscriptions'}><button className="btn bg-[#52ab98] text-white font-bold">Subscriptions</button></Link>
            <a href="#tools"><button className="btn border-[#00c093] text-black font-bold">Explore All Tools</button></a>
          </div>
        </div>
        <div className="">
          <img className="w-[75vh]" src="https://i.ibb.co/0953SPc/311bd86d9496c1f1.png" alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
