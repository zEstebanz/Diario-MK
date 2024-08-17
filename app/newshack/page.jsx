"use client"
import React, { useState, useEffect } from 'react';
import angoliaApi from '../utils/services/axiosConfig'

function Page() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await angoliaApi.get('search?tags=front_page');
        const data = response.data;
        setNews(data.hits);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='min-h-screen h-auto bg-black section-newshack py-10'>

      <div className="port pt-[150px] pb-[150px]">
        <h1 className="title text-center text-6xl md:text-8xl text-white">News Hack</h1>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl md:text-6xl font-bold mb-12">Daily News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(item => (
            <div key={item.objectID} className="news-item bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    By <span className="font-medium text-gray-700">{item.author}</span> on {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Points: {item.points} | Comments: {item.num_comments}
                  </p>
                </div>
                {item.image && <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />}
              </a>
            </div>
          ))}
        </div>
      </div>

    </section >

  );
}

export default Page;
