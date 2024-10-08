import React from 'react'
import Navbar from '../Navbar/Navbar'
import { address } from './Content/address'
import Footer from './Footer'

function Contact() {
  return (
   <>
    <Navbar/>
    <div>
      <div><h1 className='bg-blue-400 text-center py-6 text-2xl text-white font-bold'>CONTACT US</h1></div>
      <div className='w-full p-4 grid md:grid-cols-1 lg:grid-cols-2 gap-10 my-[70px]'>
          <div className=' px-4'>
            <form>
              <h1 className='text-2xl font-semibold text-gray-700 pb-6'>GET IN TOUCH</h1>
              <div className='grid md:grid-cols-2 gap-10'>
                  <div><input type="text" placeholder='Full Name' className='border w-full py-3 px-2 border-gray-300 rounded'/></div>
                  <div><input type="number" placeholder='Mobile No.' className='border w-full py-3 px-2 border-gray-300 rounded'/></div>
              </div>
              <div className='my-4'><input type="email" placeholder='Email Address' className='border w-full py-3 px-2 border-gray-300 rounded'/></div>
              <div className='my-5'><textarea name="" maxLength={200} rows={3} placeholder='Write Your Question' className='border w-full py-3 px-2 border-gray-300 rounded' ></textarea></div>
              <div><button className='border px-7 py-3 border-gray-400 rounded bg-gray-500 text-white hover:bg-gray-600'>Submit</button></div>
            </form>
          </div>
          <div className='p-4 '>
            <h1 className='text-2xl font-semibold text-gray-600 pb-7'>CONTACT INFO</h1>
            {address.map((value, index)=>(
              <p key={index} className='py-1 font-semibold text-gray-700'>{value}</p>
            ))}
          </div>
      </div>
      <div className='w-full p-4'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.598075865771!2d85.26709017532316!3d25.78383600769016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43e7a24805e1%3A0x87f4c88955505a7e!2sICON%20INSTITUTE%20OF%20COMPUTER!5e0!3m2!1sen!2sin!4v1728354924377!5m2!1sen!2sin" className='w-full h-[500px]'></iframe></div>
      <Footer/>
    </div>
   </>
  )
}

export default Contact