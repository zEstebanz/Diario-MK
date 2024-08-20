"use client";
import Link from "next/link";
import Image from "next/image";
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import { FaComments, FaHeart } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  img: string;
  commentCount?: number;
  likeCount?: number;
}

const PostPreview: React.FC<PostMetadata> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShare = (): void => {
    const shareUrl = `${window.location.origin}/posts/${props.slug}`;
    
    if (navigator.share) {
      navigator.share({
        title: props.title,
        url: shareUrl,
      }).then(() => {
        console.log('Artículo compartido exitosamente');
      }).catch((error) => {
        console.error('Error al compartir el artículo', error);
      });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Enlace copiado al portapapeles');
      }).catch((error) => {
        console.error('Error al copiar el enlace al portapapeles', error);
      });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="border border-slate-400 p-4 rounded-md shadow-sm bg-[#F0F1F2] post-preview relative article-box hover:shadow-md transition-shadow duration-300">
      <p className="text-sm text-slate-600 mb-2">{props.date}</p>

      <div className="flex justify-between items-center mb-4">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-black font-bold text-xl hover:text-blue-500 transition-colors duration-200">
            {props.title}
          </h2>
        </Link>
        <div className="relative" ref={menuRef}>
          <IoEllipsisVerticalOutline
            className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={handleShare}>Compartir</button>
                </li>
                {/* Otros elementos de menú */}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="relative h-48 w-full mb-4">
        <Link href={`/posts/${props.slug}`}>
          <Image
            src={props.img}
            alt="Imagen del post"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </Link>
      </div>

      <p className="text-sm text-gray-700 mb-4 hidden md:block">
        {/* Aquí podrías agregar un resumen del post si lo tienes disponible */}
      </p>

      <hr className="mb-4 hidden md:block" />

      <div className="flex justify-between items-center hidden md:flex text-gray-600">
        <div className="flex items-center space-x-2">
          <FaComments />
          <span>{props.commentCount || 0}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaHeart />
          <span>{props.likeCount || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;