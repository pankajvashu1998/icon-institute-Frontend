import React from 'react'
import { ReactTyped } from "react-typed";
import { welcome } from './Content/welcome';

function Typed() {
  return (
   <>
   
   <div className='p-4'>
        <div className='text-center mt-[80px] text-3xl font-semibold text-gray-700'>
            <h1 className='text-6xl py-5 text-blue-700'>ICON INSTITUTE OF COMPUTER</h1>
            <h1 className='text-4xl pb-4 text-yellow-700 underline '>Complete Digital</h1>

                    <ReactTyped
                                strings={[
                                    "EDUCATION AND TRAINING",
                                    "WE CAN LEARN ANYTHING",
                                    "LEARNING FROM BEST STUDY MATERIAL",
                                    "UP TO DATE COMPUTER LAB",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                        />
        </div>
        <div className='w-full p-4'>
            <div className='max-w-[1320px] p-4 mx-auto text-center text-gray-700 text-xl'>{welcome}</div>
        </div>
   </div>
   
   </>
  )
}

export default Typed