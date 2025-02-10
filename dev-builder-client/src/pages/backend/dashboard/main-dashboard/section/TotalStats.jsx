import DashboardCard from "../../../../components/card/DashboardCard";
import { useGetFooterQuery } from "../../../../redux/features/api/mainDashboardApiSlice";

const othersData = [
    {
        icon: "material-symbols:account-balance-wallet", // Icon to be displayed in the card
        stats: 5000, // Stats representing positive change
        color: "cyan", // Color for the card
    },
    {
        icon: "mdi:bank",
        stats: -2000, // Stats representing negative change
        color: "purple",
    },
    {
        icon: "carbon:purchase",
        stats: 7000,
        color: "info",
    },
    {
        icon: "mdi:chart-line",
        stats: -400,
        color: "success-main",
    },
];

const TotalStats = () => {
    const { data, error, isLoading } = useGetFooterQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

    const enrichedData = data?.data.map((item, index) => ({
        ...item,
        icon: othersData[index]?.icon || "default:icon-name", // Add icon
        stats: othersData[index]?.stats || 0, // Add stats
        color: othersData[index]?.color || "default-color", // Add color
    }));
    return (
        <div className="col-xl-7">
            <div className="row gy-4">
                {/* Filtering and mapping through the data array to display DashboardCard for each item */}
                {enrichedData?.map((element) => (
                    <DashboardCard key={element.id} element={element} />
                ))}
            </div>
        </div>
    );
};

export default TotalStats;
