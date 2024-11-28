import appStore from '@/store/store'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const {loged} = appStore()

    const handleSignin = async () => {
        if (!username || !password) return
        try {
            const { data } = await axios.post(`/api/user/signin`, { username, password })
            if(data){
                loged(data.data)
                router.push(`/me/${data.data._id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div
            className='h-screen p-4 flex justify-center items-center overflow-y-auto font-baishakh'
        >
            <Head>
        <title>লগইন - চিঠিবক্স</title>
      </Head>
            <div
                className='w-full md:w-4/12 p-4 bg-white rounded-lg space-y-4'
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
                        onChange={(e) => setUsername(e.target.value)}
                        name=''
                        className='w-full p-2 rounded border focus:border-purple-500 focus:outline-none placeholder:text-sm focus:ring-1 ring-purple-500'
                    />
                </div>
                <div
                    className='flex flex-col space-y-1'
                >
                    <label htmlFor=''>পাসওয়ার্ড লিখুনঃ</label>
                    <input type='text'
                        onChange={(e) => setPassword(e.target.value)}
                        name=''
                        placeholder=''
                        className='w-full p-2 rounded border focus:border-purple-500 focus:outline-none placeholder:text-sm focus:ring-1 ring-purple-500'
                    />
                </div>
                <button
                    onClick={handleSignin}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl"
                >
                    লগ-ইন করুন
                </button>
                <div
                    className='flex justify-center space-x-2'
                >
                    <p>একাউন্ট না থাকলে? </p>
                    <Link href='/signup'>
                        <span className='text-blue-500'> নতুন একাউন্ট খুলুন</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
