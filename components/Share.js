'use client'
import appStore from "@/store/store";
import shareApi from "@/utils/shareApi";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { FaGooglePlay } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
export default function Share() {
  const { user } = appStore()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareApi +"/"+ user.username)
      .then(() => { alert('লিংক কপি হয়েছে!'); })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      })
  }
  
  return (
    <div
      className="p-4 md:px-0 md:pt-4 space-y-5"
    >
      <div
        className="flex flex-col items-center space-y-2"
      >
        <div
          className='w-20 h-20 mx-auto p-4 flex justify-center items-center border-2 border-purple-500 rounded-full'
        >
          <CiUser size={40} color='#a855f7' />
        </div>
        <p className="font-bold">@{user.username}</p>
      </div>
      <div
        className="p-4 bg-white rounded-lg space-y-3"
      >
        <p className="text-purple-500">শেয়ার লিংক</p>
        <div
          className="flex items-center space-x-2"
        >
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-sm text-gray-500 border p-2 overflow-hidden rounded-lg"
          >
            <IoIosLink />
            <span>{shareApi}/{user.username}</span>
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-sm bg-gray-500 text-white p-2 rounded-lg"
          >
            <IoCopyOutline />
            <span className="hidden md:inline-block">কপি করুন</span>
          </button>
        </div>
        <p
          className="text-gray-600"
        >
          আপনার লিংকটি ফেইসবুক,ইন্সটাগ্রাম,হোয়াটসএপ শেয়ার করে বেনামি চিঠি গ্রহন করুন। যারা আপনাকে সরাসরি আপনাকে সম্পর্কে ভুল গুলো বলতে পারেনা তারা বলবে মন খুলে আপনার ভুল গুলো।</p>
      </div>
      <div
        className="p-4 bg-white rounded-lg space-y-3"
      >
        <p className="text-purple-500">চিঠি</p>
        <p
          className="text-gray-600"
        >
          চিঠি এপ্সটি ভালো লেগে থাকলে আমাদের ফেইসবুকে লাইক দিন এবং প্লেস্টোরে গিয়ে আমাদের রেটিং দিয়ে আসুন।
        </p>
        <div
          className="flex items-center space-x-4 text-sm"
        >
          <Link href=''>
            <button
              className="blok flex items-center space-x-1 px-2 py-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            >
              <SlSocialFacebook />
              <span>ফেইসবুক পেইজ</span>
            </button>
          </Link>
          <Link href='/signup'>
            <button
              className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-gray-500 text-white"
            >
              <FaGooglePlay />
              <span>রেটিং দিন</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
