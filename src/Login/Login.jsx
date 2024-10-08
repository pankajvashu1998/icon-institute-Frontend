import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Login() {
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
      <div>
        <video autoPlay muted loop className='fixed right-0  bottom-0 min-w-[100%] min-h-[100%] z-[-4] object-cover overflow-clip'>
          <source src='/image/background.mp4'/>
        </video>
      </div>
       <div className='p-4 flex items-center justify-center h-[100%] w-full'>
          <div className='w-[500px] p-4 border mt-[100px] rounded-xl shadow-xl bg-white'>
              <form className='w-full p-4' onSubmit={onSubmit}>
                      <h1 className='text-center text-2xl text-gray-600 font-semibold py-4'>Login</h1>
                      <div className='flex items-center gap-2'>
                        <span className='text-2xl text-gray-600 absolute'><FaCircleUser/></span>
                        <input type="text" placeholder='Username' autoComplete='off' className='border-b outline-0 w-full py-3 pl-8' name='username' value={userId.username} onChange={geLoginData}/>
                      </div>

                      <div className='flex items-center justify-between gap-2 my-5'>
                        <span className='text-2xl text-gray-600 absolute'><RiLockPasswordFill/></span>
                        <input type={`${showPass?'text':'password'}`} placeholder='Password' autoComplete='off' className='border-b outline-0 w-full py-3 pl-8' name='password' value={userId.password} onChange={geLoginData}/>
                        <span className='text-xl text-gray-600 cursor-pointer' onClick={()=> setShowPass(!showPass)}>{showPass?<BiHide/>:<BiShow/>}</span>
                      </div>

                      <div className='flex items-center gap-2 my-3'>
                            <p className='text-gray-600'>Don't have an account? </p>
                            <button className='mx-3 text-blue-700 hover:underline'><Link to={'/user/signup'}>Signup</Link></button>
                      </div>

                      <div className='flex items-center gap-2 my-3'>
                            <p className='text-gray-600'>Client Login </p>
                            <button className='mx-3 text-blue-700 hover:underline'><Link to={'/client/login'}>Login</Link></button>
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

export default Login