import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full text-center border-t border-gray-500 px-8 sm:px-4 py-2 sm:py-6 text-gray-600 dark:text-gray-300 break-words'>
        <p className='font-serif'>
            &copy; 2023 <a className='cursor-pointer hover:text-black dark:hover:text-yellow-200' href="https://github.com/Salman-at-github" target='_blank'>Salman alias Ryo</a>. All rights reserved.
        </p>
        <p className='font-sans'><span className='font-semibold'>About this website: </span> built using Next.js , React , TailwindCSS , Framer Motion , TypeScript , React Email & Resend , Vercel hosting</p>
    </footer>
  )
}
