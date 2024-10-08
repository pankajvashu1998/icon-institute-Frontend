import React, { useState } from 'react'

function Enquiry() {
let[formData, setFormData] = useState({
    fullname:'',
    course_interest:'',
    mobile:'',
    email:''
    
})

let getFormData = (event)=>{
    let oldFormData = {...formData};
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldFormData[inputName] = inputValue;
    setFormData(oldFormData);
}
let onSubmit = (event)=>{
    event.preventDefault()
    console.log(formData);
    
}
  return (
    <>
        <div className='my-[80px] p-4 grid md:grid-cols-2 gap-10'>
                <div className=''><img src="/image/sidebar.png" alt="" className='w-full h-full rounded-xl shadow-xl' /></div>
                <div className=' '>
                    <div className='border max-w-[400px] p-4 rounded-xl shadow-xl mx-auto'>
                        <form onSubmit={onSubmit}>
                            <h1 className='py-3 text-xl font-bold text-gray-700'>GET US TO CALL YOU BACK</h1>
                            <div className=''>
                                <input type="text" placeholder='Full Name' className='border w-full px-2 py-2 outline-0' name='fullname' value={formData.fullname} onChange={getFormData}/>
                            </div>
                            <div className='mt-4'>
                                <input type="text" placeholder='Course Of Interest' className='border w-full px-2 py-2 outline-0' name='course_interest' value={formData.course_interest} onChange={getFormData}/>
                            </div>
                            <div className='mt-4'>
                                <input type="number" placeholder='Phone Number' className='border w-full px-2 py-2 outline-0' name='mobile' value={formData.mobile} onChange={getFormData}/>
                            </div>
                            <div className='mt-4'>
                                <input type="email" placeholder='Email Id' className='border w-full px-2 py-2 outline-0' name='email' value={formData.email} onChange={getFormData}/>
                            </div>
                            <div className='mt-4'>
                                <button className='text-center w-full border py-2 rounded-full bg-blue-600 font-semibold text-white'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Enquiry