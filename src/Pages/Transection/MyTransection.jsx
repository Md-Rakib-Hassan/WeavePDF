
import { MdPayment } from "react-icons/md";


const MyTransection = () => {
    const { payments } = true;

    return (
        <div className="bg-white p-2">
            <div>
                <div className="">
                    <h2 className="flex justify-center items-center gap-2 text-3xl font-bold my-7">My Transection <MdPayment></MdPayment></h2>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra bg-[#42453d]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-base text-white">Index</th>
                            <th className="text-base text-white">Transaction ID</th>
                            <th className="text-base text-white">Payment</th>
                            <th className="text-base text-white">Date</th>
                            <th className="text-base text-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments?.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment.transactionId}</td>
                            <td>$ {payment.price}</td>
                            <td>{payment.date}</td>
                            <td>{payment.status}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTransection;