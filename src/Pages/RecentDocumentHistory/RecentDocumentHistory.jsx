
import useAuth from "../../hooks/useAuth";
import useService from "../../hooks/useService";
import Service from "../Profile/Service";


const RecentDocumentHistory = () => {
    const [services] = useService();
    const { user } = useAuth()
    const userservices = services.filter(service => service.user_email == user?.email)
    return (
        <div>
            <div className="bg-white p-2">
                <h2 className="flex justify-center items-center gap-2 text-3xl font-bold my-3">Your Recent Document History</h2>
            </div>
            <div>
                <div className='max-w-3xl mx-auto my-10'>
                    {
                        userservices ?
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className='bg-blue'>
                                            <th></th>
                                            <th>Date</th>
                                            <th>Tool</th>
                                            <th>No of Files</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            userservices.map((service, index) => <Service index={index} service={service} key={service.id}></Service>)
                                        }


                                    </tbody>
                                </table>
                            </div> :
                            <h1 className='text-xl text-center'>No tasks yet</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentDocumentHistory;