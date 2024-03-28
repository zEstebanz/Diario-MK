"use client"
import React, { useState, useEffect } from 'react';
import angoliaApi from '../utils/services/axiosConfig'

function Page() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await angoliaApi.get();
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
    <section className='min-h-screen h-auto bg-black section-newshack'>

      <div className="port pt-[150px] pb-[150px]">
        <h1 className="title text-center text-6xl md:text-8xl text-white">News Hack</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-[5%]">
        {news.map(item => (
          <div key={item.objectID} className="news-item border border-gray-400 rounded-md p-4 bg-white shadow-md">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-black font-bold mb-4 block">{item.title}</a>
            {item.image && <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-4" />}
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block">Read more</a>
          </div>

        ))}
      </div>
    </section>

  );
}

export default Page;
