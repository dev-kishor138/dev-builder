import { Icon } from "@iconify/react";
import { useGetProfitLossQuery } from "../../../../redux/features/api/mainDashboardApiSlice";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const ProfitLoss = () => {
    // let { chartOptions, chartSeries } = useReactApexChart();
    const { data, isLoading, error } = useGetProfitLossQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;
    return (
        <div className="col-xl-7">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h6 className="text-lg mb-0">Profit vs Loss</h6>
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
                    <div style={{ width: "100%", height: "200px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={data?.data ?? []}
                                margin={{
                                    top: 5,
                                    right: 50,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                {/* Grid lines */}
                                <CartesianGrid
                                    horizontal={false}
                                    vertical={false}
                                    strokeDasharray="3 3"
                                    stroke="rgba(0, 0, 0, 0.1)"
                                />
                                {/* X-Axis */}
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: "#666" }}
                                />
                                {/* Y-Axis */}
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={false}
                                    label={false}
                                />
                                {/* Tooltip */}
                                <Tooltip
                                    contentStyle={{
                                        background: "rgba(0, 0, 0, 0.8)",
                                        color: "#fff",
                                        border: "none",
                                        fontSize: 10,
                                        borderRadius: 5,
                                    }}
                                />
                                {/* Profit Line */}
                                <Line
                                    type="monotone"
                                    dataKey="profit"
                                    stroke="#0056FD"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{ r: 5 }}
                                />
                                {/* Loss Line */}
                                <Line
                                    type="monotone"
                                    dataKey="loss"
                                    stroke="#6AD2FF"
                                    strokeWidth={3}
                                    dot={false}
                                    activeDot={{ r: 5 }}
                                />
                                {/* Legend */}
                                <Legend
                                    verticalAlign="top"
                                    align="left"
                                    wrapperStyle={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        marginLeft: "10px",
                                        textTransform: "capitalize",
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitLoss;
