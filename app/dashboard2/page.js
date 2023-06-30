"use client"

import React, { useState } from 'react'
import { AiOutlineSchedule, AiOutlineTransaction, AiOutlineUser } from "react-icons/ai"
import { MdOutlineDashboard } from "react-icons/md"
import { RiSettings4Line } from "react-icons/ri"
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import Topcards from '@/components/Topcards'
import BarChart from '@/components/Linechar'
import PieChart from '@/components/Piechart'
import Schedulecard from '@/components/Schedulecard'
import Uppernav from '@/components/Uppernav'

const Dashboard2 = () => {

    const menus = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "Transactions", link: "/", icon: AiOutlineTransaction },
        { name: "Users", link: "/", icon: AiOutlineUser },
        { name: "Schedule", link: "/", icon: AiOutlineSchedule },
        { name: "Settings", link: "/", icon: RiSettings4Line },
        { name: "Logout", link: "/", icon: AiOutlineUser },

    ]

    const [open, setOpen] = useState(true)

    return (
        <>
            <div className="inline-block w-full sm:hidden sticky top-0 z-20">
                <Uppernav />
            </div>
            <section className=" flex overflow-x-hidden m-2 gap-2 rounded-2xl">
                <div className={` z-20 hidden sm:inline-block ${open ? "w-72" : "w-16"} duration-500 min-h-screen rounded-2xl   bg-black text-white px-4`}>
                    <div className="flex justify-end py-6">

                        <HiMenuAlt3 onClick={() => setOpen(!open)} className="cursor-pointer" size={20} />
                    </div>
                    <span className={`${!open && " flex opacity-0 translate-x-28 duration-500"}   text-white text-3xl font-medium whitespace-pre overflow-hidden`}>
                        Board.</span>
                    <div className="flex flex-col gap-4 relative p-3 mt-3">
                        {menus?.map((menu, i) => (
                            <Link key={i} className="flex items-center space-x-6 py-2 group text-sm  gap-3.5 font-medium   hover:bg-gray-800 rounded-md" href={menu?.link}>
                                <div className="">
                                    {React.createElement(menu.icon, { size: 20 })}
                                </div>
                                <h2
                                    style={{ transitionDelay: `${i + 3}00ms` }}
                                    className={` font-normal text-gray-200 text-lg whitespace-pre duration-500 ${!open && " translate-x-28  opacity-0 overflow-hidden"}`}>
                                    {menu.name}
                                </h2>
                                <h2

                                    className={`${open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`${open ? "sm:w-[80%]" : "w-full"} `}>
                    <div className="">
                        <Topcards />
                        <BarChart />
                    </div>
                    <div className="grid sm:grid-cols-2 w-full">
                        <div>
                            <PieChart />
                        </div>
                        <div>
                            <Schedulecard />
                        </div>
                    </div>
                </div>
            </section>
        </>




    )
}

export default Dashboard2






