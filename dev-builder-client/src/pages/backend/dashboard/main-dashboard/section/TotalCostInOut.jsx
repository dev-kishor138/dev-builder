import ReactApexChart from "react-apexcharts";
import useReactApexChart from "../../../../hooks/useReactApexChart";
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
import { useEffect, useState } from "react";
import { useGetCostInOutQuery } from "../../../../redux/features/api/mainDashboardApiSlice";

const TotalCostInOut = () => {
    // let { paymentStatusChartSeries, paymentStatusChartOptions } =
    //     useReactApexChart();
    const { data: costInOut, error, isLoading } = useGetCostInOutQuery();

    const [chartData, setChartData] = useState([]);

    // Map the API data dynamically if it's available
    useEffect(() => {
        if (costInOut?.payableData && costInOut?.receivableData) {
            const xLabels = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];

            const dynamicData = xLabels.map((label, index) => ({
                month: label,
                Receivable: costInOut.receivableData[index],
                Payable: costInOut.payableData[index],
            }));

            setChartData(dynamicData);
        }
    }, [costInOut]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

    return (
        <div className="col-xl-8">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg">
                            Cost In and Out
                        </h6>
                        <select
                            className="form-select form-select-sm w-auto bg-base border text-secondary-light"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select Time frame
                            </option>
                            <option value="Today">Today</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    {/* <ul className="d-flex flex-wrap align-items-center mt-3 gap-3">
                        <li className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px rounded-circle bg-primary-600" />
                            <span className="text-secondary-light text-sm fw-semibold">
                                Receivable:
                                <span className="text-primary-light fw-bold">
                                    500
                                </span>
                            </span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <span className="w-12-px h-12-px rounded-circle bg-yellow" />
                            <span className="text-secondary-light text-sm fw-semibold">
                                Payable:
                                <span className="text-primary-light fw-bold">
                                    300
                                </span>
                            </span>
                        </li>
                    </ul> */}
                    <div className="mt-40">
                        <div className="margin-16-minus">
                            <div style={{ width: "100%", height: "200px" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={chartData}
                                        margin={{
                                            top: 5,
                                            right: 50,
                                            left: 0,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid
                                            horizontal={false}
                                            vertical={false}
                                            strokeDasharray="3 3"
                                            stroke="rgba(0, 0, 0, 0.1)"
                                        />
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{
                                                fontSize: 12,
                                                fill: "#666",
                                            }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={false}
                                            label={false}
                                        />
                                        <Tooltip />
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
                                        <Bar
                                            dataKey="Receivable"
                                            fill="#0056FD"
                                            radius={[5, 5, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="Payable"
                                            fill="#5EC4F0"
                                            radius={[5, 5, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCostInOut;
