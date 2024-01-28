import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      {users?.map((user, idx) => (
        <div key={user._id} className="flex justify-center items-center gap10">
          <h1>{idx + 1}</h1>
          <h1>{user.user_Name}</h1>
          <h2>{user.user_Email}</h2>
          <img
            className="w-20 h-20 rounded-full"
            src={user.user_Profile_Picture}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
