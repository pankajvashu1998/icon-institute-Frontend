import React from 'react'
import { about, contact, service } from './Content/footerData'
import { MdKeyboardArrowLeft } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full p-4 bg-gray-800 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            <div className=' p-3 '>
                <h1 className='text-xl font-bold text-white pb-3'>ABOUT US</h1>
                <p className='text-white'>{about}</p>
            </div>
            <div className=' p-3 '>
                <h1 className='text-xl font-bold text-white pb-3 mx-1'>ONLINE SERVICES</h1>
                <ul>
                    {service.map((item,index)=>(
                        <li key={index} className='flex items-center text-white cursor-pointer'>
                            <span ><MdKeyboardArrowLeft/></span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>

            </div>
            <div className=' p-3 '>
            <h1 className='text-xl font-bold text-white pb-3 mx-1'>CONTACT US</h1>
            {contact.map((item, index)=>(
                <p key={index} className='text-white'>{item}</p>
            ))}
            </div>
            <div className='border p-3 '></div>
    </div>
  )
}

export default Footer