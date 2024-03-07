
// import { MdPayment } from "react-icons/md";
// import useUsers from "../../hooks/useUsers";
// import useAuth from "../../hooks/useAuth";
// import { useEffect } from "react";


// const MyTransection = () => {
//     const {user} = useAuth();
//     useEffect()
//     return (
//         <div>
//             <div>
//                 <div className="bg-white p-2">
//                     <h2 className="flex justify-center items-center gap-2 text-3xl font-bold my-3">Subscription Details <MdPayment></MdPayment></h2>
//                 </div>
//             </div>
//             <div className="overflow-x-auto my-3 bg-white">
//                 <table className="table table-zebra">
//                     <thead className=" bg-[#42453d]">
//                         <tr>
//                             <th className="text-base text-white">Transaction ID</th>
//                             <th className="text-base text-white">Type</th>
//                             <th className="text-base text-white">Payment</th>
//                             <th className="text-base text-white">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                             <tr key={curruser.plan_id}>
//                             <td>{curruser?.plan_id}</td>
//                             <td>{curruser.subscription_type}</td>
//                             {curruser.subscription_type == 'monthly'? 
//                             <td>$ 50</td>:
//                             <td>$ 540</td>
//                             }
//                             <td>ACTIVE</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyTransection;