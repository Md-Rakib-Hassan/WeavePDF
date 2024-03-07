import { Link } from "react-router-dom";

const TryWeavePDF = () => {
    return (
        <div className="max-w-7xl mx-auto py-24 p-2">
            <div className="bg-base-300 rounded-md flex flex-col md:flex-row">
                <div className="px-8 md:px-32 py-20 w-full md:w-2/3">
                    <h1 className="text-[28px] font-bold">Want to contact us?</h1>
                    <p className="py-6">Have any questions? Want to directly contact us? If you want to collaborate or looking for a partnership, kindly contact us</p>
                    <Link to='/contact'><button className="btn bg-[#52ab98] text-white font-bold">Contact Us</button></Link>
                </div>
                <div className="w-full md:w-1/3">
                    <img src="https://iili.io/J18CtdG.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TryWeavePDF;