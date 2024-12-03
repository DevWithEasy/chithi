import Image from "next/image";
import Link from "next/link";
import { SlSocialFacebook } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="h-screen flex justify-center items-center font-baishakh"
    >
      <Head>
        <title>চিঠিবক্স - পরিচয়বিহীন চিঠি</title>
      </Head>
      <div
        className="flex flex-col items-center space-y-6"
      >
        <div
          className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600"
        >
          <Image
            src='/images/write-mail.png'
            alt="chiti"
            width={40}
            height={40}
          />
        </div>
        <h1 className="pt-4 text-4xl">চিঠি পাঠাও</h1>
        <p className="text-gray-600">তোমার বন্ধুদের কাছ থেকে বেনামী চিঠি গ্রহন কর</p>
        <div
          className="flex items-center space-x-4 text-white"
        >
          <a href='https://www.facebook.com/robiulawal688/' target="_blank">
            <button
              className="blok flex items-center space-x-1 px-2 py-1 rounded-md bg-gray-500 shadow-md shadow-gray-400"
            >
              <SlSocialFacebook/>
              <span>ফেইসবুক পেইজ</span>
            </button>
          </a>
          <Link href='/signin'>
            <button
              className="flex items-center space-x-1 px-2 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-600"
            >
              <IoMailOpenOutline/>
              <span>চিঠি বক্স খুলুন</span>
            </button>
          </Link>
        </div>
        <div
          className="flex items-center text-sm text-gray-500 space-x-1"
        >
          <Link href='/terms'>
            <span>ব্যবহার শর্তাবলী</span>
          </Link>
          <span>|</span>
          <Link href='/privacy'>
            <span>গোপনীয়তা নীতি</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
