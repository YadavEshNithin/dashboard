"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { AiOutlineSchedule, AiOutlineSetting, AiOutlineTransaction, AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Uppernav = () => {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()
    return (
        <main className="z-50  w-full top-0 sticky">
            <div className="relative flex items-center h-20 text-white bg-black text-3xl font-medium">
                <p  onClick={()=>setOpen(!open)} className="cursor-pointer ml-3">{open ? <RxCrossCircled/> : <HiMenuAlt3/>}</p>
                <p className=" text-center w-full ml-20">Board.</p>
               
                <p onClick={()=>router.push("/login")} className="text-sm whitespace-nowrap mr-4 border border-gray-200 p-2 rounded-xl cursor-pointer">
                    Sign out
                </p>
                <Image onClick={session?signOut:signIn} className="rounded-full mr-3 cursor-pointer" src={session?session.user.image:"/pngwing.com (8).png"} width={30} height={30} alt="user_image"/>
               

            </div>
            <div className={`absolute py-6 flex flex-col gap-6 bg-black text-white w-full rounded-b-2xl  ${open ? "h-64 " : "h-0 opacity-0"} duration-500 `}>
                <div className=" text-center space-y-6 mx-auto text-gray-300 group group-hover:bg-slate-600
                 ">
                    <p className="flex items-center w-full  space-x-2 hover:text-white hover:font-bold cursor-pointer hover:bg-gray-800 rounded-2xl hover:py-1"><MdOutlineDashboard /><span>Dashboard</span></p>
                    <p className="flex items-center w-full  mx-auto space-x-2 hover:text-white hover:font-bold cursor-pointer hover:bg-gray-800 rounded-2xl   hover:py-1"><AiOutlineTransaction /><span>Transaction</span></p>
                    <p className="flex items-center w-full  mx-auto space-x-2 hover:text-white hover:font-bold cursor-pointer hover:bg-gray-800 rounded-2xl   hover:py-1"><AiOutlineUser /><span>User</span></p>
                    <p className="flex items-center w-full  mx-auto space-x-2 hover:text-white hover:font-bold cursor-pointer hover:bg-gray-800 rounded-2xl   hover:py-1"><AiOutlineSchedule /><span>Schedule</span></p>
                    <p className="flex items-center w-full  mx-auto space-x-2 hover:text-white hover:font-bold cursor-pointer hover:bg-gray-800 rounded-2xl  hover:py-1"><AiOutlineSetting /><span>Setting</span></p>
                </div>

            </div>
        </main>
    )
}

export default Uppernav
