import React from 'react'
import { onlineAdmission, onlineExam, ourFacilities, studyMaterial } from './Content/ourFacilities'
import Footer from './Footer'

function OurFacilities() {
  return (
   <>
     <div>
        <div className='p-4'>
            <h1 className='text-center pb-3 text-2xl font-bold text-gray-600'>OUR FACILITIES</h1>
            <div className='border border-gray-700 w-[130px] mx-auto'></div>
            <div className='border border-gray-700 w-[80px] mx-auto my-1'></div>
            <div className='max-w-[720px] mx-auto text-center py-3'>{ourFacilities}</div>
            <div className='max-w-[1320px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-8'>
                <div className='border p-4 '>
                <div className=''><img src="/image/onlineExam.jpeg" alt="" className='rounded-xl hover:scale-[1.05] duration-300'/></div>
                    <div className='py-3'>
                        <h1 className='text-xl font-bold text-gray-600'>ONLINE EXAMINATION</h1>
                        <p className='py-3 text-gray-600'>{onlineExam}</p>
                    </div>
                </div>
                <div className='border p-4 '>
                    <div className=''><img src="/image/studyMeterial.jpg" alt="" className='rounded-xl hover:scale-[1.05] duration-300' /></div>
                    <div className='py-4'>
                        <h1 className='text-xl font-bold text-gray-600'>COMPLETE STUDY MATERIAL</h1>
                        <p className='py-3 text-gray-600'>{studyMaterial}</p>
                    </div>
                </div>
                <div className='border p-4 '>
                    <div className=''><img src="/image/onlineAdmission.jpg" alt="" className='rounded-xl hover:scale-[1.05] duration-300'/></div>
                    <div className=' py-4'>
                        <h1 className='text-xl font-bold text-gray-600'>ONLINE ADMISSION</h1>
                        <p className='py-3 text-gray-600'>{onlineAdmission}</p>
                    </div>
                </div>
              
            </div>
        </div>
        <div>
        </div>
     </div>
   </>
  )
}

export default OurFacilities