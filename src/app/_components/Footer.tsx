import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full text-center px-8 sm:px-4 py-2 sm:py-6 text-gray-600 break-words'>
        <p className='font-serif'>
            &copy; 2023 Salman alias Ryo. All rights reserved.
        </p>
        <p className='font-sans'><span className='font-semibold'>About this website: </span> built using Next.js , React , TailwindCSS , Framer Motion , TypeScript , React Email & Resend , Vercel hosting</p>
    </footer>
  )
}
