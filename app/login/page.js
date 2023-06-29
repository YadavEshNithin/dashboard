"use client"
import React from 'react'
import Image from 'next/image'
import {  signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const router = useRouter();

    const {data : session} = useSession()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = { email, password }

    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    let response = await res.json()
    console.log(response)

    setEmail("")
    setPassword("")
    if (response.success) {
      localStorage.setItem("token", response.token)
      toast.success('Your are successfully logged in!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(()=>{
        router.push("/dashboard2");
      },1000)
    }
    else {
      toast.error(response.error, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  

      }
    return (
        
      <div>
         <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
          <div className="bg-gray-100 sm:flex">
            <div className="bg-black text-white h-screen w-[30%] hidden sm:flex  items-center justify-center text-6xl font-bold ">
               <p className=" cursor-pointer p-4 hover:border shadow">
                Board.
               </p>
            </div>
            <div className="sm:hidden flex items-center justify-center h-20 bg-black overflow-hidden">
                <p className=" text-white cursor-pointer p-3 hover:border shadow font-semibold text-3xl">
                    Board.
                </p>
            </div>
            <div className="flex justify-center items-center h-screen p-3 mx-auto">
                <div className=" flex justify-center items-center h-auto">
                    <div className="w-[420px] bg-gray-100 p-3 border  border-gray-100 rounded-md space-y-3">
                        <h1 className="font-bold text-3xl px-6 sm:px-0">
                            Sign in
                            <p className="font-medium text-base">
                                Sign in to your account
                            </p>
                        </h1>
                        <div className="flex space-x-12 py-6 rounded-xl px-3 ml-3 border shadow-sm">
                            <p onClick={session ? signOut : signIn} className="flex items-center cursor-pointer">
                                <Image className="object-contain mr-2" src="/pngwing.com (8).png" width={20} height={20} alt="google_logo" />
                                <span className={`${session?"text-sm text-black font-medium":"text-sm text-gray-400"}`}>
                                    {session?"sign out Google":"sign in with Google"}
                                </span>
                            </p>
                            <p onClick={session ? signOut : signIn} className=" flex items-center cursor-pointer">
                                <Image className="object-contain mr-2" src="/pngwing.com (9).png" width={20} height={20} alt="google_logo" />
                                <span className={`${session?"text-sm text-black font-medium":"text-sm text-gray-400"}`}>
                                    {session?"sign out Apple":"sign in with Apple"}
                                </span>
                            </p>
                        </div>

                        <div className="px-10">
                        {session && <><button onClick={()=>router.push("/dashboard2")} className=" w-full text-center bg-black text-white p-2 rounded-lg ">continue to dashboard</button></>}
                        </div>

                        <form onSubmit={handleSubmit} className="px-9 space-y-6">
                            <div className="">
                                <label htmlFor="email"  className="font-semibold" >Email address</label>
                                <div>
                                    <input onChange={handleChange} className="w-full focus:bg-gray-200  hover:bg-gray-200  rounded-md py-2 mt-1"  value={email} id="email" name="email" type="email" autoComplete="email" required/>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="password"  className="font-semibold" >Password</label>
                                <div>
                                    <input onChange={handleChange} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="w-full   rounded-md py-2 focus:bg-gray-200 hover:bg-gray-200 mt-1"  />
                                </div>
                                <p className="text-blue-600 text-sm mt-1">
                                    Forgot Password?
                                </p>
                                <button  className="w-full py-1.5 bg-black text-white font-semibold mt-6 rounded-md">
                                    sign in
                                </button>
                                <div className="sm:mt-8  mt-14 text-center text-sm font-medium">
                                    {`Don't have an account?`}<span onClick={() => router.push("/signup")} className="text-blue-600 cursor-pointer">Register here</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login



