import useUsers from "../../../hooks/useUsers";
import { Chart } from "react-google-charts";

const SubscriptionTypeDonutChart = () => {

    const [users] = useUsers();
    const monthlyUsers = users.filter(item => item.subscription_type === "monthly");
    const yearlyUsers = users.filter(item => item.subscription_type === "yearly");


    const totalMontlyUsersPercentage = (monthlyUsers.length / users.length) * 100;
    const totalYearlyUsersPercentage = (yearlyUsers.length / users.length) * 100;

    const data = [
        ["Montly Subscription's user", "Yearly Subscription's user"],
        ["Percentage of Monthly Users", totalMontlyUsersPercentage],
        ["Percentage Yearly Users", totalYearlyUsersPercentage],
    ];

    const chartColors = ["#52ab98", "#2b6777"];

    const options = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
        colors: chartColors
    };

    return (
        <>
            <div className="max-w-screen-lg mx-auto overflow-auto my-4 md:my-8 p-5">
                <div>
                    <h1 className="text-xl text-teal font-bold">Percentage of Montly and Yearly Subscriptions</h1>
                </div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
        </>
    );
};

export default SubscriptionTypeDonutChart;