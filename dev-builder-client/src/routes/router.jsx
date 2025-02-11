import { createBrowserRouter } from "react-router-dom";

// Importing page components for different routes
import RootLayout from "../layouts/RootLayout";
import FrontendLayouts from "../layouts/frontend/FrontendLayouts";
import MainLayouts from "../layouts/backend/MainLayouts";
import MainDashboard from "../pages/backend/dashboard/main-dashboard/MainDashboard";

// const ErrorBoundary = ({ error }) => {
//     console.error("Error caught:", error);
//     return "404 Not Found";
// };
// Creating the router configuration for the application
export const router = createBrowserRouter([
    {
        path: "/", // Root path
        element: <RootLayout />, // Main layout for the site
        // errorElement: <ErrorBoundary />,
        children: [
            {
                path: "",
                element: <FrontendLayouts />
            },
            {
                path: "admin",
                element: <MainLayouts />,
                children: [
                    {
                        path: "", // Main Dashboard
                        element: <MainDashboard />,
                    },
                    // {
                    //     path: "/sale-dashboard", // Sale Dashboard
                    //     element: <SaleDashboard />,
                    // },
                    // {
                    //     path: "/asset-dashboard", // Asset Dashboard
                    //     element: <AssetDashboard />,
                    // },
                    // {
                    //     path: "/expense-dashboard", // Expense Dashboard
                    //     element: <ExpenseDashboard />,
                    // },
                    // {
                    //     path: "/payroll-dashboard", // Payroll Dashboard
                    //     element: <PayrollDashboard />,
                    // },
                    // {
                    //     path: "/add-product", // Add Product Page
                    //     element: <AddProduct />,
                    // },
                    // {
                    //     path: "/manage-product", // Manage Product Page

                    //     element: <ProductManagement />,
                    // },
                    // {
                    //     path: "/category", // Product Category Page
                    //     element: <Category />,
                    // },
                    // {
                    //     path: "/subcategory", // Product Subcategory Page
                    //     element: <Subcategory />,
                    // },
                    // {
                    //     path: "/brand", // Product Brand Page
                    //     element: <Brand />,
                    // },
                    // {
                    //     path: "/unit", // Product Unit Page
                    //     element: <Unit />,
                    // },
                    // {
                    //     path: "/size", // Product Size Page
                    //     element: <ProductSize />,
                    // },
                    // {
                    //     path: "/supplier", // Supplier Management Page
                    //     element: <Supplier />,
                    // },
                    // {
                    //     path: "/customer", // Customer Management Page
                    //     element: <Customer />,
                    // },
                    // {
                    //     path: "/primary-ledger", // Primary Ledger Page
                    //     element: <PrimaryLedger />,
                    // },
                    // {
                    //     path: "/ledger", // Child Ledger Page
                    //     element: <ChildLedger />,
                    // },
                    // {
                    //     path: "/sub-ledger", // Sub Ledger Page
                    //     element: <SubLedger />,
                    // },
                    // {
                    //     path: "/bank", // Bank Management Page
                    //     element: <Bank />,
                    // },
                    // {
                    //     path: "/loan-management", // Loan Management Page
                    //     element: <LoanManagement />,
                    // },
                    // {
                    //     path: "/transaction", // Transaction Page
                    //     element: <Transaction />,
                    // },
                    // {
                    //     path: "/conveyance-bill", // Conveyance Bill Page
                    //     element: <ConveyanceBill />,
                    // },
                    // {
                    //     path: "/conveyance-report", // Conveyance Report Page
                    //     element: <ConveyanceReport />,
                    // },
                    // {
                    //     path: "/salary-sheet", // Salary Sheet Page
                    //     element: <SalarySheet />,
                    // },
                    // {
                    //     path: "/product-purchase", // Salary Sheet Page
                    //     element: <Purchase />,
                    // },
                    // {
                    //     path: "/manage-purchase", // Salary Sheet Page
                    //     element: <ManagePurchase />,
                    // },
                ],

            },
        ]
    },
]);
