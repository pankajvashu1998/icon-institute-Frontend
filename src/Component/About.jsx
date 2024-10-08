import React from 'react'
import Navbar from '../Navbar/Navbar'
import { coreConcept, ourMission, ourVision, ourVision2 } from './Content/aboutContent'
import Enquiry from './Enquiry'
import CounterUp from './CounterUp'
import OurFacilities from './OurFacilities'
import Testimonial from './PlacementPartner'
import Footer from './Footer'

function About() {
  return (
    <>
      <Navbar/>
      <div>
        <h1 className='max-w-full text-center py-6 bg-blue-400 text-2xl font-bold text-white'>ABOUT</h1>
        <div>
          <h1 className='p-6 text-2xl font-bold text-gray-600'>WELCOME TO EDUCATION COURSE</h1>
          <p className='text-xl text-gray-500 px-6'>Our Mission</p>
          <p className='px-6 py-2 text-gray-700'>{ourMission}</p>
          <p className='text-xl text-gray-500 px-6 py-4'>Our Vision</p>
          <p className='px-6  text-gray-700'>{ourVision}</p>
          <p className='px-6  text-gray-700 py-2'>{ourVision2}</p>
          <p className='text-xl text-gray-500 px-6 py-4'>Our Core Values of the Institution</p>
          {coreConcept.map((value, index)=>(
             <p className='px-6  text-gray-700 py-1' key={index}>{value}</p>
          ))}
        </div>
        <div><Enquiry/></div>
        <div><CounterUp/></div>
        <div><OurFacilities/></div>
        <div><Testimonial/></div>
        <div><Footer/></div>
      </div>
    </>
  )
}

export default About