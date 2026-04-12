import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";
import { getEffectiveRole } from "../../utils/role";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    const effectiveRole = getEffectiveRole(user);
    const isAdmin = effectiveRole === "ADMIN";
    const isSeller = effectiveRole === "SELLER";

    return (
        <div className="h-[70px] bg-gradient-to-r from-black via-gray-900 to-black text-white z-50 flex items-center sticky top-0 backdrop-blur-lg border-b border-gray-800 shadow-lg">

            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center text-2xl font-bold tracking-wide hover:scale-105 transition duration-300">
                    <FaStore className="mr-2 text-3xl text-purple-500" />
                    <span className="font-[Poppins] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            E-Shop
          </span>
                </Link>

                {/* Nav Links */}
                <ul className={`
          flex sm:gap-8 gap-5 sm:items-center text-sm sm:static absolute left-0 top-[70px]
          ${navbarOpen ? "h-fit py-5" : "h-0 overflow-hidden"}
          transition-all duration-300 ease-in-out
          sm:h-fit sm:bg-transparent bg-black/95 backdrop-blur-md
          sm:w-fit w-full sm:flex-row flex-col px-6 sm:px-0
        `}>

                    {/* Reusable link style */}
                    {[
                        { name: "Home", path: "/" },
                        { name: "Products", path: "/products" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`relative transition duration-300 ${
                                    path === item.path
                                        ? "text-white font-semibold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {item.name}
                                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300 ${
                                    path === item.path ? "w-full" : "w-0 group-hover:w-full"
                                }`}></span>
                            </Link>
                        </li>
                    ))}

                    {/* Admin Panel */}
                    {isAdmin && (
                        <li>
                            <Link
                                to="/admin"
                                className={`${
                                    path.startsWith("/admin")
                                        ? "text-white font-semibold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                Admin Panel
                            </Link>
                        </li>
                    )}

                    {/* Seller Panel */}
                    {isSeller && (
                        <li>
                            <Link
                                to="/seller"
                                className={`${
                                    path.startsWith("/seller")
                                        ? "text-white font-semibold"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                Seller Panel
                            </Link>
                        </li>
                    )}

                    {/* Cart (only user) */}
                    {!isAdmin && !isSeller && (
                        <li>
                            <Link to="/cart" className="hover:scale-110 transition duration-300">
                                <Badge
                                    showZero
                                    badgeContent={cart?.length || 0}
                                    color="primary"
                                    overlap="circular"
                                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                >
                                    <FaShoppingCart size={22} />
                                </Badge>
                            </Link>
                        </li>
                    )}

                    {/* Auth */}
                    {user && user.id ? (
                        <li>
                            <UserMenu />
                        </li>
                    ) : (
                        <li>
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-4 py-2
                  bg-gradient-to-r from-purple-600 to-pink-500
                  rounded-lg shadow-md hover:shadow-purple-500/40
                  hover:scale-105 transition duration-300"
                            >
                                <FaSignInAlt />
                                Login
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="sm:hidden"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-white text-3xl" />
                    ) : (
                        <IoIosMenu className="text-white text-3xl" />
                    )}
                </button>

            </div>
        </div>
    );
};

export default Navbar;