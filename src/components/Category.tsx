'use client'
import React, { useEffect, useState } from 'react';
import { categories } from '../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FetchApi } from '@/utils/fetchApi';
import { Category } from '@/types/Category';
import Video from './Video';

const Category: React.FC<Category> = () => {

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
        <>
            <section id='category'>
                <div className="container">
                    <Swiper
                        slidesPerView={12}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        freeMode={true}
                        className="mySwiper"
                    >
                        {categories.map((el, idx) => (
                            <SwiperSlide key={idx}>
                                <button
                                    onClick={() => setSelectedCategory(el.name)}
                                    style={{
                                        background:
                                            el.name === selectedCategory ? '#FC1503' : undefined,
                                        color: 'white',
                                    }}
                                >{el.name}</button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <Video videos={video} />
        </>
    );
};

export default Category;
