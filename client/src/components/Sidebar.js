"use client";
import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaUser, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

import { ThemeContext } from "../context/ThemeContext"; // To be created


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Sidebar background based on theme
  const sidebarBg =
    theme === "dark"
      ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
      : "bg-gray-200";

  return (
    <>
      {/* Hamburger button (visible only on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 text-2xl text-gray-800 dark:text-gray-100 focus:outline-none"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 ${sidebarBg} shadow-xl border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">LOGO</h1>
        </div>

        {/* Search Bar */}
        {/* <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none"
          />
        </div> */}

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center justify-center py-4 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full absolute bottom-0 flex items-center justify-center">
            <div></div>
            <div>
              <p>&copy; 2025 NutriLens</p>
            </div>
        </div>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
