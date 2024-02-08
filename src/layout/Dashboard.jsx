import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    const { user } = useAuth()

    const isAdmin = false;
    return (
        <div className="flex">
            {/* bashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#3a3939] text-white">
                <ul className="text-center menu space-y-5">
                    {
                        isAdmin ? <>




                        </>

                            :
                            <>
                                <div className="flex flex-col items-center gap-4 pb-6 mt-5 text-white border-b">
                                    <div className="w-[80px] h-[80px] rounded-full bg-white text-black flex justify-center items-center font-clashBold text-2xl">
                                        {/* JK */}
                                        <img
                                            src={user?.photoURL}
                                            alt={user?.displayName}
                                            className="w-full h-full rounded-full border-2 border-blue object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">Hi 👋,</p>
                                        <p className="font-bold">{user?.displayName}</p>
                                    </div>
                                </div>

                                <li>
                                    <NavLink className={`buttonProject3`} to='/dashboard/user-profile'>User Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink className={`buttonProject3`} to='/dashboard/transection'>My Transection</NavLink>
                                </li>
                            </>
                    }



                    {/* common navlinks (Navbar) */}


                </ul>
            </div>
            {/* dahsboard content */}
            <div className="flex-1 p-8 border bg-neutral-100">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;