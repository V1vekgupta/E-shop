import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { adminNavigation, sellerNavigation } from "../../utils";
import classNames from "classnames";

const Sidebar = ({ isProfileLayout = false }) => {
    const pathName = useLocation().pathname;
    const { user } = useSelector((state) => state.auth);

    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

    const sideBarLayout = isAdmin ? adminNavigation : sellerNavigation;

    return (
        <div className="flex flex-col h-screen w-[260px] bg-gradient-to-b from-black via-gray-900 to-black border-r border-gray-800 shadow-xl px-4 py-5">

            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                    <FaTachometerAlt className="text-indigo-500 text-xl" />
                </div>
                <h1 className="text-white text-lg font-bold tracking-wide">
                    {isAdmin ? "Admin Panel" : "Seller Panel"}
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <ul className="space-y-2">
                    {sideBarLayout.map((item) => {
                        const isActive = pathName === item.href;

                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className={classNames(
                                        "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group relative",
                                        isActive
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {/* Active Indicator */}
                                    {isActive && (
                                        <span className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-r-md"></span>
                                    )}

                                    {/* Icon */}
                                    <item.icon
                                        className={classNames(
                                            "text-lg transition duration-300",
                                            isActive
                                                ? "text-white"
                                                : "text-gray-400 group-hover:text-white"
                                        )}
                                    />

                                    {/* Text */}
                                    <span className="tracking-wide">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section (Optional Branding) */}
            <div className="mt-6 text-xs text-gray-500 text-center">
                {isAdmin ? "Admin Dashboard" : "Seller Dashboard"}
            </div>
        </div>
    );
};

export default Sidebar;