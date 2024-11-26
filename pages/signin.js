import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Signup() {
    return (
        <div
            className='h-screen p-4 flex justify-center items-center font-baishakh bg-gray-100'
        >
            <div
                className='w-full md:w-1/2 p-4 bg-white rounded-lg space-y-4'
            >
                <div
                    className='flex flex-col items-center space-y-3'
                >
                    <Image
                    src='/images/mailboxlock.png'
                    alt='mailboxlock'
                    width={50}
                    height={50}
                />
                <h1 className='text-xl font-bold text-purple-600'> লগ-ইন করুন</h1>
                </div>
                
                <div
                    className='flex flex-col space-y-1'
                >
                    <label htmlFor=''>ইউজার আইডি নামঃ</label>
                    <input type='text'
                        name=''
                        className='w-full p-2 rounded border focus:border-purple-500 focus:outline-none placeholder:text-sm focus:ring-1 ring-purple-500'
                    />
                </div>
                <div
                    className='flex flex-col space-y-1'
                >
                    <label htmlFor=''>পাসওয়ার্ড লিখুনঃ</label>
                    <input type='text'
                        name=''
                        placeholder=''
                        className='w-full p-2 rounded border focus:border-purple-500 focus:outline-none placeholder:text-sm focus:ring-1 ring-purple-500'
                    />
                </div>
                <button 
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl"
                >
                    লগ-ইন করুন
                </button>
                <div
                    className='flex justify-center space-x-2'
                >
                    <p>একাউন্ট না থাকলে? </p>
                    <Link href='/signin'>
                        <span className='text-blue-500'> নতুন একাউন্ট খুলুন</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
