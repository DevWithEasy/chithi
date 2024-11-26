import React from 'react'
import { CiMail } from "react-icons/ci";

export default function Sent() {
  return (
    <div
      className='h-screen p-4 flex justify-center items-center overflow-y-auto bg-gradient-to-t from-purple-100 to-purple-200 font-baishakh'
    >
        <div
            className='w-full md:w-1/2 flex flex-col items-center space-y-5'
        >
            <div
                className='h-16 w-16 flex justify-center items-center rounded-full bg-emerald-400 text-white shadow-lg'
            >
                <CiMail size={40}/>
            </div>
            <p
                className='text-lg font-bold'
            >
                আপনার চিঠি সফলভাবে পাঠানো হয়েছে!
            </p>
            <p
                className='w-full text-gray-700'
            >
                <b className='text-xl text-purple-500'>চিঠি</b> অনেক ফ্রন্ট ও থিম সম্বলিত <span className='underline'>পরিচয় ছাড়া</span> চিঠি পাঠানোর একটি বিশ্বস্ত এপ্স। পরিচয় লুকিয়ে চিঠি লিখুন মন খুলে।
            </p>
        </div>
    </div>
  )
}
