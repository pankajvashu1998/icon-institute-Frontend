import React from 'react'
import { extraCare, latestTechnology, unlimitedLab, why_chose_us } from './Content/why_chose_us'

function Why_Chose_Us() {
  return (
    <>
        <div className='p-4'>
            <div className='mb-[20px]'>
                <h1 className='text-center font-bold text-2xl text-gray-700 py-2'>WHY CHOSE US</h1>
                <div className='w-[120px] border border-gray-600 mx-auto'></div>
                <div className='w-[100px] border border-gray-600 mx-auto my-1'></div>
            </div>
            <div className='max-w-[600px] px-4 text-center mx-auto text-xl text-gray-600'>{why_chose_us}</div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-[80px] mx-auto p-4'>
                    <div className='border p-5 text-center rounded-xl shadow-xl hover:bg-gray-200'>
                        <h1 className='py-5 text-2xl font-semibold text-gray-600'>EXTRA CARE</h1>
                       <p className='text-xl text-gray-600  py-2'> {extraCare}</p>
                    </div>
                    <div className='border p-5 text-center rounded-xl shadow-xl hover:bg-gray-200'>
                        <h1 className='py-5 text-2xl font-semibold text-gray-600'>LATEST TECHNOLOGY</h1>
                       <p className='text-xl text-gray-600  py-2'> {latestTechnology}</p>
                    </div>
                    <div className='border p-5 text-center rounded-xl shadow-xl hover:bg-gray-200'>
                        <h1 className='py-5 text-2xl font-semibold text-gray-600'>UNLIMITED LAB</h1>
                       <p className='text-xl text-gray-600  py-2'> {unlimitedLab}</p>
                    </div>
                   
            </div>
        </div>
    </>
  )
}

export default Why_Chose_Us