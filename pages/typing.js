import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io';

export default function Mail() {
    const router = useRouter()
    const [displayedText, setDisplayedText] = useState('')
    const [speed,setSpeed] = useState(100)
    const [content,setContent] = useState('আমার সোনার বাংলা আমি তোমায় ভালোবাসি')

    const playText=()=>{
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < content.length - 1) {
                setDisplayedText((prev) => prev + content[index]);
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId)
    }

    return (
        <div
            className='h-screen overflow-y-auto font-baishakh'
        >
            <Head>
                <title>টাইপিং লেখনি</title>
            </Head>
            <div
                className='h-screen md:w-6/12 mx-auto flex flex-col justify-between space-y-2 px-4'
            >
                <div
                    className='h-[50px] flex items-center space-x-2 py-2 border-b border-purple-600'
                >
                    <button
                        className='cursor-pointer flex items-center space-x-2'
                        onClick={() => router.back()}
                    >
                        <IoMdArrowBack />
                        <span>টাইপিং লেখনি</span>
                    </button>

                </div>
                <div
                    className='h-1/2 p-4 bg-white rounded-lg'
                >
                    <p className=''>{displayedText}</p>
                </div>
                <div
                    className='h-1/2 bg-white rounded-lg'
                >
                    <textarea
                        value={content}
                        onChange={(e)=>setContent(e)}
                        className='h-full w-full p-4 resize-none overflow-y-auto rounded-t-lg'
                    />
                </div>
                <div
                    className='h-[90px] px-4 bg-gray-100 flex items-center'
                >
                    <CiPlay1 onClick={playText}/>
                    <select
                        value={speed}
                        onChange={(e)=>setSpeed(e.target.value)}
                    >
                        <option value={200}>0.5x</option>
                        <option value={100}>1x</option>
                        <option value={50}>1.5x</option>
                        <option value={25}>2x</option>
                    </select>
                </div>
            </div>

        </div>
    )
}
