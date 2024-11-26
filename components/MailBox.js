import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMailUnreadOutline  } from "react-icons/io5";
import ReadMail from './ReadMail';
import UnreadMail from './UnreadMail';

export default function MailBox() {
  const [search,setSearch] = useState('')
  const mails = [
    { id: 1, read : true, from: 'John Doe', subject: 'Meeting Reminder', content: "আপনার দুর্বলতাকে শক্তিতে পরিণত করার ক্ষমতা একমাত্র আল্লাহ্ তা'আলা-ই রাখেন। তাই তাঁর কাছেই প্রার্থনা করুন। -ড. বিলাল ফিলিপ্স" },
    { id: 2, read : false, from: 'Jane Smith', subject: 'New Product Launch', content: "আপনার দুর্বলতাকে শক্তিতে পরিণত করার ক্ষমতা একমাত্র আল্লাহ্ তা'আলা-ই রাখেন। তাই তাঁর কাছেই প্রার্থনা করুন। -ড. বিলাল ফিলিপ্স" },
    { id: 3, read : true, from: 'Bob Johnson', subject: 'Important Document', content: "আপনার দুর্বলতাকে শক্তিতে পরিণত করার ক্ষমতা একমাত্র আল্লাহ্ তা'আলা-ই রাখেন। তাই তাঁর কাছেই প্রার্থনা করুন। -ড. বিলাল ফিলিপ্স" },
  ]
  return (
    <div
      className='p-4 space-y-5'
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
              mail.read ? 
              <ReadMail key={mail.id} mail={mail}/> : 
              <UnreadMail key={mail.id} mail={mail}/> 
            ))
          }
      </div>
    </div>
  )
}
