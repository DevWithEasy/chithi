import MailBox from '@/components/MailBox'
import Share from '@/components/Share'
import shareApi from '@/utils/shareApi'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Profile({mails}) {
  const [tab,setTab] = useState(0)
  const router = useRouter()
  console.log(mails)
  return (
    <div
        className='h-screen font-baishakh bg-gray-50'
    >
        <div
            className='md:w-5/12 mx-auto'
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
                <MailBox mails={mails}/> 
            }
        </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    console.log(id)
    try {
      const { data } = await axios.get(`${shareApi}api/mail/${id}`)
      return {
        props: {
          mails: data,
        },
      };
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      return {
        props: {
            mails: [],
        },
      };
    }
  }
