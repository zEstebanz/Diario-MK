"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./Navbarlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Articles",
        path: "/",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="bg-gray-800 fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-nav">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src='https://cdn.icon-icons.com/icons2/1603/PNG/512/news-newspaper-media-paper-press-article_108607.png'
                            width={50}
                            height={50}
                            className="mr-2"
                            alt="DiarioMK Logo"
                        />
                        <p className="text-3xl font-bold text-white">Diario-MK</p>
                    </div>
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav >
    );
};

export default Navbar;

// import Link from 'next/link';
// import Image from 'next/image';
// const Nav = () => {
//     return (
//         <nav className="bg-gray-800 text-white p-2 fixed w-full top-0 z-10">
//             <div className="relative max-w-7xl mx-auto">
//                 <div className="flex items-center justify-between">
//                     <Link href="/">
//                         <div className="flex items-center cursor-pointer">
//                             <Image
//                                 src='https://cdn.icon-icons.com/icons2/1603/PNG/512/news-newspaper-media-paper-press-article_108607.png'
//                                 width={50}
//                                 height={50}
//                                 className="mr-2"
//                                 alt="DiarioMK Logo"
//                             />
//                             <p className="text-3xl font-bold">Diario-MK</p>
//                         </div>
//                     </Link>
//                     {/* <ul className="flex space-x-4 pr-4">
//                         <li>
//                             <Link href="/">
//                                 <p className="hover:text-gray-300">Home</p>
//                             </Link>
//                         </li>
//                     </ul> */}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Nav;
