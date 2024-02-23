import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useService = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: services = []} = useQuery({
        queryKey : ['service'],
        queryFn : async () => {
            const result = await axiosPublic.get('/all-services');
            return result.data;
        }
    })
    return [services,refetch];
};

export default useService;