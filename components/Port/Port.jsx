"use client"
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaAngleDoubleDown, FaRegStar } from "react-icons/fa";
import { IoSkullOutline } from "react-icons/io5";
import { Link } from "react-scroll";

function Port() {
    return (
        <section className="section-port h-auto min-h-screen relative">
            <div className="port relative">
                <div>
                    <h1 className="title-port font-bold text-6xl md:text-8xl">dev-test</h1>
                    <p className="subtitle text-xl md:text-2xl">blog personal...</p>
                </div>

                <div className="absolute right-0 top-0 h-full flex flex-col justify-center items-center pr-5">
                    <div className="flex flex-col gap-4">
                        <a href="/newshack" rel="noopener noreferrer">
                            <IoSkullOutline className="text-3xl text-white font-bold hover:text-blue-500 transition duration-300" />
                        </a>

                        <a href="https://fav-page-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <FaRegStar className="text-3xl text-white font-bold hover:text-green-800 transition duration-300" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 p-2">
                    <p className="text-sm text-gray-500">Esteban Oller</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-[50px]">
                    <Link to="blog" smooth={true} duration={1000}>
                        <p><FaAngleDoubleDown className="icon-down text-4xl md:text-6xl" /></p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Port