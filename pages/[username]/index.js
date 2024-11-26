import banglaFonts from '@/utils/fonts'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { IoIosHeart } from "react-icons/io";

export default function SendMail() {
  const router = useRouter()
  const [selectFont, setSelectFont] = useState('font-baishakh')
  const username = router.query.username
  return (
    <div
      className='h-screen p-4 overflow-y-auto bg-gradient-to-t from-purple-100 to-purple-200 font-baishakh'
    >
      <div
        className='md:w-1/2 mx-auto space-y-5'
      >
      <div
        className='flex items-end space-x-2'
      >
        <div
          className='w-16 h-16 p-4 flex justify-center items-center bg-purple-300 rounded-full'
        >
          <CiUser size={40} />
        </div>
        <div>
          <p className='font-bold'>@{username}</p>
          <p className='text-sm text-gray-500'>বেনামি চিঠি পাঠান!</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-stretch gap-2'>
        {banglaFonts.map((font, index) => (
          <button
            key={index}
            onClick={()=>setSelectFont(font)}
            className={`w-16 h-16 bg-white text-xl rounded-full ${font} ${font=== selectFont && 'ring-2 ring-purple-500 text-purple-500'}`}>
            চিঠি
          </button>
        ))}
      </div>
      <div
        className='relative h-48 w-full'
      >
        <textarea
          className={`absolute z-10 resize-none h-48 w-full p-8 ${selectFont}`}
        >

        </textarea>
      </div>
        <div
          className='flex justify-end'
        >
        <button
          className='flex items-center space-x-1 p-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-lg shadow-lg shadow-purple-500'
        >
        <IoIosHeart/>
          <span>চিঠি পাঠাও</span>
        </button>
        </div>
      </div>
    </div>
  )
}
