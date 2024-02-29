"use client"
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import { FaComments, FaHeart } from 'react-icons/fa';
import React, { useState } from 'react';

const PostPreview = (props: PostMetadata) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShare = () => {
    // Lógica para compartir el artículo
  };

  return (
    <div className="border border-slate-400 p-4 rounded-md shadow-sm bg-[#A9ACA9] post-preview relative article-box">
      <p className="text-sm text-slate-600">{props.date}</p>

      <div className="flex justify-between items-center mb-4">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-black font-bold">{props.title}</h2>
        </Link>
        <div className="relative">
          <IoEllipsisVerticalOutline
            className="text-gray-600 cursor-pointer"
            onClick={toggleMenu}
          />
          {/* Menú desplegable */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg absolute-menu ">
              {/* Contenido del menú */}
              <ul>
                <li>
                  <button onClick={handleShare}>Compartir</button>
                </li>
                {/* Otros elementos de menú */}
              </ul>
            </div>
          )}
        </div>

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

      <p className="text-sm text-gray-700 mb-4 hidden md:block"></p>

      <hr className="mb-4 hidden md:block" />

      <div className="flex justify-between items-center hidden md:flex">
        {/* Icono de comentarios */}
        <div>
          <FaComments className="text-gray-600" />
          {/* Aquí se mostraría el conteo de comentarios */}
        </div>

        {/* Icono de "me gusta" */}
        <div>
          <FaHeart className="text-gray-600" />
          {/* Aquí se mostraría el conteo de "me gusta" */}
        </div>
        {/* Otros elementos que quieras agregar en la parte inferior izquierda */}
      </div>
    </div>

  );
};

export default PostPreview;
