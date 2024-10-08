import React, {useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
function Testimonial() {
   
  return (
    <div>
        <div className='max-w-[1320px] m-auto p-4 '>
                <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={1}
                            autoplay = {{
                                delay:3000,
                                disableOnInteraction:false,
                            }}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                                
                            }}
                            navigation = {true}
                            modules={[Pagination,Autoplay,Navigation]}
                            className="mySwiper"
                           
                            >
                            
                           
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/ntpc.png" alt=""  className='w-[200px]'/></div></SwiperSlide>
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/saksham.png" alt=""  className='w-[200px]'/></div></SwiperSlide>
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/NIELIT.jpg" alt=""  className='w-[200px]'/></div></SwiperSlide>
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/positive shift.png" alt=""  className='w-[200px]'/></div></SwiperSlide>
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/skill shine.png" alt=""  className='w-[200px]'/></div></SwiperSlide>
                            <SwiperSlide><div className=' p-4 mb-[20px] m-auto'><img src="/image/tally.png" alt=""  className='w-[200px]'/></div></SwiperSlide>
                           
                </Swiper>
        </div>
    </div>
  )
}

export default Testimonial