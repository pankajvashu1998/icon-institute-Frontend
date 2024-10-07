import React, {useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
import { testimonialsFeedback } from './Content/userFeedback';


function TestimonialFeedBack() {


  return (
    <div className='p-4' >
        <div className='max-w-full border m-auto p-4 py-[30px]  my-[100px] rounded-xl bg-blue-400'>
        <h1 className='text-center text-2xl font-bold text-white underline'>TESTIMONIALS</h1>
        <p className='text-center text-xl font-semibold text-white py-6'>What people say about us.</p>
        <Swiper
                            slidesPerView={2}
                            centeredSlides={true}
                            spaceBetween={10}
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
                            

                            {testimonialsFeedback.map((item, index)=>(

                                        <SwiperSlide key={index}>
                                        <div className=' p-6 mb-[30px] bg-white  rounded-xl max-w-[500px] mx-auto' >
                                                <p className='py-5'>{item.body}</p>
                                                <div className='flex items-center'>
                                                    <div className='w-[80px] h-[80px] rounded-full border border-gray-400 bg-gray-200'></div>
                                                    <div>
                                                        <p className='px-3 font-semibold'>{item.name}</p>
                                                        <p className='px-3 text-gray-600'>{item.titel}</p>
                                                    </div>
                                                </div>
                                        </div>
                                        </SwiperSlide>
                            ))}

                           
                </Swiper>
        </div>
    </div>
  )
}

export default TestimonialFeedBack