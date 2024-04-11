import React from "react"
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';
import './custom-button.css';
import Card from "../Card/Card";

export default function Carousel({data}) {

    return (
        <>
            <Swiper
                slidesPerView={6}
                centeredSlides={false}
                spaceBetween={20}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item) => {
                    return <SwiperSlide className={styles.albumContainer}><Card key={item.id} topSong={item}/></SwiperSlide>
                })}
            </Swiper>
        </>         
        
    )
}