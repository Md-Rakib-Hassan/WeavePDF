import useUsers from "../../../hooks/useUsers";
import DataTable from 'react-data-table-component';
import SubscriptionTypeDonutChart from "./SubscriptionTypeDonutChart";
import SubscriptionTypeColumnChart from "./SubscriptionTypeColumnChart";
import ManageSubscriptionsCard from "./ManageSubscriptionsCard";

const ManageSubscriptions = () => {

    const [users] = useUsers();
    const premiumUsers = users.filter(item => item.isPremium === true);

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#2b6777',
                color: 'white'
            }
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: '600',
            }
        },
        cells: {
            style: {
                fontSize: '16px',
                fontWeight: '500',
                // padding: '1rem',
            }
        },
    }

    const columns = [
        {
            name: 'Serial Number',
            selector: row => row.id
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Subscription Type',
            selector: row => row.status
        },
        {
            name: 'Delete',
            cell: (row) => <img src={row.image} alt="delete" style={{ width: '50px', height: '50px', borderRadius: '50px', margin: '3px', cursor: 'pointer' }} />,
        }
    ]
    const data = premiumUsers?.map((users, index) => ({
        id: index + 1,
        name: users?.user_Name,
        image: users?.user_Profile_Picture,
        email: users?.user_Email,
        status: users?.subscription_type,
    }));

    return (
        <>
            <div className="container mx-auto overflow-hidden m-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10 items-center">
                    <div className=' lg:w-5/6 drop-shadow-2xl'>
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                            responsive
                            pagination
                            paginationPerPage={10}
                            paginationRowsPerPageOptions={[10, 15, 20]} />
                    </div>
                    <div className="lg:w-1/2">
                        <ManageSubscriptionsCard></ManageSubscriptionsCard>
                    </div>
                </div>
                <div className="my-20 flex flex-col lg:flex-row lg:items-center lg:gap-10">
                    <div className="lg:w-5/6 mb-6 lg:mb-0 lg:rounded-lg lg:p-4 bg-base-100 shadow-xl">
                        <SubscriptionTypeColumnChart></SubscriptionTypeColumnChart>
                    </div>
                    <div className="lg:w-1/2 lg:rounded-lg lg:p-4 bg-base-100 shadow-xl">
                        <SubscriptionTypeDonutChart></SubscriptionTypeDonutChart>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ManageSubscriptions;