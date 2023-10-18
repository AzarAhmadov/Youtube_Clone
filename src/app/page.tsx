'use client'
import Category from '@/components/Category'
import Video from '@/components/Video';
import { FetchApi } from '@/utils/fetchApi';
import React, { useEffect, useState } from 'react'

const Home: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchApi(`search?part=snippet&q=${selectedCategory}`);
        setVideo(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <main>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Video videos={video} />
    </main>
  )
}

export default Home