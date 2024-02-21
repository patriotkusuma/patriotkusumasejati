import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import { PiStudentThin } from 'react-icons/pi'
import TimelineEducation from './TimelineEducation'

function Profile() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto gap-y-4'>
        <img src='https://avatars.githubusercontent.com/u/39677773?v=4' className='md:w-[180px] w-[120px] rounded-full ' alt="Logo" />
        <div className='text-left'>
            <h1 className='text-white font-bold text-3xl mb-2 '>Patriot Kusuma Sejati</h1>
            <h3 className='text-white/90 font-light inline-flex place-self-start gap-x-2'>
              <FaCode className='text-xl'/>
              <span>Backend Developer</span>
            </h3>
            <h3 className='text-white/90 font-light inline-flex place-self-start gap-x-2'>
              <MdLocationPin className='text-xl'/>
              <span>Bantul, DI Yogyakarta, Indonesia</span>
            </h3>
        </div>
        <hr className='border-white/50 border-1 w-full' />
        <Link href='https://wa.me/6281223008363' target='_blank' className='py-2 w-full  text-center ease-in-out duration-500 bg-yellow-700 rounded-xl block hover:bg-yellow-800 cursor-pointer'>
          Contact Me
        </Link>
        <TimelineEducation/>
    </div>
  )
}

export default Profile