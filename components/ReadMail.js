import React from 'react'
import { IoMailUnreadOutline } from 'react-icons/io5'

export default function ReadMail({mail}) {
  return (
    <div
    className='flex items-center space-x-2 rounded-lg px-4 py-2 bg-white cursor-pointer'
>
    <IoMailUnreadOutline size={25}/>
    <div
        className='space-y-1'
    >
        <p className='text-sm'>{mail.subject}</p>
        <p className='text-xs text-gray-400'>৬ দিন আগে</p>
    </div>
</div>
  )
}
