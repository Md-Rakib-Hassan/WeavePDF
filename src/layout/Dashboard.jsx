import { NavLink, Outlet } from "react-router-dom";
import { FaEnvelope, FaHome } from "react-icons/fa";
// import useAdmin from "../hooks/useAdmin";
import "./Dashboard.css";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
const Dashboard = () => {

  const [isAdmin] = useAdmin();
  const { user } = useAuth();

  return (
    <div className={`${isAdmin ? 'flex' : 'lg:flex'}`}>

      {/*admin dashboard side bar */}
      <div className={`${isAdmin ? 'w-[72px] pt-10  min-h-screen bg-teal text-white text-xl' : 'lg:w-56 min-h-screen bg-teal text-white'}`}>
        <ul className="flex flex-col justify-center items-center gap-8">
          {isAdmin ? (
            <>
              <li className="w-fit">
                <NavLink
                  to="/dashboard/adminHome"
                  className="group flex items-center relative w-fit p-0 dashboard-link"
                >
                  <LuLayoutDashboard className="w-10 h-8 p-0 text-white"></LuLayoutDashboard>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2  rounded-sm absolute w-44 text-grey text-2xl  translate-x-12   opacity-0 m-4 mx-auto"
                    }
                  >
                    Admin Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
                >
                  <LiaUsersCogSolid className="w-10 h-8 p-0 text-white"></LiaUsersCogSolid>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute  text-2xl w-44 translate-x-12   opacity-0 m-4 mx-auto"
                    }
                  >
                    All Users
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/adminEmail"
                  className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
                >
                  <TfiEmail className="w-8 h-8 p-0 text-white"></TfiEmail>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2  rounded-sm absolute text-2xl w-44 translate-x-12   opacity-0 m-4 mx-auto"
                    }
                  >
                    Email
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageSubscriptions"
                  className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
                >
                  <BiPurchaseTag className="w-10 h-8 p-0 text-white"></BiPurchaseTag>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                    }
                  >
                    Subscriptions
                  </span>
                </NavLink>
              </li>

              {/* shared nav links */}
              <div className="divider divider-neutral"></div>
              <li>
                <NavLink
                  to="/"
                  className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
                >
                  <IoHomeOutline className="w-10 h-8 p-0 text-white"></IoHomeOutline>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                    }
                  >
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="group flex items-center relative w-fit h-fit p-0 dashboard-link"
                >
                  <FaEnvelope className="w-10 h-8 p-0 text-white"></FaEnvelope>
                  <span
                    className={
                      "group-hover:opacity-100 transition-opacity bg-teal px-4 py-2 text-grey rounded-sm absolute text-2xl translate-x-12 w-44   opacity-0 m-4 mx-auto"
                    }
                  >
                    Contact Us
                  </span>
                </NavLink>
              </li>
            </>
          )
            :
            (
              // User dashboard==================================
              <>
                <ul className="text-center menu space-y-5">
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
                      <p className="text-xl font-semibold">Hi 👋,</p>
                      <p className="font-bold uppercase text-xl">{user?.displayName}</p>
                    </div>
                  </div>

                  <li>
                    <NavLink className={`buttonProject3`} to='/dashboard/user-profile'>User Profile</NavLink>
                  </li>
                  {/* {isPremium && <li>
                    <NavLink className={`buttonProject3`} to='/dashboard/transection'>Subscription Details</NavLink>
                  </li>} */}
                  <li>
                    <NavLink className={`buttonProject3`} to='/dashboard/document-history'>Recent Document History</NavLink>
                  </li>
                  {/* <li>
                    <NavLink className={`buttonProject3`} to='/dashboard/addFeedback'>Add Your Feedback</NavLink>
                  </li> */}
                  <li>
                    <NavLink className={`buttonProject3`} to='/contact'>Contact With Us</NavLink>
                  </li>
                  <li>
                    <NavLink className={`buttonProject3`} to='/'>Back To Home <FaHome></FaHome></NavLink>
                  </li>
                </ul>
              </>
            )}






        </ul>
      </div>

      {/* dashboard content ================================= */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
