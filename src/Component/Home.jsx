import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from './Banner'
import Typed from './Typed'
import Enquiry from './Enquiry'
import Why_Chose_Us from './Why_Chose_Us'
import CounterUp from './CounterUp'
import TestimonialFeedBack from './UserFeedback'
import Why_With_Us from './Why_With_Us'
import Footer from './Footer'

function Home() {
  return (
    <div className=''>
        <Navbar/>
        <Banner/>
        <Typed/>
        <Enquiry/>
        <Why_Chose_Us/>
        <TestimonialFeedBack/>
        <Why_With_Us/>
        <CounterUp/>
        <Footer/>
       
    </div>
  )
}

export default Home