import React from 'react'
import {  MdArrowForwardIos } from 'react-icons/md'

const Schedulecard = () => {
    return (
        <div className="">
            <div className="bg-gray-100  mb-10 h-auto m-10  w-[80%]">


                <div className="mt-16 p-2 font-bold flex justify-between"> <h1 className="mt-3 p-2">
                {`Today's Schedule`}
                </h1>
                <p className="mr-3 mt-3 text-gray-400 p-2 flex items-center space-x-2"><span className="font-normal">See all</span>  <MdArrowForwardIos className=""/></p>

                </div>

                <div className="p-5 mt-5 flex items-center space-x-3">
                <p className="bg-green-500 w-2 h-16 rounded-md"></p>
                    <div className="mt-0 font-semibold ">
                       
                        <p className="mb-2 text-gray-800">
                        Meeting with suppliers at Kuta Bali
                        </p>
                        <p className="text-gray-500 text-sm">14:00 15:00 </p>
                        <p className="text-gray-500 text-sm">at Sunset Road from Kuta Bali</p>
                    </div>
                   
                </div>
                <div className="p-5 mt-5 flex items-center space-x-3">
                <p className="bg-violet-800 w-2 h-16 rounded-md"></p>
                    <div className="mt-0 font-semibold ">
                       
                        <p className="mb-2 text-gray-800">
                         Check operation at Giga Factory 1
                        </p>
                        <p className="text-gray-500 text-sm">18:00-20:00</p>
                        <p className="text-gray-500 text-sm">at Central Jakarta</p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Schedulecard
