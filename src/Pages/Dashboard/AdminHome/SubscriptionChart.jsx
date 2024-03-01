import useUsers from "../../../hooks/useUsers";
import { Chart } from "react-google-charts";

const SubscriptionChart = () => {
    const [users] = useUsers();
    const premiumUsers = users.filter(item => item.isPremium === true);
    const totalUsers = users.length;

    const totalUsersPercentage = (totalUsers / totalUsers) * 100;
    const premiumUsersPercentage = (premiumUsers.length / totalUsers) * 100;

    const data = [
        ["Category", "Percentage", { role: "style" }],
        ["Premium Users", premiumUsersPercentage, "#52ab98"],
        ["Total Users", totalUsersPercentage, "#2b6777"], // RGB value
    ];

    return (
        <>
            {/* <div>
                <div>
                    <h1 className="text-xl text-teal font-bold">Subscription and users percentage</h1>
                </div>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="500px"
                    data={data}
                />
            </div> */}

            <div className="max-w-screen-lg mx-auto overflow-auto my-4 md:my-8 p-5">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl text-teal font-bold">Subscription and Users Percentage</h1>
                </div>
                <div className="w-full">
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="500px"
                        data={data}
                    />
                </div>
            </div>

        </>
    );
};

export default SubscriptionChart;

