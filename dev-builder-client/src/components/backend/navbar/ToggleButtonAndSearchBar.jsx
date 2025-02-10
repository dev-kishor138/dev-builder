// Importing necessary components: Icon from iconify for displaying icons
import { Icon } from "@iconify/react/dist/iconify.js";

// ToggleButtonAndSearchBar component definition
const ToggleButtonAndSearchBar = ({ sidebarControl, sidebarActive, mobileMenuControl }) => {
    return (
        <div className="d-flex flex-wrap align-items-center gap-4">
            {/* Sidebar toggle button to open/close sidebar */}
            <button
                type="button"
                className="sidebar-toggle"
                onClick={sidebarControl} // Trigger the sidebar control function when clicked
            >
                {/* Conditionally render the sidebar icon based on whether the sidebar is active */}
                {sidebarActive ? (
                    // If sidebar is active, show the right arrow (close sidebar)
                    <Icon
                    
                        icon="iconoir:arrow-right"
                        className="icon text-2xl non-active"
                    />
                ) : (
                    // If sidebar is inactive, show the hamburger bars (open sidebar)
                    <Icon
                        icon="heroicons:bars-3-solid"
                        className="icon text-2xl non-active"
                    />
                )}
            </button>

            {/* Mobile menu toggle button */}
            <button
                onClick={mobileMenuControl} // Trigger the mobile menu control function when clicked
                type="button"
                className="sidebar-mobile-toggle"
            >
                {/* Hamburger bars icon for mobile menu */}
                <Icon
                    icon="heroicons:bars-3-solid"
                    className="icon"
                />
            </button>

            {/* Search bar form */}
            <form className="navbar-search">
                <input
                    type="text"
                    name="search"
                    placeholder="Search" // Placeholder text for the search input
                />
                {/* Search icon inside the search bar */}
                <Icon icon="ion:search-outline" className="icon" />
            </form>
        </div>
    );
};

// Exporting the component for use in other parts of the application
export default ToggleButtonAndSearchBar;
