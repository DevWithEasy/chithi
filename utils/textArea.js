const getTextarea=(mail)=>{
    if(mail.design === 1){
        return `absolute top-7 bg-transparent z-10 resize-none  w-full focus:outline-none h-44 pl-10 pr-8 py-4 ${mail.font}`
    }else if(mail.design === 2){
        return `absolute top-7 bg-transparent z-10 resize-none  w-full focus:outline-none h-44 p-4 ${mail.font}`
    }else if(mail.design === 3){
        return `absolute top-6 bg-transparent z-10 resize-none  w-full focus:outline-none h-40 px-4 py-1 ${mail.font}`
    }
}

export default getTextarea