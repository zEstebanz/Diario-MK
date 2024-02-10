"use client"
import React, { useState, useEffect } from 'react';

function Page() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page');
        const data = await response.json();
        setNews(data.hits);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='min-h-screen h-auto bg-black pt-[150px] pb-[150px] p-[5%] section-newshack'>
      <div className="title text-center text-4xl text-white mb-8">News Hack</div>
      <div className="grid grid-cols-3 gap-8">
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
