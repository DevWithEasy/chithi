import shareApi from '@/utils/shareApi';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

export default function Mail({ mail }) {
    const router = useRouter()
    const [displayedText, setDisplayedText] = useState('')
    const typingSpeed = 100; // milliseconds

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < mail.content.length - 1) {
                setDisplayedText((prev) => prev + mail.content[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [mail.content]);

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
                {/* <div
                    className='relative h-64 w-full'
                >
                    <Image
                        src={designs[mail.design - 1].image}
                        alt='design_1'
                        height={400}
                        width={1000}
                        className='absolute w-full h-[250px]'
                    />
                    <textarea
                        value={displayedText}
                        readOnly
                        className={getTextarea(mail)}
                    />
                </div> */}
                    <p className='bg-white p-4 rounded-lg'>{displayedText}</p>
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