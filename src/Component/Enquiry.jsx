import React from 'react'

function Enquiry() {
  return (
    <>
        <div className='my-[80px] p-4 grid md:grid-cols-2 gap-10'>
                <div className=''><img src="/image/sidebar.png" alt="" className='w-full h-full rounded-xl shadow-xl' /></div>
                <div className=' '>
                    <div className='border max-w-[400px] p-4 rounded-xl shadow-xl mx-auto'>
                        <form>
                            <h1 className='py-3 text-xl font-bold text-gray-700'>GET US TO CALL YOU BACK</h1>
                            <div className=''>
                                <input type="text" placeholder='Full Name' className='border w-full px-2 py-2 outline-0'/>
                            </div>
                            <div className='mt-4'>
                                <input type="text" placeholder='Course Of Interest' className='border w-full px-2 py-2 outline-0'/>
                            </div>
                            <div className='mt-4'>
                                <input type="number" placeholder='Phone Number' className='border w-full px-2 py-2 outline-0'/>
                            </div>
                            <div className='mt-4'>
                                <input type="email" placeholder='Email Id' className='border w-full px-2 py-2 outline-0'/>
                            </div>
                            <div className='mt-4'>
                                <button className='text-center w-full border py-2 rounded-full bg-blue-600 font-semibold text-white'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Enquiry