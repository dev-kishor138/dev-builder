import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ sidebarActive, mobileMenuControl, mobileMenu }) => {
    return (
        <aside
            className={
                sidebarActive
                    ? "sidebar active "
                    : mobileMenu
                    ? "sidebar sidebar-open"
                    : "sidebar"
            }
            >
            <button
                onClick={mobileMenuControl}
                type="button"
                className="sidebar-close-btn"
            >
                <Icon icon="radix-icons:cross-2" />
            </button>
            <div>
                <Link to="/" className="sidebar-logo">
                    <img
                        src="accountant-logo.png"
                        alt="site logo"
                        className="light-logo"
                    />
                    <img
                        src="accountant-logo.png"
                        alt="site logo"
                        className="dark-logo"
                    />
                    <img
                        src="react/images/logo-icon.png"
                        alt="site logo"
                        className="logo-icon"
                    />
                </Link>
            </div>
            <div className="sidebar-menu-area">
                <ul className="sidebar-menu" id="sidebar-menu">
                    <li className="sidebar-menu-group-title">Main</li>
                    <li className="dropdown">
                        <Link to="#">
                            <Icon
                                icon="solar:home-smile-angle-outline"
                                className="menu-icon"
                            />
                            <span>Dashboard</span>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <NavLink
                                    to="/"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="tabler:layout-dashboard"
                                        className="text-primary-600 w-auto"
                                    />
                                    Main
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/sale-dashboard"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="carbon:shopping-cart"
                                        className="text-primary-600 w-auto"
                                    />
                                    Sale
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/asset-dashboard"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="tabler:building-skyscraper"
                                        className="text-primary-600 w-auto"
                                    />
                                    Asset
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/expense-dashboard"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="tabler:trending-down"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Expense
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/payroll-dashboard"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="mdi:account-cash-outline"
                                        className="text-primary-600 w-auto"
                                    />
                                    Payroll
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="sidebar-menu-group-title">
                        Store Management
                    </li>
                    <li className="dropdown">
                        <Link to="#">
                            <Icon icon="mdi:storefront" className="menu-icon" />
                            <span>Store </span>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <NavLink
                                    to="/add-product"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="fa:plus-circle"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/manage-product"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="fa:cogs"
                                        className="text-primary-600 w-auto"
                                    />
                                    Manage Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/category"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="mdi:folder-outline"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Category
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/subcategory"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="mdi:folder-multiple-outline"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Subcategory
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/brand"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="fa:tag"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Brand
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/unit"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="mdi:weight-kilogram"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Unit
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/size"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="mdi:resize"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Product Size
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#">
                            <Icon icon="mdi:storefront" className="menu-icon" />
                            <span>Purchase </span>
                        </Link>
                        <ul className="sidebar-submenu">
                            <li>
                                <NavLink
                                    to="/product-purchase"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="fa:plus-circle"
                                        className="text-primary-600 w-auto"
                                    />{" "}
                                    Product Purchase
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/manage-purchase"
                                    className={(navData) =>
                                        navData.isActive ? "active-page" : ""
                                    }
                                >
                                    <Icon
                                        icon="fa:cogs"
                                        className="text-primary-600 w-auto"
                                    />
                                    Manage Purchase
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink
                            to="/supplier"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="fa6-solid:handshake"
                                className="menu-icon"
                            />
                            <span>Supplier</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/customer"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="solar:users-group-rounded-linear"
                                className="menu-icon"
                            />
                            <span>Customer</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-group-title">Ledger</li>
                    <li>
                        <NavLink
                            to="/primary-ledger"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:file-document"
                                className="menu-icon"
                            />
                            <span>Primary Ledger</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ledger"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:folder-open"
                                className="menu-icon"
                            />
                            <span>Ledger</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sub-ledger"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:book-multiple"
                                className="menu-icon"
                            />
                            <span>Sub Ledger</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-menu-group-title">Accounting</li>
                    <li>
                        <NavLink
                            to="/bank"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:bank" className="menu-icon" />
                            <span>Bank</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/loan-management"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:cash-refund"
                                className="menu-icon"
                            />
                            <span>Loan Management</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/transaction"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:exchange" className="menu-icon" />
                            <span>Transaction</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/conveyance-bill"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:receipt-text-outline"
                                className="menu-icon"
                            />
                            <span>Conveyance Bill</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/conveyance-report"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:file-chart" className="menu-icon" />
                            <span>Conveyance Report</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/salary-sheet"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:cash-multiple"
                                className="menu-icon"
                            />
                            <span>Salary Sheet</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-menu-group-title">Assets</li>
                    <li>
                        <NavLink
                            to="/asset-management"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:database" className="menu-icon" />
                            <span>Assets Managment</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/asset-revaluation"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:finance" className="menu-icon" />
                            <span>Assets Revaluation</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-menu-group-title">Expenses</li>
                    <li>
                        <NavLink
                            to="/expense/view"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:chart-pie" className="menu-icon" />
                            <span>Expense Managment</span>
                        </NavLink>
                    </li>

                    <li className="sidebar-menu-group-title">Income</li>
                    <li>
                        <NavLink
                            to="/service-sale"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:cart-outline"
                                className="menu-icon"
                            />
                            <span>Service Sale</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/service/sale/view"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:clipboard-text-outline"
                                className="menu-icon"
                            />
                            <span>Service Sale Report</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-group-title">HR</li>
                    <li>
                        <NavLink
                            to="/departments"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:office-building"
                                className="menu-icon"
                            />
                            <span>Department</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/employee"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:account-group"
                                className="menu-icon"
                            />
                            <span>Employee Management</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/salary/structure"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon icon="mdi:calculator" className="menu-icon" />
                            <span>Salary Structure</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="employee/bonus"
                            className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }
                        >
                            <Icon
                                icon="mdi:gift-outline"
                                className="menu-icon"
                            />
                            <span>Employee Bonus</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
