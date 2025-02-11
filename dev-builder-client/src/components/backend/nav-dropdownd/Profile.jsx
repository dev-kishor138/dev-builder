// Importing necessary components: Icon from iconify for displaying icons and Link from react-router-dom for navigation
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import userImage from '../../../assets/backend/images/users/user1.png'

// Profile component definition
const Profile = () => {
    return (

        <div className="dropdown">
            {/* Profile button that triggers the dropdown on click */}
            <button
                className="d-flex justify-content-center align-items-center rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
            >
                {/* User profile image */}
                <img
                    src={userImage}
                    alt="image_user"
                    className="w-40-px h-40-px object-fit-cover rounded-circle"
                />
            </button>

            {/* Dropdown menu for profile options */}
            <div className="dropdown-menu to-top dropdown-menu-sm">
                {/* Profile header section with username and role */}
                <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                    <div>
                        {/* Displaying user name */}
                        <h6 className="text-lg text-primary-light fw-semibold mb-2">
                            Shaidul Islam
                        </h6>
                        {/* Displaying user role */}
                        <span className="text-secondary-light fw-medium text-sm">
                            Admin
                        </span>
                    </div>
                    {/* Button for closing or dismissing the dropdown */}
                    <button
                        type="button"
                        className="hover-text-danger"
                    >
                        {/* Close icon */}
                        <Icon
                            icon="radix-icons:cross-1"
                            className="icon text-xl"
                        />
                    </button>
                </div>

                {/* Profile options list */}
                <ul className="to-top-list">
                    {/* Profile link */}
                    <li>
                        <Link
                            className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                            to="#"
                        >
                            <Icon
                                icon="solar:user-linear"
                                className="icon text-xl"
                            />{" "}
                            My Profile
                        </Link>
                    </li>

                    {/* Inbox link */}
                    <li>
                        <Link
                            className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                            to="#"
                        >
                            <Icon
                                icon="tabler:message-check"
                                className="icon text-xl"
                            />{" "}
                            Inbox
                        </Link>
                    </li>

                    {/* Settings link */}
                    <li>
                        <Link
                            className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                            to="#"
                        >
                            <Icon
                                icon="icon-park-outline:setting-two"
                                className="icon text-xl"
                            />
                            Setting
                        </Link>
                    </li>

                    {/* Log out link */}
                    <li>
                        <Link
                            className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                            to="#"
                        >
                            <Icon
                                icon="lucide:power"
                                className="icon text-xl"
                            />{" "}
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Exporting Profile component for use in other parts of the application
export default Profile;
