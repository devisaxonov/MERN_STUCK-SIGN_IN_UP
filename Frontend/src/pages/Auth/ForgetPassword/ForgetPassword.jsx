import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="w-full flex items-center justify-center p-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-16 justify-between w-full">
          <div className="right_wrapper space-y-4 max-w-[550px] w-full h-auto">
            <h3 className="text-5xl text-[#313131] font-semibold capitalize">
              Forget your password?
            </h3>
            <p className="text-base font-medium">
              Don't worry happens to all of us. Enter your email below to recover your password.
            </p>

            <form action="" className="space-y-4">
              <input
                type="email"
                className="max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3"
                placeholder="Your Email ..."
              />
              <button className="max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg justify-center text-base text-[#f3f3f3] font-semibold capitalize cursor-pointer">
                Submit
              </button>
            </form>
          </div>

          <div className="left_wrapper">
            <img src="/forget_&_reset.png" className="w-[60vh] h-[78vh]" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
