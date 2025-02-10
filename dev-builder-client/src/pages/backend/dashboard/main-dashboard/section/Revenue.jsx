import { Icon } from "@iconify/react";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useGetRevenueReportQuery } from "../../../../redux/features/api/mainDashboardApiSlice";

// const data = [
//     {
//         name: "Jan",
//         uv: 4000,
//         pv: 2400,
//     },
//     {
//         name: "Feb",
//         uv: 3000,
//         pv: 1398,
//     },
//     {
//         name: "Mar",
//         uv: 2000,
//         pv: 9800,
//     },
//     {
//         name: "Apr",
//         uv: 2780,
//         pv: 3908,
//     },
//     {
//         name: "May",
//         uv: 1890,
//         pv: 4800,
//     },
//     {
//         name: "Jun",
//         uv: 2390,
//         pv: 3800,
//     },
// ];

const Revenue = () => {
    const { data, error, isLoading } = useGetRevenueReportQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;
    return (
        <div className="col-xl-5">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h6 className="text-lg mb-0">Revenue</h6>
                        <select
                            className="form-select bg-base form-select-sm w-auto"
                            defaultValue="Yearly"
                            SalesAnalytics
                        >
                            <option value="Yearly">Yearly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Today">Today</option>
                        </select>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
                        <h6 className="mb-0">$27,200</h6>
                        <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                            10% <Icon icon="bxs:up-arrow" className="text-xs" />
                        </span>
                        <span className="text-xs fw-medium">
                            + $1500 Per Day
                        </span>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: "200px",
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data?.data || []}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid
                                    horizontal={true}
                                    vertical={false}
                                    stroke="rgba(0, 0, 0, 0.1)"
                                />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: "#666" }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: "#666" }}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="pv"
                                    stackId="a"
                                    fill="#4C4EB5"
                                    barSize={20}
                                />
                                <Bar
                                    dataKey="uv"
                                    stackId="a"
                                    fill="#FF5807"
                                    radius={[5, 5, 0, 0]}
                                    barSize={20}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
