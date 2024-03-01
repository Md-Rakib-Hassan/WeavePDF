import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePremium = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: isPremium } = useQuery({
        queryKey: ['premiumuser'],
        queryFn: async () =>{
            if(!user) return false;
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data[0]?.isPremium
        }
    })
    return [isPremium]
};

export default usePremium;

