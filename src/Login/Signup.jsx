import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Signup() {
    let[showPass,setShowPass] = useState(false)
    let[showPass2,setShowPass2] = useState(false)
    let[userData, setUserData] = useState({
        username:'',
        email:'',
        create_password:'',
        confirm_password:''
    })

    let getUserData = (event)=>{
        let userOldData = {...userData}
        let inputName = event.target.name;
        let inputValue = event.target.value;
        userOldData[inputName] = inputValue;
        setUserData(userOldData)
    }

    let onSubmit = (event)=>{
        event.preventDefault()
        console.log(userData);
        
    }



  return (
   <>
    <div>
        <video autoPlay muted loop className='fixed right-0  bottom-0 min-w-[100%] min-h-[100%] z-[-4] object-cover overflow-clip'>
          <source src='/image/background.mp4'/>
        </video>
      </div>
   <div className='p-4'>
            <div className='max-w-[500px] p-4 m-auto border my-[80px] shadow-xl rounded-xl bg-white'>
                <form className='p-4' onSubmit={onSubmit}>
                    <h1 className='text-center py-4 text-2xl text-gray-600 font-semibold'>Signup</h1>
                    <div className='flex items-center'>
                        <span className='text-2xl text-gray-600 absolute'><FaCircleUser/></span>
                        <input type="text" placeholder='Create Username' className='border-b outline-0 w-full px-8 py-3' maxLength={40} name='username' value={userData.username} onChange={getUserData}/>
                    </div>

                    <div className='flex items-center my-6'>
                        <span className='text-2xl text-gray-600 absolute'><MdEmail/></span>
                        <input type="email" placeholder='Email Id' className='border-b outline-0 w-full px-8 py-3' maxLength={40} name='email' value={userData.email}  onChange={getUserData}/>
                    </div>
                    <div className='flex items-center my-6'>
                        <span className='text-2xl text-gray-600 absolute'><FaLock/></span>
                        <input type={`${showPass2?'text':'password'}`} placeholder='Create Password' className='border-b outline-0 w-full px-8 py-3' maxLength={16} name='create_password' value={userData.create_password}  onChange={getUserData}/>
                        <span className='text-xl text-gray-600 cursor-pointer' onClick={()=> setShowPass2(!showPass2)}>{showPass?<BiHide/>:<BiShow/>}</span>
                    </div>

                    <div className='flex items-center my-6'>
                        <span className='text-2xl text-gray-600 absolute'><FaLock/></span>
                        <input type={`${showPass?'text':'password'}`} placeholder='Confirm Password' className='border-b outline-0 w-full px-8 py-3' maxLength={16} name='confirm_password' value={userData.confirm_password}  onChange={getUserData}/>
                        <span className='text-xl text-gray-600 cursor-pointer' onClick={()=> setShowPass(!showPass)}>{showPass?<BiHide/>:<BiShow/>}</span>
                    </div>

                    <div className='flex items-center gap-2 my-3 '>
                            <p className='text-gray-600'>Already have an account? </p>
                            <button className='mx-3 text-blue-700 hover:underline'><Link to={'/user/login'}>Login</Link></button>
                      </div>

                    
                    <div className='flex items-center gap-2 my-8'>
                            <button className='border w-full rounded-full p-2 bg-blue-400 text-white font-semibold hover:bg-blue-600 duration-300'>Signup</button>
                      </div>


                </form>
            </div>


   </div>
   </>
  )
}

export default Signup