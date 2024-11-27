import React from 'react'

export default function TextAreaOne({ font,content,setContent }) {
    return (
        <textarea
        value={content}
            onChange={(e)=>setContent(e.target.value)}
            className={`absolute top-7 bg-transparent z-10 resize-none  w-full focus:outline-none h-44 pl-10 pr-8 py-4 ${font}`}
        />
    )
}
