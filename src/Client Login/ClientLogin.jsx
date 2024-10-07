import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

function ClientLogin() {
  let[showPass, setShowPass] = useState(false)
  let[userId, setUserId] = useState({
    username:'',
    password:''
  })

  let geLoginData = (event)=>{
    let userData = {...userId}
    let inputName = event.target.name;
    let inputValue = event.target.value;
    userData[inputName] = inputValue;
    setUserId(userData)
  }

  let onSubmit = (event) =>{
    event.preventDefault()
    console.log(userId);
    
  }

  return (
   <>
       <div className='p-4 flex items-center justify-center h-[100%] w-full'>
          <div className='w-[500px] p-4 border mt-[100px] rounded-xl shadow-xl'>
              <form className='w-full p-4' onSubmit={onSubmit}>
                      <h1 className='text-center text-2xl text-gray-600 font-semibold py-6'>Client Login</h1>
                      <div className='flex items-center gap-2'>
                        <span className='text-2xl text-gray-600 absolute'><FaCircleUser/></span>
                        <input type="email" placeholder='Email' autoComplete='off' className='border-b outline-0 w-full py-3 pl-8' name='username' value={userId.username} onChange={geLoginData}/>
                      </div>

                      <div className='flex items-center justify-between gap-2 my-5'>
                        <span className='text-2xl text-gray-600 absolute'><RiLockPasswordFill/></span>
                        <input type={`${showPass?'text':'password'}`} placeholder='Password' autoComplete='off' className='border-b outline-0 w-full py-3 pl-8' name='password' value={userId.password} onChange={geLoginData}/>
                        <span className='text-xl text-gray-600 cursor-pointer' onClick={()=> setShowPass(!showPass)}>{showPass?<BiHide/>:<BiShow/>}</span>
                      </div>

                      <div className='flex items-center gap-2 my-8'>
                            <button className='border w-full rounded-full p-2 bg-blue-400 text-white font-semibold hover:bg-blue-600 duration-300'>Login</button>
                      </div>

                    
              </form>
          </div>
       </div>
   </>
  )
}

export default ClientLogin