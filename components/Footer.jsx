import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (

        <footer className="bg-black shadow dark:bg-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <Image src="https://cdn.icon-icons.com/icons2/1603/PNG/512/news-newspaper-media-paper-press-article_108607.png" className="h-8 mr-3" alt="DiarioMK Logo" width={50}
                            height={50} />
                        <span className="text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Diario-MK</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        {/* <img src="" alt="Red Social" className="h-7 mr-1" />
                        <Link href="/contact" className="text-2xl hover:underline md:mr-8 text-white">Instagram</Link>
 */}

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-white textFooter">2024 <Link href="#" className="hover:underline textFooter" target='_blank'>Esteban Oller</Link>...</span>
            </div>
        </footer>



    );
};

export default Footer;