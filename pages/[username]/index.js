import TextAreaFour from '@/components/designtextarea/TextAreaFour';
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
  const [loading, setLoading] = useState(false)
  const senMail = async () => {
    try {
      setLoading(!loading)
      const response = await axios.post(
        `${shareApi}/api/mail/sent/${data?.user?._id}`,
        {
          content,
          design: selectDesign.id,
          font: selectFont
        }
      )
      if (response.data.success) {
        setLoading(!loading)
        return router.push(`/${data?.user?.username}/sent`)
      }
      setLoading(!loading)
    } catch (error) {
      setLoading(!loading)
      console.log(error)
    }
  }
  return (
    <div
      className='h-screen overflow-y-auto font-baishakh'
    >
      <Head>
        <title>{`@${data?.user?.username} is on Chithi Pathao`}</title>
      </Head>
      <div
        className='md:w-5/12 mx-auto p-4 space-y-5'
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
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-baishakh ${selectFont === 'font-baishakh' && 'ring-2 ring-purple-500'}`}>
            <span>চিঠি</span>
          </button>
          <button
            onClick={() => setSelectFont('font-banglaborno')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-banglaborno ${selectFont === 'font-banglaborno' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-chainateesa')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-chainateesa ${selectFont === 'font-chainateesa' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-deyalika')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-deyalika ${selectFont === 'font-deyalika' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-hostoshoily')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-hostoshoily ${selectFont === 'font-hostoshoily' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-ichamati')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-ichamati ${selectFont === 'font-ichamati' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-indibangla')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-indibangla ${selectFont === 'font-indibangla' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-jmakash')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-jmakash ${selectFont === 'font-jmakash' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-lipishree')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-lipishree ${selectFont === 'font-lipishree' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-madina')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-madina ${selectFont === 'font-madina' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-mainaksign')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-mainaksign ${selectFont === 'font-mainaksign' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-nakatra')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-nakatra ${selectFont === 'font-nakatra' && 'ring-2 ring-purple-500'}`}>
            চিঠি
          </button>
          <button
            onClick={() => setSelectFont('font-shaluk')}
            className={`flex justify-center items-center w-12 h-12 bg-white text-lg rounded-full font-shaluk ${selectFont === 'font-shaluk' && 'ring-2 ring-purple-500'}`}>
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
                  selectDesign.id == 4 ?
                    <TextAreaFour font={selectFont} content={content} setContent={setContent} /> :
                    null

          }
        </div>
        <div
          className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center justify-between'
        >
          <div
            className='flex items-center space-x-3'
          >
            {
              designs.map((design, i) => (
                <div
                  key={design.image}
                  className={`flex justify-center items-center h-[40px] p-0.5 rounded-lg overflow-hidden ${design.image === selectDesign.image && 'border-2 border-purple-500'}`}
                >
                  <Image
                    alt={`design_${i + 1}`}
                    src={design.image}
                    height={50}
                    width={50}
                    onClick={() => setSelectDesign(design)}
                  />
                </div>
              ))
            }
          </div>
          <div
            className='flex justify-end items-center'
          >
            <button
              onClick={senMail}
              className='flex items-center space-x-1 p-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-lg shadow-lg shadow-purple-500'
            >
              <IoIosHeart />
              <span>{loading ? 'চিঠি পাঠানো হচ্ছে...' : 'চিঠি পাঠাও'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { username } = context.params
  try {
    const { data } = await axios.get(`${shareApi}/api/user/check?q=${username}`)
    if (data.status === 'yes') {
      return {
        redirect: {
          destination: `/user-not-found?q=${username}`,
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