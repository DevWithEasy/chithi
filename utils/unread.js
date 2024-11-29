const unreadCount=(mails)=>{
    return mails.filter(mail=>mail.seen===false).length
}

export default unreadCount