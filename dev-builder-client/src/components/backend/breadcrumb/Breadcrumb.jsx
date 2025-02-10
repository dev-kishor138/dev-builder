// Importing necessary components and icons
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// Breadcrumb component definition
const Breadcrumb = ({ title, section }) => {
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
            {/* Display the section name (e.g., Dashboard, Settings) */}
            <h6 className="fw-semibold mb-0">{section}</h6>

            {/* Breadcrumb navigation */}
            <ul className="d-flex align-items-center gap-2">
                {/* Home link - navigates to the homepage */}
                <li className="fw-medium">
                    <Link
                        to="/" // Link to the homepage
                        className="d-flex align-items-center gap-1 hover-text-primary"
                    >
                        {/* Home icon */}
                        <Icon
                            icon="solar:home-smile-angle-outline"
                            className="icon text-lg"
                        />
                        {/* Display the section name */}
                        {section}
                    </Link>
                </li>
                {/* Separator (hyphen) between section and title */}
                <li> - </li>

                {/* Display the current page title */}
                <li className="fw-medium">{title}</li>
            </ul>
        </div>
    );
};

// Exporting the Breadcrumb component to be used elsewhere in the app
export default Breadcrumb;
