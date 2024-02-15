
// import { NavLink, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
// import { FaHome } from "react-icons/fa";

// const UserDashboard = () => {
//     const { user } = useAuth()

//     const isAdmin = false;
//     return (
//         <div className="lg:flex">
//             {/* bashboard sidebar */}
//             <div className="lg:w-64 min-h-screen bg-[#3a3939] text-white">
//                 <ul className="text-center menu space-y-5">
//                     {
//                         isAdmin ? <>




//                         </>

//                             :
//                             <>
//                                 <div className="flex flex-col items-center gap-4 pb-6 mt-5 text-white border-b">
//                                     <h1 className="font-semibold mb-7 border p-1 rounded-md text-sm">WeavePDF</h1>
//                                     <div className="w-[80px] h-[80px] rounded-full bg-white text-black flex justify-center items-center font-clashBold text-2xl">
//                                         {/* JK */}
//                                         <img
//                                             src={user?.photoURL}
//                                             alt={user?.displayName}
//                                             className="w-full h-full rounded-full border-2 border-blue object-cover"
//                                         />
//                                     </div>
//                                     <div>
//                                         <p className="text-xl font-semibold">Hi 👋,</p>
//                                         <p className="font-bold uppercase text-xl">{user?.displayName}</p>
//                                     </div>
//                                 </div>

//                                 <li>
//                                     <NavLink className={`buttonProject3`} to='/userDashboard/user-profile'>User Profile</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink className={`buttonProject3`} to='/userDashboard/transection'>My Transection</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink className={`buttonProject3`} to='/userDashboard/document-history'>Recent Document History</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink className={`buttonProject3`} to='/userDashboard/addFeedback'>Add Your Feedback</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink className={`buttonProject3 flex items-center`} to='/'>Go To Home <FaHome></FaHome></NavLink>
//                                 </li>
//                             </>
//                     }


//                 </ul>
//             </div>
//             {/* dahsboard content */}
//             <div className="flex-1 p-8 border bg-[#F1F3F4]">
//                 <Outlet></Outlet>
//             </div>
//         </div >
//     );
// };

// export default UserDashboard;