// Importing necessary components

import BlogStats from "./section/BlogStats";

// import { Breadcrumb } from "react-bootstrap";
// import TotalTopStats from "./section/TotalTopStats";
// import ProfitLoss from "./section/ProfitLoss";
// import SalesAnalytics from "./section/SalesAnalytics";
// import TotalCostInOut from "./section/TotalCostInOut";
// import PurchaseReport from "./section/PurchaseReport";
// import TotalStats from "./section/TotalStats";
// import Revenue from "./section/Revenue";

// MainDashboard functional component
const MainDashboard = () => {
    return (
        <>

            {/* <h2 className="text-4xl"> This is Dashboard</h2> */}
            <BlogStats />
            {/* Breadcrumb component to display page navigation */}
            {/* <Breadcrumb section="Dashboard" title="Main Dashboard" /> */}
            {/* Grid layout for displaying the dashboard cards */}

            {/* <TotalTopStats />
            <section className="row gy-4 mt-1">
                <ProfitLoss />
                <SalesAnalytics />
                <TotalCostInOut />
                <PurchaseReport />
                <TotalStats />
                <Revenue />
            </section> */}
        </>
    );
};

// Exporting the MainDashboard component for use in other parts of the application
export default MainDashboard;
