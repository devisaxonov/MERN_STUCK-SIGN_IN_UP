import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center p-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-16 justify-between w-full">
          <div className="right_wrapper space-y-4 max-w-[550px] w-full h-auto">
            <h3 className="text-5xl text-[#313131] font-semibold capitalize">
              Login
            </h3>
            <p className="text-base font-medium">
              Login to access your account!
            </p>

            <form action="" className="space-y-4">
              <input
                type="email"
                className="max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3"
                placeholder="Your Email ..."
              />
              <input
                type="password"
                className="max-w-[640px] w-full h-[56px] border-[1px] border-[#313131] rounded-lg outline-none pl-3"
                placeholder="Your Password ..."
              />

              <button className="max-w-[640px] w-full h-[56px] bg-[#515def] rounded-lg justify-center text-base text-[#f3f3f3] font-semibold capitalize cursor-pointer">
                Login
              </button>
            </form>

            <p className="max-w-[640px] w-full h-auto text-sm text-[#313131] font-normal">
              Don't have an account?{" "}
              <Link className="text-red-500 font-medium" to={"/register"}>
                Register
              </Link>
            </p>
          </div>

          <div className="left_wrapper">
            <img src="/login_&_verify.png" className="w-[55vh] h-[78vh]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
