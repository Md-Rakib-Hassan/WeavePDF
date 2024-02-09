import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const RecentDocumentHistory = () => {
    const services = useLoaderData();
    const { user } = useAuth()
    const userservices = services.filter(service => service.user_email == user?.email);
    return (
        <div>
            <div className="bg-white p-2">
                <h2 className="flex justify-center items-center gap-2 text-3xl font-bold my-3">Your Recent Document History</h2>
            </div>
            <div>
                <div className="overflow-x-auto my-10 bg-white">
                    <table className="table table-zebra ">
                        <thead className="bg-[#42453d]">
                            <tr>
                                <th className="text-base text-white">Index</th>
                                <th className="text-base text-white">Date</th>
                                <th className="text-base text-white">Tool</th>
                                <th className="text-base text-white">Number of Files</th>
                                <th className="text-base text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userservices?.map((service, index) => <tr key={service._id}>
                                <th className="font-bold text-lg">{index + 1}</th>
                                <td className="font-bold text-lg">{service.date}</td>
                                <td className="font-bold text-lg">{service.service_name}</td>
                                <td className="font-bold text-lg">{service.no_of_files}</td>
                                <td className="font-bold text-lg">Done ✅</td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecentDocumentHistory;