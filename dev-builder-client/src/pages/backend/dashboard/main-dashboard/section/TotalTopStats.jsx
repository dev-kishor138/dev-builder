import DashboardCard from "../../../../components/card/DashboardCard";
import { useGetDataQuery } from "../../../../redux/features/api/mainDashboardApiSlice";

// Data for dashboard cards, contains information for each card
const othersData = [
    {
        icon: "solar:wallet-money-bold", // Icon to be displayed in the card
        stats: 5000, // Stats representing positive change
        color: "cyan", // Color for the card
        url: 'asset-dashboard'
    },
    {
        icon: "tabler:report-money",
        stats: -2000, // Stats representing negative change
        color: "purple",
        // url: 'asset-dashboard'
    },
    {
        icon: "solar:money-bag-bold",
        stats: 7000,
        color: "info",
        // url: 'asset-dashboard'
    },
    {
        icon: "solar:card-recive-bold",
        stats: -400,
        color: "success-main",
        url: 'expense-dashboard'
    },
];

const TotalTopStats = () => {
    const { data, error, isLoading } = useGetDataQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

    // Merge fields from othersData into data.data
    const enrichedData = data?.data.map((item, index) => ({
        ...item,
        icon: othersData[index]?.icon || "default:icon-name", // Add icon
        stats: othersData[index]?.stats || 0, // Add stats
        color: othersData[index]?.color || "default-color", // Add color
        url: othersData[index]?.url || "#", // Add url
    }));

    return (
        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
            {/* Mapping through the enriched data array to display DashboardCard for each item */}
            {enrichedData?.map((element) => (
                <DashboardCard key={element.id} element={element} />
            ))}
        </div>
    );
};

export default TotalTopStats;
