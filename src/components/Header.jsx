import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {BiSearchAlt2} from 'react-icons/bi'

export const Header = () => {
    const router = useRouter()
  return (
    <div className='bg-black py-3'>
        <header className='w-[90%] mx-auto text-white flex justify-between items-center'>
            <div>Logo</div>
            <nav className='flex gap-6'>
                <Link href="/" className={(router.pathname == "/" ? "border-b-2 border-red-600 pb-2" : "")}>Home</Link>
                <Link href="/technology" className={(router.pathname == "/technology" ? "border-b-2 border-red-600 " : "")}>Technology</Link>
                <Link href="/social" className={(router.pathname == "/social" ? "border-b-2 border-red-600 " : "")}>Social</Link>
                <Link href="/culture" className={(router.pathname == "/culture" ? "border-b-2 border-red-600 " : "")}>Culture</Link>
            </nav>
            <div className='flex items-center bg-[#202224] p-2 gap-2 rounded-sm'>
               <span><BiSearchAlt2/></span>
               <input type="text" className='outline-none bg-transparent' placeholder='Search...' />
            </div>
        </header>
    </div>
  )
}
