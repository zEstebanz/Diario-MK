import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#0E0E0E] shadow dark:bg-[#0E0E0E] footer">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <p className="text-3xl font-bold text-white text-footer-link">Diario-MK</p>
                        </div>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-white textFooter">2024 <Link href="/" className="hover:underline textFooter">Esteban Oller</Link>...</span>
            </div>
        </footer>
    );
};

export default Footer;