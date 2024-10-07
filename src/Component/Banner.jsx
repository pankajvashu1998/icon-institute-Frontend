import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <>
    
        <div className='w-full z-[-10]'>
               <div className=''>
                        <Swiper
                                
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src="/image/header1.jpg" alt="" className='w-full h-[400px] object-cover'/></SwiperSlide>
                                <SwiperSlide><img src="/image/header2.jpg" alt="" className='w-full h-[400px] object-cover'/></SwiperSlide>
                                <SwiperSlide><img src="/image/header3.jpg" alt="" className='w-full h-[400px] object-cover'/></SwiperSlide>
                               
                        </Swiper>
               </div>
        </div>
    
    
    </>
  )
}

export default Banner