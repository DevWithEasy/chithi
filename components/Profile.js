import React, { useState } from 'react'
import Share from './Share'
import MailBox from './MailBox'

export default function Prodile() {
  const [tab,setTab] = useState(0)
  return (
    <div
        className='font-baishakh'
    >
        <div
            className='flex'
        >
            <button
                onClick={()=>setTab(0)}
                className={`w-full py-2 border-b-2 ${tab !== 0 ? 'border-gray-200' : 'border-purple-500 text-purple-500'}`}
            >
                শেয়ার করুন</button>
            <button
                onClick={()=>setTab(1)}
                className={`w-full py-2 border-b-2 ${tab !== 1 ? 'border-gray-200' : 'border-purple-500 text-purple-500'}`}
            >
                চিঠি বক্স</button>
        </div>
        <div
            className=''
        >
            {
                tab === 0 ?
                <Share/> :
                <MailBox/> 
            }
        </div>
    </div>
  )
}
