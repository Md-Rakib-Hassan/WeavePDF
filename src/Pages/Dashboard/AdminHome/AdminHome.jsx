import { useContext } from "react";
// import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";
import "./adminhome.css"
import Card from "./Card";

const AdminHome = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    // console.log(user)
    return (
        <div>
            <div className="flex justify-between items-center md:px-10">
                <div>
                    <h1 className="text-3xl text-teal font-bold">WeavePDF</h1>
                </div>
                <div>

                    {
                        user ?
                            <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 lg:w-36 border-black border-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL ? user.photoURL : ``} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>{user?.email}</a></li>
                                    <li><a>{user?.displayName}</a></li>
                                    <Link className="ml-3" to={'/register'}><a>Add Another Account</a></Link>
                                    <li onClick={handleLogOut} ><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
            <Card></Card>
        </div>
    );
};

export default AdminHome;