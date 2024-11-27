import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div
        className='h-screen p-4 flex justify-center items-center overflow-y-auto bg-gradient-to-t from-purple-100 to-purple-200 font-baishakh'
    >
        <div
            className='flex flex-col justify-center items-center space-y-5'
        >
            <Image
                alt='not-found'
                src='/images/not-found.png'
                height={80}
                width={80}
            />
            <p className='text-xl'>এই পাতাটি খুজে পাওয়া যায় নি।</p>
            <Link href='/'>
                <p className='px-6 py-1 bg-purple-500 text-white rounded-lg shadow-md shadow-purple-500'>মুলপাতা</p>
            </Link>
        </div>
    </div>
  )
}
