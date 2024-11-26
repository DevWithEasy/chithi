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
                <h1 className='text-xl font-bold text-purple-600'>নতুন একাউন্ট করুন</h1>
                </div>
                
                <div
                    className='flex flex-col space-y-1'
                >
                    <label htmlFor=''>ইউজার আইডি নামঃ</label>
                    <input type='text'
                        name=''
                        placeholder='robiul_awal or robiulawal'
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
                <div
                    className='flex flex-col space-y-1'
                >
                    <label htmlFor=''>ই-মেইল লিখুনঃ (ঐচ্ছিক)</label>
                    <input type='text'
                        name=''
                        placeholder='chitime@mail.com'
                        className='w-full p-2 rounded border focus:border-purple-500 focus:outline-none placeholder:text-sm focus:ring-1 ring-purple-500'
                    />
                    <p className='text-sm text-red-500'>পাসওয়ার্ড ভুলে গেলে আইডি ফেরত পেতে ই-মেইল যোগ করতে পারেন।</p>
                </div>
                <button 
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl"
                >
                    একাউন্ট নিশ্চিত করুন
                </button>
                <div
                    className='flex justify-center space-x-2'
                >
                    <p>ইতিমধ্যে একাউন্ট করা আছে? </p>
                    <Link href='/signin'>
                        <span className='text-blue-500'>লগ-ইন করুন</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
