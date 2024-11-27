import React from 'react'

export default function TextAreaThree({ font,content,setContent }) {
    return (
        <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            className={`absolute top-6 bg-transparent z-10 resize-none  w-full focus:outline-none h-40 px-4 ${font}`}
        />
    )
}