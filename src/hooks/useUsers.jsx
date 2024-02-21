import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: users = [], isPending: loading  } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    // console.log('Refetch function:', refetch);
    return [users, loading , refetch]
};

export default useUsers;