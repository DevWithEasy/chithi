import Link from 'next/link'
import React from 'react'
import { IoMailUnread } from 'react-icons/io5'

export default function UnreadMail() {
  return (
    <Link
        href={``}
    >
        <div
        className='flex items-center space-x-2 rounded-lg px-4 py-2 mb-2 bg-gradient-to-l from-purple-200 to-purple-400 text-white cursor-pointer'
    >
        <IoMailUnread size={25}/>
        <div
            className='space-y-1'
        >
            <p className='text-sm font-bold'>নতুন চিঠি</p>
            <p className='text-xs text-gray-100'>ট্যাপ করে চিঠিটি খুলুন</p>
        </div>
    </div>
    </Link>
  )
}
