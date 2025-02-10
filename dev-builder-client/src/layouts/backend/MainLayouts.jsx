// Importing necessary modules and components
import { useEffect, useState } from "react"; // React hooks for state and effect
import { Outlet, useLocation } from "react-router-dom"; // Outlet for nested routes and useLocation for route tracking
import Footer from "./Footer"; // Footer component for the page
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import RouteScrollToTop from "../../helper/RouteScrollToTop";


// css file import 
import "../../assets/backend/css/style.css";
import "../../assets/backend/css/remixicon.css";
import "../../assets/backend/css/extra.css";
// import "../../assets/backend/css/lib/bootstrap.min.css";
import "../../assets/backend/css/lib/animate.min.css";
import "react-quill/dist/quill.snow.css";

// MainLayouts functional component for the main layout structure
const MainLayouts = () => {


    // State for managing sidebar and mobile menu visibility
    let [sidebarActive, seSidebarActive] = useState(false); // Sidebar active state
    let [mobileMenu, setMobileMenu] = useState(false); // Mobile menu active state
    const location = useLocation(); // Get current route location

    useEffect(() => {
        // Function to handle dropdown clicks in the sidebar
        const handleDropdownClick = (event) => {
            event.preventDefault(); // Prevent default link behavior
            const clickedLink = event.currentTarget; // Get the clicked link element
            const clickedDropdown = clickedLink.closest(".dropdown"); // Find the closest dropdown

            if (!clickedDropdown) return; // Exit if no dropdown is clicked

            const isActive = clickedDropdown.classList.contains("open"); // Check if the dropdown is already open

            // Close all dropdowns
            const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
            allDropdowns.forEach((dropdown) => {
                dropdown.classList.remove("open");
            });

            // Toggle the clicked dropdown
            if (!isActive) {
                clickedDropdown.classList.add("open"); // Open the clicked dropdown
            }
        };

        // Attach click event listeners to all dropdown triggers in the sidebar
        const dropdownTriggers = document.querySelectorAll(
            ".sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link"
        );

        dropdownTriggers.forEach((trigger) => {
            trigger.addEventListener("click", handleDropdownClick); // Add event listener to dropdown trigger
        });

        // Function to open the submenu based on the current route
        const openActiveDropdown = () => {
            const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
            allDropdowns.forEach((dropdown) => {
                const submenuLinks = dropdown.querySelectorAll(".sidebar-submenu li a");
                submenuLinks.forEach((link) => {
                    if (
                        link.getAttribute("href") === location.pathname || // Match current route
                        link.getAttribute("to") === location.pathname
                    ) {
                        dropdown.classList.add("open"); // Open dropdown if the route matches
                    }
                });
            });
        };

        // Open the submenu that contains the active route
        openActiveDropdown();

        // Cleanup event listeners when the component unmounts
        return () => {
            dropdownTriggers.forEach((trigger) => {
                trigger.removeEventListener("click", handleDropdownClick); // Remove click listener
            });
        };
    }, [location.pathname]); // Dependency on location.pathname to re-run effect on route change

    // Function to toggle the sidebar visibility
    let sidebarControl = () => {
        seSidebarActive(!sidebarActive); // Toggle sidebar active state
    };

    // Function to toggle mobile menu visibility
    let mobileMenuControl = () => {
        setMobileMenu(!mobileMenu); // Toggle mobile menu active state
    };

    return (
        <>
            {/* Scroll to top on route change */}
            <RouteScrollToTop />
            <section className={mobileMenu ? "overlay active" : "overlay "}>
                {/* Sidebar component */}
                <Sidebar
                    sidebarActive={sidebarActive}
                    mobileMenuControl={mobileMenuControl}
                    mobileMenu={mobileMenu}
                />
                <main
                    className={sidebarActive ? "dashboard-main active" : "dashboard-main"} // Main dashboard content
                >
                    {/* Navbar component */}
                    <Navbar
                        sidebarControl={sidebarControl}
                        sidebarActive={sidebarActive}
                        mobileMenuControl={mobileMenuControl}
                    />
                    <div className="dashboard-main-body">
                        {/* Outlet to render child routes */}
                        <Outlet />
                    </div>
                    {/* Footer component */}
                    <Footer />
                </main>
            </section>
        </>
    );
};

// Exporting MainLayouts component for use in other parts of the application
export default MainLayouts;
