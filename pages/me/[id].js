import MailBox from '@/components/MailBox'
import Share from '@/components/Share'
import Tab from '@/components/Tab'
import appStore from '@/store/store'
import shareApi from '@/utils/shareApi'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, Suspense } from 'react'


export default function Profile({ info }) {
  const { tab, mails, setMails } = appStore()

  const fetchMails = async () => {
    try {
      const { data } = await axios.get(`/api/mail/me/${info.user._id}`)
      setMails(data)
      if(data.length > mails.length){
        new Notification('নতুন চিঠি')
      }
    } catch (error) {
      console.error('Error fetching mails:', error.response ? error.response.data : error.message);
    }
  }

  function notifyMe() {
    if (!("Notification" in window)) {
      alert("আপনার ব্রাউজার নোটিফিকেশন সাপোর্ট করে না।");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // const notification = new Notification("Hi there!")
        }
      });
    }
  }

  useEffect(() => {
    notifyMe()
    setMails(info.mails)
  }, [info.mails, setMails])


  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMails();
    }, 1000 * 10)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='h-screen overflow-y-auto font-baishakh'
    >
      <Head>
        <title>{`@${info.user.username} - চিঠিবক্স`}</title>
      </Head>
      <div
        className='md:w-5/12 mx-auto'
      >
        <Tab />
        <div
          className=''
        >
          {
            tab === 0 ?
              <Share /> :
              <MailBox />
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  try {
    const { data } = await axios.get(`${shareApi}/api/user/me/${id}`)
    return {
      props: {
        info: data,
      },
    };
  } catch (error) {
    console.error('Error fetching mails:', error.response ? error.response.data : error.message);
    return {
      props: {
        info: {},
      },
    };
  }
}