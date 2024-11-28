import designs from '@/utils/design';
import shareApi from '@/utils/shareApi';
import getTextarea from '@/utils/textArea';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Mail({mail}) {
    
    return (
        <div
            className='h-screen p-4 overflow-y-auto font-baishakh'
        >
            <div
                className='md:w-5/12 mx-auto'
            >
                <div
                className='relative h-64 w-full'
            >
                <Image
                    src={designs[mail.design-1].image}
                    alt='design_1'
                    height={250}
                    width={1000}
                    className='absolute w-full h-[250px]'
                />
                <textarea
                  value={mail.content}
                  readOnly
                  className={getTextarea(mail)}
                />
            </div>
            </div>
            
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    console.log(id)
    try {
      const { data } = await axios.get(`${shareApi}api/mail/update/${id}`)
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