import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import { FaUserPlus } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";


function CounterUp() {
  let [counterOn, setCounterOn] = useState(false)
  return (
    <div className='p-4'>
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className='max-w-full m-auto bg-purple-500 md:flex items-center justify-evenly p-4 text-center py-[100px] rounded-xl'>
                
                 
                    <div className='flex items-center justify-center flex-col my-4'>
                        <div className='text-5xl text-white'><FaUserPlus/></div>
                        <div className='text-2xl text-white py-2'>  {counterOn && <CountUp start={0} end={2000} delay={0}/>} + </div>
                        <div className='text-xl font-semibold text-white'>STUDENTS</div>
                    </div>

                    <div className='flex items-center justify-center flex-col my-4'>
                        <div className='text-5xl text-white'><BsCashStack/></div>
                        <div className='text-2xl text-white py-2'>  {counterOn && <CountUp start={0} end={130} delay={0}/>} + </div>
                        <div className='text-xl font-semibold text-white'>COURSES</div>
                    </div>

                    <div className='flex items-center justify-center flex-col my-4'>
                        <div className='text-5xl text-white'><BsGlobe/></div>
                        <div className='text-2xl text-white py-2'>  {counterOn && <CountUp start={0} end={40} delay={0}/>} + </div>
                        <div className='text-xl font-semibold text-white'>CENTER</div>
                    </div>

                    <div className='flex items-center justify-center flex-col my-4'>
                        <div className='text-5xl text-white'><FaNetworkWired/></div>
                        <div className='text-2xl text-white py-2'>  {counterOn && <CountUp start={0} end={100} delay={0}/>} + </div>
                        <div className='text-xl font-semibold text-white'>FACULTIES</div>
                    </div>

                   
                
        </div>
        </ScrollTrigger>
    </div>
  )
}

export default CounterUp