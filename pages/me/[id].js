import MailBox from '@/components/MailBox'
import Share from '@/components/Share'
import appStore from '@/store/store'
import shareApi from '@/utils/shareApi'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Profile({ info }) {
  const [tab, setTab] = useState(0)
  const [mails, setMails] = useState(info.mails)
  const { user } = appStore()

  const fetchMails = async () => {
    try {
      const { data } = await axios.get(`${shareApi}/api/mail/me/${info.user._id}`)
      setMails(data)
    } catch (error) {
      console.error('Error fetching mails:', error.response ? error.response.data : error.message);
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMails();
    }, 1000*60)

    return () => clearInterval(intervalId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(mails)
  return (
    <div
      className='h-screen overflow-y-auto font-baishakh'
    >
      <Head>
        <title>{`@${info.user.username} - চিঠিবক্স`}</title>
      </Head>
      <div
        className='md:w-5/12 mx-auto'
      >
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
            className={`w-full py-2 border-b-2 ${tab !== 1 ? 'border-gray-200' : 'border-purple-500 text-purple-500'}`}
          >
            চিঠি বক্স</button>
        </div>
        <div
          className=''
        >
          {
            tab === 0 ?
              <Share /> :
              <MailBox mails={mails} />
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  try {
    const { data } = await axios.get(`${shareApi}/api/user/me/${id}`)
    console.log(data)
    return {
      props: {
        info: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        info: {},
      },
    };
  }
}