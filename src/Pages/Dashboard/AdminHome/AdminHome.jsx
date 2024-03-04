import { useContext } from "react";
// import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../providers/AuthProviders";
// import { Link } from "react-router-dom";
import "./adminhome.css"
import Card from "./Card";
import UserChart from "./UserChart";
import SubscriptionChart from './SubscriptionChart';

const AdminHome = () => {

    const { user } = useContext(AuthContext)
    return (
        <div className="container mx-auto overflow-hidden p-5  mt-0">
            <div className="flex flex-col md:flex-row justify-between items-center md:px-10 bg-light_blue p-5 rounded-md my-5">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl md:text-3xl text-teal font-bold">Welcome {user?.displayName}!</h1>
                    <p className="text-md md:text-lg text-black font-semibold my-2">Here, you can monitor your application details</p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl text-teal font-bold">WeavePDF</h1>
                </div>
            </div>
            <Card />
            <div className="my-10 flex flex-col lg:flex-row lg:items-center lg:gap-10 rounded-lg">
                <div className="mb-6 lg:mb-0 lg:flex-grow lg:rounded-lg lg:p-4 bg-base-100 shadow-xl">
                    <SubscriptionChart />
                </div>
                <div className="lg:flex-grow lg:rounded-lg lg:p-4 bg-base-100 shadow-xl">
                    <UserChart />
                </div>
            </div>
        </div>

    );
};

export default AdminHome;

