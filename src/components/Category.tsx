import React from 'react';
import { categories } from '../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Category } from '@/types/Category';

const Category: React.FC<Category> = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <section id='category'>
            <div className="container">
                <Swiper
                    slidesPerView={12}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        340: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    freeMode={true}
                    className="mySwiper"
                >
                    {categories.map((el, idx) => (
                        <SwiperSlide key={idx}>
                            <button
                                className={el.name === selectedCategory ? 'active' : ''}
                                onClick={() => setSelectedCategory(el.name)}
                            >{el.name}</button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
