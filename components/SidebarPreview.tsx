"use client"
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import { FaComments, FaHeart } from 'react-icons/fa';
import React, { useState } from 'react';

const SidebarPreview = (props: PostMetadata) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleShare = () => {
        // Lógica para compartir el artículo
    };

    return (
        <div className="border border-gray-300 dark:border-none p-4 rounded-md shadow-sm bg-gray-300 dark:bg-[#222] post-preview relative article-box mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">{props.date}</p>
    
        <div className="flex justify-between items-center mb-4">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="text-black dark:text-white font-bold">{props.title}</h2>
            </Link>
        </div>
    
        <div className="relative h-48 w-full mb-4 img">
            <Link href={`/posts/${props.slug}`}>
                <Image
                    src={String(props.img)}
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                />
            </Link>
        </div>
    
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 hidden md:block"></p>
    
        <hr className="mb-4 hidden md:block" />
    </div>
    
    );
};

export default SidebarPreview;  