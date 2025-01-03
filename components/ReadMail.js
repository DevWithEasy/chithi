import appStore from '@/store/store'
import getTimeAgo from '@/utils/timeago'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoMailUnreadOutline } from 'react-icons/io5'

export default function ReadMail({ mail }) {

    return (
        <Link
            href={`/me/mail/${mail._id}`}
        >
            <div
                className='flex items-center space-x-2 rounded-lg px-4 py-2 mb-2 bg-white hover:bg-purple-500 hover:text-white cursor-pointer'
            >
                <IoMailUnreadOutline className='flex-shrink-0' size={25} />
                <div
                    className='space-y-1 overflow-hidden'
                >
                    <p className='text-sm truncate'>{mail.content}</p>
                    <p className='text-xs text-gray-400'>{getTimeAgo(mail.createdAt)}</p>
                </div>
            </div>
        </Link>

    )
}
