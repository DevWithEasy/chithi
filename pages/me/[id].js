import MailBox from '@/components/MailBox'
import Share from '@/components/Share'
import Tab from '@/components/Tab'
import appStore from '@/store/store'
import shareApi from '@/utils/shareApi'
import socket from '@/utils/socket'
import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'


export default function Profile({ info }) {
  const {tab,mails,setMails} = appStore()

  const fetchMails = async () => {
    try {
      const { data } = await axios.get(`${shareApi}/api/mail/me/${info.user._id}`)
      setMails(data)
    } catch (error) {
      console.error('Error fetching mails:', error.response ? error.response.data : error.message);
    }
  }

  function notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // const notification = new Notification("Hi there!")
        }
      });
    }
  }

  useEffect(()=>{
    notifyMe()
    setMails(info.mails)
    socket.emit('chithibox',info.user._id)
  },[info.mails,setMails,info.user._id])
  
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMails();
    }, 1000*60)

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
        <Tab/>
        <div
          className=''
        >
          {
            tab === 0 ?
              <Share /> :
              <MailBox mails={mails} />
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