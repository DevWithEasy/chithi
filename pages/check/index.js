import banglaFonts from '@/utils/fonts'
import React, { useState } from 'react'

export default function Check() {
  const [bnFontName, setBnFontName] = useState('font-deyalika')
  return (
    <div>
      <div
        className='p-4 space-y-4'
      >
        <select
          value={bnFontName}
          onChange={(e) => setBnFontName(e.target.value)}
        >
          {banglaFonts.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <div>
          <p className={bnFontName}>মানুষ যদি মৃত ব্যাক্তির আর্তনাদ দেখতে এবং শুনতে পেত, তাহলে মানুষ মৃত ব্যক্তির জন্য কান্না না করে নিজের জন্য কান্না করত ।
            —হযরত মুহাম্মদ (সাঃ)</p>
        </div>
      </div>
    </div>
  )
}
