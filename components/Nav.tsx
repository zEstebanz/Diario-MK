"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Articles", path: "/articles" },
    { title: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-[#33353F] bg-black">
            <div className="container flex items-center justify-between py-2 mx-auto lg:py-4 px-4">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    <h1 className="text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                            <span className="text-white">Logo</span>
                        </span>
                    </h1>
                </Link>

                <div className="mobile-menu block md:hidden">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>

                <div className={`menu hidden md:block md:w-auto ${navbarOpen ? "block" : "hidden"}`} id="navbar">
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-0">
                        <li>
                            <Link href={"/"}>
                                <p className="block py-2 px-4 text-[#ADB7BE] text-xl rounded hover:text-red-700">Home</p>
                            </Link>
                        </li>
                        {/* Agregar más elementos del menú aquí */}
                    </ul>
                </div>
            </div>

            {/* Agregar menú desplegable aquí */}
            {navbarOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white">
                    <ul className="flex flex-col items-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="block py-2 px-4 text-[#ADB7BE] text-xl hover:text-red-700">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
