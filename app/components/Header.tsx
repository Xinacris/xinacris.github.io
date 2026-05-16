import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#27282c] border-b border-[#3c3d41] px-6 py-3 flex justify-between items-center relative">
      <Link
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className="text-sm font-bold tracking-widest uppercase text-[#e8e5de] hover:no-underline"
      >
        Mustafa Ali Eren
      </Link>

      {/* Desktop nav */}
      <div className="hidden sm:flex gap-6 text-xs tracking-widest uppercase">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-colors ${isActive ? "text-[#e8e5de] font-bold" : "text-[#888] hover:text-[#e8e5de]"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `transition-colors ${isActive ? "text-[#e8e5de] font-bold" : "text-[#888] hover:text-[#e8e5de]"}`
          }
        >
          Experience
        </NavLink>
      </div>

      {/* Mobile toggle */}
      <button
        className="sm:hidden text-xs tracking-widest uppercase text-[#888]"
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "close" : "menu"}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#27282c] border-b border-[#3c3d41] flex flex-col px-6 pb-4 pt-2 z-50 sm:hidden">
          <NavLink
            to="/about"
            className="py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className="py-1 text-xs tracking-widest uppercase text-[#888] hover:text-[#e8e5de]"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </NavLink>
        </div>
      )}
    </nav>
  );
}
