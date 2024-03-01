// import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import { Chart } from "react-google-charts";

const UserChart = () => {

    const [users] = useUsers();
    // console.log(users);

    const totalUsers = 100;

    // Calculate the percentage directly in the component
    const percentage = (users.length / totalUsers) * 100;

    const data = [
        ["Task", "Percentage"],
        ["Users", percentage],
        ["Out Of Hundred", totalUsers - users.length],
    ];

    const chartColors = ["#52ab98", "#2b6777"];
    const options = {
        title: "All Users Percentage",
        is3D: true,
        colors: chartColors,
    };

    return (
        <>
            <div className="max-w-screen-lg mx-auto overflow-auto my-4 md:my-8 p-5">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl text-teal font-bold">Total Users Percentage</h1>
                </div>
                <div className="w-full">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"500px"}
                    />
                </div>
            </div>

        </>
    );
};

export default UserChart;
