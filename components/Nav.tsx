import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
        <nav className="bg-gray-800 text-white p-2 fixed w-full top-0 z-10">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image
                                src='https://cdn.icon-icons.com/icons2/1603/PNG/512/news-newspaper-media-paper-press-article_108607.png'
                                width={50}
                                height={50}
                                className="mr-2"
                                alt="DiarioMK Logo"
                            />
                            <p className="text-3xl font-bold">Diario-MK</p>
                        </div>
                    </Link>
                    {/* <ul className="flex space-x-4 pr-4">
                        <li>
                            <Link href="/">
                                <p className="hover:text-gray-300">Home</p>
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
