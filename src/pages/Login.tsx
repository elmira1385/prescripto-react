import React, { useState } from "react";

const Login = () => {
  const [isRegisterOpen, setIsResterOpen] = useState(true);
  return (
    <>
      {isRegisterOpen ? (
        <form className="min-h-[80vh] flex items-center justify-center">
          <div className="flex flex-col gap-4  items-start p-12   rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">Create Account</p>
              <p>Please sign up to book appointment</p>
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Full Name</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2"
                type="text"
                value=""
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Email</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2 "
                type="email"
                value=""
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Password</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2 "
                type="password"
                value=""
              />
            </div>
            <button className="bg-primary text-white w-full py-2 m rounded-md text-base">
              Create account
            </button>
            <p>
              Already have an account?
              <span onClick={()=>{
                setIsResterOpen(false)
              }} className="text-primary underline cursor-pointer">
                Login here
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form className="min-h-[80vh] flex items-center justify-center">
          <div className="flex flex-col gap-4  items-start p-12   rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">Login</p>
              <p>Please login to book appointment</p>
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Email</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2 "
                type="email"
                value=""
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Password</p>
              <input
                className="border border-[#DADADA] rounded w-full p-2 "
                type="password"
                value=""
              />
            </div>
            <button className="bg-primary text-white w-full py-2 m rounded-md text-base">
              Create account
            </button>
            <p>
              Create a new account?
              <span  onClick={()=>{
                setIsResterOpen(true)
              }}  className="text-primary underline cursor-pointer">
                Click here
              </span>
            </p>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
