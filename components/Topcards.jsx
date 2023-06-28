"use client"

import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlineLike, AiOutlineTransaction, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'


const Topcards = () => {
  const { data: session } = useSession()

  const router = useRouter()

  return (
    <>
      <div className="h-auto w-full hidden sm:inline-block -z-20 bg-gray-100">
        <div className="flex items-center justify-between mx-10 p-5">

          <h1 className="font-bold text-3xl">Dashboard</h1>

          <div className="flex items-center space-x-6">
            <div className="flex flex-grow items-center bg-gray-200 rounded-full  border-gray-200 border shadow-sm ">
              <input placeholder="Search..." className="border   py-2.5 px-6 rounded-full bg-gray-200 font-normal text-sm focus:outline-none mr-3" type="text" />
              <MagnifyingGlassIcon className="h-4 mr-4 text-gray-500" />
            </div>
            <BellAlertIcon className="h-8" />
            <p onClick={session ? signOut : signIn} className="bg-gray-200 w-10 h-10 rounded-full items-center flex text-center justify-center border shadow border-gray-300 cursor-pointer">
              <Image className="rounded-full" src={session ? session.user.image : "/pngwing.com (8).png"} width={28} height={28} alt="user_image" />
            </p>
            {/* <span onClick={()=>router.push("/login")} className="cursor-pointer p-2 bg-gray-200 rounded-full text-sm text-gray-500">
          Sign out
        </span> */}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-100 sm:ml-0 rounded-2xl">
        <div className="bg-green-200  w-full border p-4 rounded-xl flex justify-between relative">
          <div className="flex flex-col w-full pb-4 mt-6">
            <p>Total Revenues</p>
            <p className="font-bold text-xl">$2, 129, 430</p>
          </div>
          <p className="flex items-center justify-center mt-2 rounded-lg bg-slate-500  ">
            <span className="absolute top-0 right-2 text-2xl p-3">
              <MdOutlineDashboard />
            </span>
          </p>
        </div>
        <div className="bg-yellow-200 w-full border p-4 rounded-xl flex justify-between relative">
          <div className="flex flex-col w-full pb-4 mt-6">
            <p>Total Transactions</p>
            <p className="font-bold text-xl">1, 520</p>
          </div>
          <p className="flex items-center justify-center p=2 rounded-lg">
            <span className="absolute top-0 right-2 p-3 text-2xl">
              <AiOutlineTransaction />
            </span>
          </p>
        </div>
        <div className="bg-pink-200  w-full border p-4 rounded-xl flex justify-between relative">
          <div className="flex flex-col w-full pb-4 mt-6">
            <p className="">Total Likes</p>
            <p className="font-bold text-xl">1, 972</p>
          </div>
          <p className="flex items-center justify-center p-2 rounded-xl">
            <span className="absolute top-0 right-2 p-3 text-2xl">
              <AiOutlineLike />
            </span>
          </p>
        </div>
        <div className="bg-blue-200  w-full border p-4 rounded-xl flex justify-between relative">
          <div className="flex flex-col w-full pb-4 mt-6">
            <p>Total Users</p>
            <p className="font-bold text-xl">892</p>
          </div>
          <p className="flex items-center justify-center p=2 rounded-lg">
            <span className="absolute top-0 right-2 p-3 text-2xl">
              <AiOutlineUsergroupAdd />
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Topcards
