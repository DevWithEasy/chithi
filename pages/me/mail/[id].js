import designs from '@/utils/design'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'; 
import html2canvas from 'html2canvas';

export default function Mail() {
    const router = useRouter()
    const id = router.query.id
    const divRef = useRef(null)
    console.log(id)
    const mail = {
        font: 'font-baishakh',
        design: 0,
        content: 'আমি অপেক্ষা করছি তোমার জন্য। যদি তুমি আমায় ভালোবাসো, আমিও তোমায় সারা আকাশ ভেঙ্গে ভালোবাসা দেবো । আমি তোমায় ভালোবাসবো চোখে চোখ রেখে। ভালোবাসবো তোমায় আঙুলের স্পর্শে। সব দুর্নিবার দূরত্বের কষ্ট আমি উড়িয়ে দিবো বুকে চেপে ধরে। তোমার অস্থিরতা আমি শান্ত করবো। তোমার সব অতৃপ্ততা আমি ভালোবাসার আগুনে পুড়িয়ে দিবো। তোমার অভিমানে জল আমি ঠোঁটে ছুয়ে মুছে দিবো । তোমায় ভালোবাসবো আমি সঙ্গীতের মূর্ছনায়। আমি ভালোবাসবো তোমার সুগন্ধি। তোমার প্রতিটি মুহূর্ত কাটবে প্রথম মুহূর্তের পুনরাবির্ভাবের পুলকে।'
    }
    return (
        <div
            className='h-screen p-4 overflow-y-auto bg-gradient-to-t from-purple-100 to-purple-200 font-baishakh'
        >
            <div
                className='md:w-5/12 mx-auto'
            >
                <div
                ref={divRef}
                className='relative h-64 w-full'
            >
                <Image
                    src={designs[mail.design].image}
                    alt='design_1'
                    height={250}
                    width={1000}
                    className='absolute w-full h-[250px]'
                />
                <textarea
                    value={mail.content}
                    className={`${designs[mail.design].textarea} ${mail.font}`}
                />
            </div>
            </div>
            
        </div>
    )
}
