import { FaUsers } from "react-icons/fa";


const User = ({user,idx}) => {
    const {user_Email,user_Name,user_Profile_Picture,role} = user;
    const handleMakeAdmin = () =>{

    }
    return (
        <tr>
              <th>
               {idx+1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user_Profile_Picture && user_Profile_Picture }
                        alt="User Profile Picture"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user_Name ? user_Name : 'N/A'}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {user_Email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
                  {role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaUsers
                        className="text-white 
                                    text-2xl"
                      ></FaUsers>
                    </button>
                  )}
                </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
    );
};

export default User;