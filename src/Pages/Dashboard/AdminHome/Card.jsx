import useUsers from '../../../hooks/useUsers';
import { FaUserPlus } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
// import { RiWallet3Fill } from "react-icons/ri";

const Card = () => {

    const [users] = useUsers();
    const premiumUsers = users.filter(item => item.isPremium === true);

    return (
        <>
            <div className="my-4 lg:my-24 p-5">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-32 justify-center">
                    <div className="card bg-base-100 shadow-xl p-5 flex-grow w-full lg:max-w-2xl">
                        <div>
                            <h3 className='text-2xl font-bold'>Profile Count</h3>
                        </div>
                        <figure className="px-15 pt-10">
                            <FaUserPlus className="text-[70px] rounded-xl mx-auto text-aqua_marine" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{users.length}</h2>
                            <p className='text-xl font-semibold'>Profiles</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-5 flex-grow w-full lg:max-w-2xl">
                        <div>
                            <h3 className='text-2xl font-bold'>Total Subscriptions</h3>
                        </div>
                        <figure className="px-15 pt-10">
                            <RiUserStarFill className="text-[70px] rounded-xl mx-auto text-teal" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{premiumUsers.length}</h2>
                            <p className='text-xl font-semibold'>User Subscriptions</p>
                        </div>
                    </div>
                    {/* <div className="card bg-base-100 shadow-xl p-5 flex-grow w-full lg:max-w-2xl">
                        <div>
                            <h3 className='text-2xl font-bold'>Wallet Balance</h3>
                        </div>
                        <figure className="px-15 pt-10">
                            <RiWallet3Fill className="text-[70px] rounded-xl mx-auto text-light_blue" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$1000</h2>
                            <p className='text-xl font-semibold'>Balance</p>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    );
};

export default Card;