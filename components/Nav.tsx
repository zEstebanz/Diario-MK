"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ChangeTheme from "./UI/ChangeTheme";

const navLinks = [
    { title: "Home", path: "/" },
    { title: "Ejercicios", path: "/ejercicios" },
    { title: "NewsHack", path: "/newshack" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-[#33353F] nav-bar">
            <div className="container flex items-center justify-between py-2 mx-auto lg:py-4 px-4">
                <Link href="/" className="text-3xl md:text-3xl text-white font-semibold">
                    <div className="flex items-center cursor-pointer">
                        <h1 className="text-white">
                            <span className="title-nav text-nav-link">dev-test</span>
                        </h1>
                    </div>
                </Link>
                

                <div className="mobile-menu block">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 text-nav-link"
                    >
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>

            </div>

            {/* Agregar menú desplegable aquí */}
            {navbarOpen && (
                <div className="absolute top-20 left-0 w-full text-white p-6 nav-open bg-black">
                    <ul className="flex flex-col items-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="text-nav-link block py-2 px-4 text-xl font-bold">{link.title}</p>
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
