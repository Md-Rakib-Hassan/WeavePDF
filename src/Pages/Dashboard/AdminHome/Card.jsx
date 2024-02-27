import useUsers from '../../../hooks/useUsers';
import { FaUserPlus } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { RiWallet3Fill } from "react-icons/ri";

const Card = () => {

    const [users] = useUsers();
    const premiumUsers = users.filter(item => item.isPremium === true);

    return (
        <>
            <div className="container my-24">
                <div className="flex gap-32 items-stretch justify-center">
                    <div className="card bg-base-100 shadow-xl p-5 flex-grow max-w-xs md:max-w-2xl">
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
                    <div className="card bg-base-100 shadow-xl p-5 flex-grow max-w-xs md:max-w-2xl">
                        <div>
                            <h3 className='text-2xl font-bold'>Total Subscriptions</h3>
                        </div>
                        <figure className="px-15 pt-10">
                            <RiUserStarFill className="text-[70px] rounded-xl mx-auto text-teal" />
                            {/* <img src={usersub} alt="Subscriptions" className="w-24 rounded-xl mx-auto" /> */}
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{premiumUsers.length}</h2>
                            <p className='text-xl font-semibold'>User Subscriptions</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-5 flex-grow max-w-xs md:max-w-2xl">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;