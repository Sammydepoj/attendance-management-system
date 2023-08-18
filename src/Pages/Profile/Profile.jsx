import React from 'react'
import image from "../Profile/profile-image.avif"
import {Input} from "antd"

const Profile = () => {
  return (
   <div className='  mx-9 h-[75vh] m-3'>
    <div className='bg-white h-[35vh] grid grid-cols-4'>
      <div>
      <img src={image} alt="image-profile" className='h-[10rem] p-5 rounded-[8rem]'/>
      <h4 className='ml-5'>Accounts</h4>
      <hr className='w-[60.5rem] mt-[12px]'/>
      </div>
      
      <div className='p-8'>
        <h2>John Doe</h2>
        <p><a href="text@gmail.com" className='hover:text-blue-400'>text@gmail.com</a> - User</p>
      </div>
    
    </div>
    
    <div className='bg-white h-[40vh]'>
      <div className='flex pt-[0.5rem]'>
        <h3 className='pl-[1rem] pt-[0.5rem]'>Full name</h3>
        <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "email");
                      }}
                      name="Username"
                      type="Username"
                      id="Username"
                      className=" bg-gray-100 py-2 w-[30rem] ml-[13rem]"
                    />
      </div>
      <div className='flex pt-[0.5rem]'>
        <h3 className='pl-[1rem] pt-[0.5rem]'>Email</h3>
        <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "email");
                      }}
                      name="email"
                      type="email"
                      className="py-2 w-[30rem] ml-[15rem] bg-gray-100 "
                    />
      </div>
      <div className='flex pt-[0.5rem]'>
        <h3 className='pl-[1rem] pt-[0.5rem]'>Password</h3>
        <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "email");
                      }}
                      name="password"
                      type="text"
                      id="password"
                      className="py-2 w-[30rem] ml-[13.3rem] bg-gray-100 "
                    />
      </div>
      
    </div>
   </div>
  )
}

export default Profile