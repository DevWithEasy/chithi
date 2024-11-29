import appStore from '@/store/store'
import unreadCount from '@/utils/unread'
import React from 'react'
import bn from "number-to-bangla";

export default function Tab() {
    const {tab,setTab,mails} = appStore()
  return (
    <div
          className='flex'
        >
          <button
            onClick={() => setTab(0)}
            className={`w-full py-2 border-b-2 ${tab !== 0 ? 'border-gray-200' : 'border-purple-500 text-purple-500'}`}
          >
            শেয়ার করুন</button>
          <button
            onClick={() => setTab(1)}
            className={`w-full flex justify-center items-center space-x-2 py-2 border-b-2 ${tab !== 1 ? 'border-gray-200' : 'border-purple-500 text-purple-500'}`}
          >
            <span>চিঠি বক্স</span>
            {unreadCount(mails)!==0 ?
            <p className='flex justify-center items-center animate-pulse h-5 w-5 rounded-full bg-purple-500 text-white text-xs'>
              <span>{bn.engToNumber(unreadCount(mails))}</span>
            </p> : null
            }
          </button>
        </div>
  )
}
