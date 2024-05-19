import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <footer className="bg-[#0E0E0E] shadow dark:bg-[#0E0E0E] footer">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <p className="text-3xl font-bold text-white text-footer-link  hover:text-cyan-500 transition-colors duration-500">Diario-MK</p>
                        </div>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li className="flex items-center">
                            <Link href="https://github.com/zEstebanz" className="icon text-2xl hover:underline md:mr-6 text-white hover:text-cyan-500 transition-colors duration-500" target='_blank'><FaGithub /> </Link>
                        </li>
                        <li className="flex items-center">
                            <Link href="https://www.linkedin.com/in/esteban-oller-2b7a5a153/" className="icon text-2xl hover:underline md:mr-6 text-white hover:text-cyan-500 transition-colors duration-500" target='_blank'><FaLinkedin /></Link>
                        </li>
                        <li className="flex items-center">
                            <Link href="https://wa.me/2612528276" className="icon text-2xl hover:underline md:mr-6 text-white hover:text-cyan-500 transition-colors duration-500" target='_blank'><FaWhatsapp /></Link>
                        </li>
                        <li className="flex items-center">
                            <Link href="mailto:estebanoller83@gmail.com" className="icon text-2xl hover:underline md:mr-6 text-white hover:text-cyan-500 transition-colors duration-500" target='_blank'>
                                <MdEmail />
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white hover:text-cyan-500 transition-colors duration-500 sm:text-center dark:text-white textFooter"><Link href="https://esteban-oller.vercel.app/" className="textFooter">Esteban Oller</Link></span>
            </div>
        </footer>
    );
};

export default Footer;