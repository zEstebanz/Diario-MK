"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "https://portafolio-esteban-oller-nextjs.vercel.app/" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-[#33353F] bg-gray-800">
            <div className="container flex items-center justify-between py-2 mx-auto lg:py-4 px-4">
                <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src='https://cdn.icon-icons.com/icons2/1603/PNG/512/news-newspaper-media-paper-press-article_108607.png'
                            width={50}
                            height={50}
                            className="mr-2"
                            alt="DiarioMK Logo"
                        />
                        <h1 className="text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                <span className="text-white">DiarioMK</span>
                            </span>
                        </h1>
                    </div>
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
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="block py-2 px-4 text-[#ADB7BE] text-2xl rounded hover:text-blue-400 font-bold">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href={"https://dillinger.io/"} target="_blank">
                                <p className="block py-2 px-4 text-[#ADB7BE] text-2xl rounded hover:text-blue-400 font-bold">DILLINGER</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Agregar menú desplegable aquí */}
            {navbarOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-gray-800 text-white p-6">
                    <ul className="flex flex-col items-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="block py-2 px-4 text-[#ADB7BE] text-xl hover:text-blue-400 font-bold">{link.title}</p>
                                </Link>
                            </li>
                        ))}

                        <li>
                            <Link href={"https://dillinger.io/"} target="_blank">
                                <p className="block py-2 px-4 text-[#ADB7BE] text-xl hover:text-blue-400 font-bold">DILLINGER</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
