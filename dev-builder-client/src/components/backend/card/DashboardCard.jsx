// Importing Icon component for displaying icons
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// DashboardCard component definition
const DashboardCard = ({ element = {} }) => {
    // Destructuring the element object to extract necessary properties
    const { title, value, icon, id, color, stats, url } = element || {};

    return (
        <Link to={url}>
        <div className="col-md-12">
            {" "}
            {/* Wrapper div for the card */}
            {/* Card component with dynamic background color and shadow */}

                <div
                    className={`card shadow-none border bg-gradient-start-${id} h-100`}
                >
                    {/* Card body containing the content */}
                    <div className="card-body p-20">
                        {/* Flex container for the header section */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                {/* Display the name and value of the card */}
                                <p className="fw-medium text-primary-light mb-1">
                                    {title || "N/A"}{" "}
                                    {/* Default to "N/A" if no name */}
                                </p>
                                <h6 className="mb-0">{value || 0}</h6>{" "}
                                {/* Default to 0 if no value */}
                            </div>
                            {/* Icon container */}
                            <div
                                className={`w-50-px h-50-px bg-${
                                    color ?? "cyan"
                                } rounded-circle d-flex justify-content-center align-items-center`}
                            >
                                {/* Display icon with dynamic icon prop or default one */}
                                <Icon
                                    icon={icon || "gridicons:multiple-users"}
                                    className="text-white text-2xl mb-0"
                                />
                            </div>
                        </div>
                        {/* Footer section displaying stats and comparison */}
                        <p className="fw-medium text-xs text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                            <span
                                className={`d-inline-flex align-items-center gap-1 ${
                                    stats > 0
                                        ? "text-success-main"
                                        : "text-danger-main"
                                }`}
                            >
                                <Icon
                                    icon={
                                        stats > 0
                                            ? "bxs:up-arrow"
                                            : "bxs:down-arrow"
                                    }
                                    className="text-xs"
                                />
                                {stats ?? 0}
                            </span>
                            Last 30 days {title ?? "N/A"}
                        </p>
                    </div>
                </div>

        </div>
        </Link>
    );
};

// Exporting DashboardCard component to be used in other parts of the app
export default DashboardCard;
