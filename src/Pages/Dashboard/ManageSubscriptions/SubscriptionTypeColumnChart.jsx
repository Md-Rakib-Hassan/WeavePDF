import Chart from "react-google-charts";
import useUsers from "../../../hooks/useUsers";
import moment from "moment";

const SubscriptionTypeColumnChart = () => {

    const [users] = useUsers();
    const monthlyUsers = users.filter(item => item.subscription_type === "monthly");
    const yearlyUsers = users.filter(item => item.subscription_type === "yearly");


    const totalMontlyUsersPercentage = (monthlyUsers.length / users.length) * 100;
    const totalYearlyUsersPercentage = (yearlyUsers.length / users.length) * 100;

    const recentMonth = moment().format("MM YYYY");
    // console.log(recentMonth)

    const data = [
        ["Subscription Type", "Percentage", { role: "style" }],
        [`Montly Subscription's Users (${recentMonth})`, totalMontlyUsersPercentage, "#52ab98"],
        [`Yearly Subscription's Users (${recentMonth})`, totalYearlyUsersPercentage, "#2b6777"],
    ];


    return (
        <>
            <div className="max-w-screen-lg mx-auto overflow-auto my-4 md:my-8 p-5">
                <div>
                    <h1 className="text-xl text-teal font-bold">Montly and Yearly Subscriptions percentage in a month</h1>
                </div>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={data}
                />
            </div>
        </>
    );
};

export default SubscriptionTypeColumnChart;