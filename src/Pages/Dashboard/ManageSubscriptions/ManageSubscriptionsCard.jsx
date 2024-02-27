import useUsers from "../../../hooks/useUsers";
import { TbCalendarUser } from "react-icons/tb";
import { CgUserlane } from "react-icons/cg";

const ManageSubscriptionsCard = () => {

    const [users] = useUsers();
    const monthlyUsers = users.filter(item => item.subscription_type === "monthly");
    const yearlyUsers = users.filter(item => item.subscription_type === "yearly");

    return (
        <>
            <div className="card bg-base-100 shadow-xl p-5 flex-grow lg:max-w-2xl my-5">
                <div>
                    <h3 className='text-2xl font-bold'>Total Montly Users Subscriptions</h3>
                </div>
                <figure className="px-15 pt-10">
                    <TbCalendarUser className="text-[70px] rounded-xl mx-auto text-aqua_marine" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{monthlyUsers.length}</h2>
                    <p className='text-xl font-semibold'>Montly Subscriptions</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl p-5 flex-grow lg:max-w-2xl">
                <div>
                    <h3 className='text-2xl font-bold'>Total Yearly Users Subscriptions</h3>
                </div>
                <figure className="px-15 pt-10">
                    <CgUserlane className="text-[70px] rounded-xl mx-auto text-teal" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{yearlyUsers.length}</h2>
                    <p className='text-xl font-semibold'>Yearly Subscriptions</p>
                </div>
            </div>

        </>
    );
};

export default ManageSubscriptionsCard;