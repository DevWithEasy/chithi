import TextAreaOne from '@/components/designtextarea/TextAreaOne';
import TextAreaThree from '@/components/designtextarea/TextAreaThree';
import TextAreaTwo from '@/components/designtextarea/TextAreaTwo';
import designs from '@/utils/design';
import shareApi from '@/utils/shareApi';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { IoIosHeart } from "react-icons/io";

export default function SendMail({ data }) {
  const router = useRouter()
  const [selectFont, setSelectFont] = useState('font-baishakh')
  const [selectDesign, setSelectDesign] = useState(designs[0])
  const [content, setContent] = useState()
  const senMail = async () => {
    try {
      const response = await axios.post(
        `/api/mail/sent/${data?.user?._id}`,
        {
          content,
          design: selectDesign.id,
          font: selectFont
        }
      )
      // router.push(`/${data?.user?.username}/sent`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className='h-screen p-4 overflow-y-auto bg-gradient-to-t from-purple-100 to-purple-200 font-baishakh'
    >
      <Head>
        <title>{`@${data?.user?.username} is on Chithi Pathao`}</title>
      </Head>
      <div
        className='md:w-5/12 mx-auto space-y-5'
      >
        <div
          className='flex items-end space-x-2'
        >
          <div
            className='w-16 h-16 p-4 flex justify-center items-center bg-purple-300 rounded-full'
          >
            <CiUser size={40} />
          </div>
          <div>
            <p className='font-bold'>@{data?.user?.username}</p>
            <p className='text-sm text-gray-500'>বেনামি চিঠি পাঠান!</p>
          </div>
        </div>
        <div
          className='flex flex-wrap gap-2'
        >
          <button
            onClick={() => setSelectFont('font-baishakh')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-baishakh'>
            <span>চিঠি</span>
          </button>
          <button
            onClick={() => setSelectFont('font-banglaborno')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-banglaborno'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-chainateesa')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-chainateesa'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-deyalika')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-deyalika'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-hostoshoily')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-hostoshoily'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-ichamati')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-ichamati'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-indibangla')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-indibangla'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-jmakash')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-jmakash'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-lipishree')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-lipishree'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-madina')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-madina'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-mainaksign')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-mainaksign'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-nakatra')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-nakatra'>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-shaluk')}
            className='flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-shaluk'>
            চিঠি
          </button>
        </div>

        <div
          className='relative h-64 w-full'
        >
          <Image
            src={selectDesign.image}
            alt='design_1'
            height={250}
            width={1000}
            className='absolute w-full h-[250px]'
          />
          {
            selectDesign.id == 1 ?
              <TextAreaOne font={selectFont} content={content} setContent={setContent} /> :
              selectDesign.id == 2 ?
                <TextAreaTwo font={selectFont} content={content} setContent={setContent} /> :
                selectDesign.id == 3 ?
                  <TextAreaThree font={selectFont} content={content} setContent={setContent} /> :
                  null

          }
        </div>
        <div
          className='flex justify-between items-center'
        >
          <div
            className='flex items-center space-x-3'
          >
            {
              designs.map((design, i) => (
                <Image
                  key={design.image}
                  alt={`design_${i + 1}`}
                  src={design.image}
                  height={50}
                  width={50}
                  onClick={() => setSelectDesign(design)}

                />
              ))
            }
          </div>
          <button
          onClick={senMail}
            className='flex items-center space-x-1 p-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-lg shadow-lg shadow-purple-500'
          >
            <IoIosHeart />
            <span>চিঠি পাঠাও</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { username } = context.params
  try {
    console.log(`${shareApi}user/check?q=${username}`)
    const { data } = await axios.get(`${shareApi}api/user/check?q=${username}`)
    if (data.status === 'yes') {
      return {
        redirect: {
          destination: '/not-found',
          permanent: false,
        },
      };
    }
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
    return {
      props: {
        data: {},
      },
    };
  }
}