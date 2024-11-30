import React from 'react'

export default function TextAreaFour({ font,content,setContent }) {
    return (
        <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className={`absolute top-2 bg-transparent text-black z-10 resize-none  w-full focus:outline-none h-48 px-4 pt-2 ${font}`}
        />
    )
}