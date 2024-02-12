import { FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";


const PlansPricing = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">
            <div className="bg-blue px-12 py-20 flex flex-col md:flex-row rounded-md gap-14">
                <div className="w-full md:w-2/4">
                    <h1 className="text-[34px] font-bold">Plans & Pricing</h1>
                    <p className="py-4">Get unlimited access to Smallpdf tools for you and your team with pricing that’s right for you.</p>
                    <Link to={'/user-subscription'}><button className="btn bg-[#52ab98] text-white font-bold mr-4">Get Your Plans</button></Link>
                    
                </div>
                <div className="w-full md:w-2/4 flex flex-col md:flex-row gap-10">
                    <div className="bg-base-200 rounded py-8 px-6">
                        <div className="flex justify-between">
                            <h1 className="font-semibold">Pro</h1>
                            <FaUser/>
                        </div>
                            <hr className="w-full border-t border-neutral-300 my-3" />
                        <div className="flex items-baseline">
                        <h1 className="text-[50px]">USD 9</h1>
                        <p>/month</p>
                        </div>
                        <p>per user, billed annually.</p>
                    </div>
                    <div className="bg-base-200 rounded py-8 px-6">
                        <div className="flex justify-between">
                            <h1 className="font-semibold">Team</h1>
                            <FaUsers/>
                        </div>
                            <hr className="w-full border-t border-neutral-300 my-3" />
                        <div className="flex items-baseline">
                        <h1 className="text-[50px]">USD 7</h1>
                        <p>/month</p>
                        </div>
                        <p>per user, billed annually.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PlansPricing;