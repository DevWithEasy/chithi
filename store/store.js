import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
const userStore = (set)=>({
    user : {},
    tab : 0,
    mails : [],
    loged : (userData) =>{
        set((state)=>({
            user : userData
        }))
    },
    setTab : (int) =>{
        set((state)=>({
            tab : int
        }))
    },
    setMails : (mails) =>{
        set((state)=>({
            mails : mails
        }))
    },
    logout : () =>{
        set((state)=>({
            user : {}
        }))
    }
})
const appStore = create(
    devtools(
        persist(userStore,{
            name : "chithi",
        })
    )
)
export default appStore;