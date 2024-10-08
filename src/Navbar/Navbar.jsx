import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import { IoMenu } from "react-icons/io5";

function Navbar() {
  let[toggle, setToggle] = useState(false)
  return (
    <>
          <nav className='bg-blue-600 px-4 max-w-full'>
              <div className='container mx-auto  p-4 flex items-center justify-between'>
                  <div className='font-semibold text-white text-center text-2xl cursor-pointer hover:underline'><Link to={'/'}>IIC E-Learning</Link></div>
                  <div>

                    <ul className='hidden md:flex items-center justify-center gap-10 font-semibold text-white '>
                      <li className='hover:underline'><Link to={'/'}>Home</Link></li>
                      <li className='hover:underline'><Link to={'/course'}>Course</Link></li>
                      <li className='hover:underline'><Link to={'/contact'}>Contact</Link></li>
                      <li className='hover:underline'><Link to={'/about'}>About</Link></li>
                    </ul>

                    {/* Responsive Navbar */}
                    <ul className={`z-[10] md:hidden flex justify-center p-4 gap-10 font-semibold text-gray-700 fixed  bg-gray-200 top-[66px] w-full flex-col ${toggle?'left-0':'left-[100%]'} duration-300`}>
                      <li className='hover:underline'><Link to={'/'}>Home</Link></li>
                      <li className='hover:underline'><Link to={'/course'}>Course</Link></li>
                      <li className='hover:underline'><Link to={'/contact'}>Contact</Link></li>
                      <li className='hover:underline'><Link to={'/about'}>About</Link></li>
                    </ul>


                  </div>
                <div className='flex items-center gap-3'>
                      <span className='text-xl text-white'><FaUser/></span>
                      <button className='hover:underline text-white'><Link to={'/user/login'}>Login</Link></button>
                      <span className='text-white text-2xl md:hidden block px-2' onClick={()=>setToggle(!toggle)}><IoMenu/></span>
                </div>
                </div>
               
          </nav>
    
    </>
  )
}

export default Navbar