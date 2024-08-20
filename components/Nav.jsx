"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ChangeTheme from "./UI/ChangeTheme";
import { FaHome } from "react-icons/fa";
import { IoSkullOutline } from "react-icons/io5";
import { SiExercism } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

// Opciones del menú como un array de objetos
const menuItems = [
  {
    label: "Inicio",
    icon: <FaHome className="w-6 h-6 text-gray-300 dark:text-gray-400 mr-4" />,
    onClick: (router, handleCloseMenu) => {
      router.push("/");
      handleCloseMenu();
    },
  },
  {
    label: "Ejercicios",
    icon: <SiExercism className="w-6 h-6 text-gray-300 dark:text-gray-400 mr-4" />,
    onClick: (router, handleCloseMenu) => {
      router.push("/ejercicios");
      handleCloseMenu();
    },
  },
  {
    label: "NewsHack",
    icon: <IoSkullOutline className="w-6 h-6 text-gray-300 dark:text-gray-400 mr-4" />,
    onClick: (router, handleCloseMenu) => {
      router.push("/newshack");
      handleCloseMenu();
    },
  },
];

const Topbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Título como logo */}
          <a
            onClick={() => router.push("/")}
            className="text-xl font-bold text-white cursor-pointer"
          >
            DEV-TEST
          </a>
        </div>

        {/* Empuja los elementos hacia la derecha */}
        <div className="ml-auto flex items-center space-x-6">
          {/* Theme Toggle */}
          <ChangeTheme />

          {/* Navigation Menu */}
          <div className="relative">
            <button
              onClick={handleToggleMenu}
              className="flex items-center text-lg focus:outline-none"
            >
              <GiHamburgerMenu className="w-8 h-8 text-white" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-black bg-opacity-70 dark:bg-black dark:bg-opacity-70 rounded-md shadow-lg py-2 z-20">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    onClick={() => item.onClick(router, handleCloseMenu)}
                    className="flex items-center px-6 py-3 text-lg text-gray-300 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;