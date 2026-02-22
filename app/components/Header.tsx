import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-[#212529] uppercase py-2 px-4 flex justify-between items-center relative">
            <div className="flex items-center">
                <Link to="/" className="text-white text-xl font-medium mr-8" onClick={closeMenu}>
                    Mustafa Ali Eren
                </Link>
                <div className="hidden lg:flex space-x-4">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-item nav-link text-gray-400 hover:text-white transition-colors ${isActive ? "text-white" : ""}`
                        }
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            `nav-item nav-link text-gray-400 hover:text-white transition-colors ${isActive ? "text-white" : ""}`
                        }
                    >
                        Experiences
                    </NavLink>
                </div>
            </div>

            <button
                className="lg:hidden text-white p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-3xl">menu</span>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#212529] lg:hidden z-50 flex flex-col items-end px-4 pb-4">
                    <NavLink
                        to="/about"
                        className="text-gray-400 hover:text-white py-2"
                        onClick={closeMenu}
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className="text-gray-400 hover:text-white py-2"
                        onClick={closeMenu}
                    >
                        Experiences
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
