import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePremium = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: isPremium } = useQuery({
        queryKey: ['premiumuser'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            console.log(res.data?.isPremium);
        }
    })
    return [isPremium]
};

export default usePremium;