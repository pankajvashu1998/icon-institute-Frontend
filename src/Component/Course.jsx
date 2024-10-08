import React from 'react'
import Navbar from '../Navbar/Navbar'
import { courseList } from './Content/courseList'
import Enquiry from './Enquiry'
import Footer from './Footer'

function Course() {
  return (
    <>
    <Navbar/>
    <div>
          <div className=''><h1 className='text-2xl bg-blue-400 py-6 text-center text-white font-bold'>OUR COURSES</h1></div>
          <div className='my-[40px]   overflow-auto p-4'>
            <table className='w-full'>
              <thead className=''>
                    <tr className='border bg-gray-100 text-gray-700 border-gray-300'>
                      <th className='border border-gray-300 py-2 px-2'>S.No</th>
                      <th className='border border-gray-300 py-2 px-2'>Course Name</th>
                      <th className='border border-gray-300 py-2 px-2'>Duration</th>
                      <th className='border border-gray-300 py-2 px-2'>Eligibility</th>
                    </tr>
              </thead>
              <tbody>
                    {courseList.map((value, index)=>(
                      <tr key={index} className='text-center'>
                          <td className='py-3 text-gray-700 border px-2'>{index+1}</td>
                          <td className='py-3 text-gray-700 border px-2'>{value.course}</td>
                          <td className='py-3 text-gray-700 border px-2'>{value.duration}</td>
                          <td className='py-3 text-gray-700 border px-2'>{value.eligibility}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div><Enquiry/></div>
          <div><Footer/></div>
    </div>
    
    </>
  )
}

export default Course