import React from 'react'

export default function TextAreaTwo({ font,content,setContent }) {
    return (
        <textarea
        value={content}
            onChange={(e)=>setContent(e.target.value)}
            className={`absolute top-7 bg-transparent z-10 resize-none  w-full focus:outline-none h-44 p-4 ${font}`}
        />
    )
}