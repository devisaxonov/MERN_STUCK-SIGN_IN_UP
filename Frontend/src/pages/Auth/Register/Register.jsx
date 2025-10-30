import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='w-full flex items-center justify-center p-10'>
      <div className='container mx-auto'>
        <div className="flex items-center gap-16 justify-between w-full">
          <div className="left_wrapper">
            <img src="/register.png"  className='w-[55vh] h-[78vh]' alt="" />
          </div>
        <div className="right_wrapper space-y-4 max-w-[550px] w-full h-auto">
          <h3 className='text-5xl text-[#313131] font-semibold capitalize'>Register</h3>
            <p className='text-base font-medium'>Let's get you all set up so you can access your personal account</p>
            
            <form action="" className='space-y-4'>
              <input type="text" className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3'  placeholder='Your name ...'/>
              <input type="email" className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3'  placeholder='Your Email ...'/>
              <input type="password" className='max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3' placeholder='Your Password ...' />
              
              <button className='max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg justify-center text-base text-[#f3f3f3] font-semibold capitalize cursor-pointer'>Create account</button>
            </form>

            <p className='max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal'>Already have an account? <Link  className='text-blue-500 font-medium' to={'/login'}>Login</Link></p>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Register
