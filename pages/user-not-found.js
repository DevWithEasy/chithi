import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {
  const router = useRouter()
  return (
    <div
        className='h-screen flex justify-center items-center overflow-y-auto font-baishakh'
    >
        <Head>
        <title>@{router.query.q} এই আইডি খুজে পাওয়া যায়নি।</title>
      </Head>
        <div
            className='flex flex-col justify-center items-center space-y-5'
        >
            <Image
                alt='not-found'
                src='/images/user-not-found.png'
                height={80}
                width={80}
            />
            <p className='text-xl'>আইডি খুজে পাওয়া যায় নি। সঠিক লিংক কপি করুন।</p>
            <Link href='/'>
                <p className='px-6 py-1 bg-purple-500 text-white rounded-lg shadow-md shadow-purple-500'>মুলপাতা</p>
            </Link>
        </div>
    </div>
  )
}
