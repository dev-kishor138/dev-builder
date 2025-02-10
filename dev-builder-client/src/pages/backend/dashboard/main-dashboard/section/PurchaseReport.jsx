import { Icon } from "@iconify/react";
import useReactApexChart from "../../../../hooks/useReactApexChart";
import ReactApexChart from "react-apexcharts";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useGetPurchaseReportQuery } from "../../../../redux/features/api/mainDashboardApiSlice";

const PurchaseReport = () => {
    // let { chartOptions, chartSeries } = useReactApexChart();
    const { data, error, isLoading } = useGetPurchaseReportQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;
    return (
        <div className="col-xl-4">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h6 className="text-lg mb-0">Purchase Report</h6>
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
                            height: "160px",
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={data?.data || []}
                                margin={{
                                    top: 5,
                                    right: 20,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                {/* Horizontal grid lines only */}
                                <CartesianGrid
                                    horizontal={true}
                                    vertical={false}
                                    strokeDasharray="3 3"
                                    stroke="rgba(0, 0, 0, 0.1)"
                                />
                                {/* Smaller font size for ticks */}
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: "#666" }} // Smaller font size
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: "#666" }} // Smaller font size
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: "rgba(0, 0, 0, 0.8)",
                                        color: "#fff",
                                        border: "none",
                                        fontSize: 10, // Smaller font size in tooltip
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#8884d8"
                                    dot={false}
                                    activeDot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseReport;
