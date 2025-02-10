// Importing Icon component for displaying icons and Link component for navigation
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

// Notification component definition
const Notification = () => {
    return (
        
        <div className="dropdown">
            {/* Notification button that triggers the dropdown */}
            <button
                className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="dropdown"
            >
                {/* Bell icon to represent notifications */}
                <Icon
                    icon="iconoir:bell"
                    className="text-primary-light text-xl"
                />
            </button>
            {/* Dropdown menu for notifications */}
            <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                {/* Header for notifications with count indicator */}
                <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                    <div>
                        {/* Title for notifications */}
                        <h6 className="text-lg text-primary-light fw-semibold mb-0">
                            Notifications
                        </h6>
                    </div>
                    {/* Notification count indicator */}
                    <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                        05
                    </span>
                </div>
                {/* Scrollable container for individual notifications */}
                <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                    {/* Individual notification links */}
                    <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                    >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            {/* Icon representing the notification type */}
                            <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                <Icon
                                    icon="bitcoin-icons:verify-outline"
                                    className="icon text-xxl"
                                />
                            </span>
                            <div>
                                {/* Notification title and description */}
                                <h6 className="text-md fw-semibold mb-4">
                                    Congratulations
                                </h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                    Your profile has been Verified. Your profile has been Verified
                                </p>
                            </div>
                        </div>
                        {/* Timestamp of the notification */}
                        <span className="text-sm text-secondary-light flex-shrink-0">
                            23 Mins ago
                        </span>
                    </Link>
                    {/* Additional notifications with similar structure */}
                    <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                    >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                <img
                                    src="react/images/notification/profile-1.png"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h6 className="text-md fw-semibold mb-4">
                                    Ronald Richards
                                </h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                    You can stitch between artboards
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                            23 Mins ago
                        </span>
                    </Link>
                    <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                    >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                AM
                            </span>
                            <div>
                                <h6 className="text-md fw-semibold mb-4">
                                    Arlene McCoy
                                </h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                    Invite you to prototyping
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                            23 Mins ago
                        </span>
                    </Link>
                    <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                    >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                <img
                                    src="react/images/notification/profile-2.png"
                                    alt=""
                                />
                            </span>
                            <div>
                                <h6 className="text-md fw-semibold mb-4">
                                    Annette Black
                                </h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                    Invite you to prototyping
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                            23 Mins ago
                        </span>
                    </Link>
                    <Link
                        to="#"
                        className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                    >
                        <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                            <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                                DR
                            </span>
                            <div>
                                <h6 className="text-md fw-semibold mb-4">
                                    Darlene Robertson
                                </h6>
                                <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                                    Invite you to prototyping
                                </p>
                            </div>
                        </div>
                        <span className="text-sm text-secondary-light flex-shrink-0">
                            23 Mins ago
                        </span>
                    </Link>
                </div>
                {/* Link to view all notifications */}
                <div className="text-center py-12 px-16">
                    <Link
                        to="#"
                        className="text-primary-600 fw-semibold text-md"
                    >
                        See All Notification
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Exporting Notification component to be used in other parts of the app
export default Notification;
