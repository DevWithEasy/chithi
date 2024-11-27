import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import ReadMail from './ReadMail';
import UnreadMail from './UnreadMail';

export default function MailBox({mails}) {
  const [search,setSearch] = useState('')
  
  
  return (
    <div
      className='p-4 md:px-0 md:pt-4 space-y-5'
    >
      <div
        className='flex items-center space-x-2 bg-white px-2 rounded-lg border border-gray-100'
      >
        <IoSearchOutline />
        <input
          className='w-full p-2 focus:outline-none'
          type='text'
          placeholder='খুঁজুন...'
        />
      </div>
      <div
        className=''
      >
          {
            mails.map(mail => (
              mail.seen ? 
              <ReadMail key={mail._id} mail={mail}/> : 
              <UnreadMail key={mail._id} mail={mail}/> 
            ))
          }
      </div>
    </div>
  )
}
