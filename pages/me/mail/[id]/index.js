import appStore from '@/store/store';
import designs from '@/utils/design';
import shareApi from '@/utils/shareApi';
import getTextarea from '@/utils/textArea';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IoMdArrowBack } from "react-icons/io";

export default function Mail({ mail }) {
  const router = useRouter()
  const {mails,setMails} = appStore()

  const updateMail = async (mail) => {
    if(mail.seen) return
    try {
      const { data } = await axios.put(`/api/mail/update/${mail._id}`)
      setMails(mails.map(m => m._id === id ? data : m))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    updateMail(mail)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mail])
  return (
    <div
      className='h-screen p-4 overflow-y-auto font-baishakh'
    >
      <Head>
        <title>চিঠি</title>
      </Head>
      <div
        className='md:w-5/12 mx-auto space-y-5'
      >
        <div
          className='flex items-center space-x-2 py-2 border-b border-purple-600'
        >
          <button
            className='cursor-pointer flex items-center space-x-2'
            onClick={() => router.back()}
          >
            <IoMdArrowBack />
            <span>চিঠি</span>
          </button>

        </div>
        <div
          className='relative h-64 w-full'
        >
          <Image
            src={designs[mail.design - 1].image}
            alt='design_1'
            height={250}
            width={1000}
            className='absolute w-full h-[250px]'
          />
          <textarea
            value={mail.content}
            readOnly
            className={getTextarea(mail)}
          />
        </div>
        <div
          className='flex justify-center items-center'
        >
          <Link href={`/me/mail/${mail._id}/typing`}>
            <span
              className='px-4 py-1 text-sm text-white rounded-lg bg-gradient-to-l from-purple-500 to-purple-600'
            >
              Watch Typing Playback
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  console.log(id)
  try {
    const { data } = await axios.put(`${shareApi}/api/mail/${id}`)
    return {
      props: {
        mail: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        mail: {},
      },
    };
  }
}