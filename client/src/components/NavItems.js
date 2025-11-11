"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar.js";
import { FaBookOpen, FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { LiaCookieSolid } from "react-icons/lia";

const navItems = [
    { name: "Home", url: `/`, icon: <FaHome size={20} /> },
    {
        name: "About",
        icon: <FaBookOpen size={18} />,
        url: "/about",
    },
    {
        name: "Services",
        icon: <GrServices size={18} />,
        url: "/services",
    },
    {
        name: "Contact",
        icon: <FaPhoneAlt size={18} />,
        url: "/contact",
    },
    {
        name: "Categories",
        icon: <BiSolidCategoryAlt size={18} />,
        url: "#",
        dropdown: [
            {
                name: "Biscuits",
                url: `/category/biscuits`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Breakfast & Spreads",
                url: `/category/breakfast-and-spreads`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Chocolates & Desserts",
                url: `/category/chocolates-and-desserts`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Cold Drinks & Juices",
                url: `/category/cold-drinks-and-juices`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Dairy, Bread & Eggs",
                url: `/category/dairy-bread-and-eggs`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Instant Foods",
                url: `/category/instant-foods`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Snacks",
                url: `/category/snacks`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Cakes & Bakes",
                url: `/category/cakes-and-bakes`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Dry Fruits, Oil & Masalas",
                url: `/category/dry-fruits-oil-and-masalas`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Meat",
                url: `/category/meat`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Rice, Atta & Dals",
                url: `/category/rice-atta-and-dals`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Tea, Coffee & More",
                url: `/category/tea-coffee-and-more`,
                icon: <LiaCookieSolid size={18} />,
            },
            {
                name: "Supplements & Mores",
                url: `/category/supplements-and-mores`,
                icon: <LiaCookieSolid size={18} />,
            },
        ],
    },
];

export default navItems;