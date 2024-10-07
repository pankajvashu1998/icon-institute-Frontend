import React from 'react'
import { why_with_us } from './Content/why_with_us'

function Why_With_Us() {
  return (
    <>
        <div className='my-[80px] p-4 grid md:grid-cols-2 gap-10'>
               
                <div className=' p-5 '>
                    <h1 className='text-2xl py-3 font-bold text-gray-600'>Why With Us</h1>
                  <p className='text-xl text-gray-700'>{why_with_us}</p>
                  <button className='border border-red-500 border p-3 my-5 font-bold rounded'>Read More</button>
                </div>
                <div className=''><img src="/image/why-with-us.webp" alt="" className='w-full h-full rounded-xl shadow-xl' /></div>
        </div>
    </>
  )
}

export default Why_With_Us