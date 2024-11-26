import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMailUnreadOutline  } from "react-icons/io5";
import ReadMail from './ReadMail';
import UnreadMail from './UnreadMail';

export default function MailBox() {
  const mails = [
    { id: 1, read : true, from: 'John Doe', subject: 'Meeting Reminder', content: 'Don\'t forget about our meeting tomorrow at 10 AM.' },
    { id: 2, read : false, from: 'Jane Smith', subject: 'New Product Launch', content: 'Check out our new product, it\'s amazing!' },
    { id: 3, read : true, from: 'Bob Johnson', subject: 'Important Document', content: 'Please review this document before next week.' },
  ]
  return (
    <div
      className='p-4 space-y-5'
    >
      <div
        className='flex items-center space-x-2 bg-white px-2 rounded-lg border'
      >
        <IoSearchOutline />
        <input
          className='w-full p-2 focus:outline-none'
          type='text'
          placeholder='খুঁজুন...'
        />
      </div>
      <div
        className='space-y-2'
      >
          {
            mails.map(mail => (
              mail.read ? 
              <ReadMail key={mail.id} mail={mail}/> : 
              <UnreadMail key={mail.id} mail={mail}/> 
            ))
          }
      </div>
    </div>
  )
}
