import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import { useGetSalesAnalyticsQuery } from "../../../../redux/features/api/mainDashboardApiSlice";
import { useState } from "react";

// const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
// ];

const renderActiveShape = (props) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        value,
    } = props;

    return (
        <g>
            <text
                x={cx}
                y={cy - 10}
                textAnchor="middle"
                fill={fill}
                fontSize="16"
                fontWeight="bold"
            >
                {payload.name}
            </text>
            <text
                x={cx}
                y={cy + 10}
                textAnchor="middle"
                fill="#333"
                fontSize="14"
            >
                {`Value: ${value}`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
        </g>
    );
};

const SalesAnalytics = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    // let { donutChartSeries, donutChartOptions } = useReactApexChart();
    const { data, error, isLoading } = useGetSalesAnalyticsQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;
    return (
        <div className="col-xl-5">
            <div className="card h-100 radius-8 border-0 overflow-hidden">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg">
                            Sales Analytics
                        </h6>
                        <div className="">
                            <select
                                className="form-select form-select-sm w-auto bg-base border text-secondary-light"
                                defaultValue="Today"
                            >
                                <option value="Today">Today</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "200px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data?.data || []}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <ul className="d-flex flex-wrap align-items-center justify-content-center mt-3 gap-3">
                        {data.data.map((element) => (
                            <li
                                className="d-flex align-items-center gap-2"
                                key={element.name}
                            >
                                <span className="w-12-px h-12-px radius-2 bg-primary-600" />
                                <span className="text-secondary-light text-xs fw-normal">
                                    {element.name} :
                                    <span className="text-primary-light fw-semibold">
                                        {element.value}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;
