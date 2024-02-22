import Link from 'next/link'
import React from 'react'
import { FaCode, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FaGithub, FaLocationPin } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import { PiStudentThin } from 'react-icons/pi'
import TimelineEducation from './TimelineEducation'
import Image from 'next/image'

function Profile() {


  return (
    <div className='flex flex-col justify-center items-center mx-auto gap-y-4'>
        <img src='/img/iot.jpg' className='md:w-[180px] w-[130px] object-cover h-[130px] md:h-[180px] object-top rounded-full ' alt="Logo" />
        <div className='text-left'>
            <h1 className='text-white font-bold xl:text-2xl text-xl mb-2 '>Patriot Kusuma Sejati</h1>
            <h3 className='text-white/90 font-light inline-flex place-self-start gap-x-2'>
              <FaCode className='text-xl'/>
              <span>Backend Developer</span>
            </h3>
            <h3 className='text-white/90 font-light inline-flex place-self-start gap-x-2'>
              <MdLocationPin className='text-xl'/>
              <span>Bantul, DI Yogyakarta, Indonesia</span>
            </h3>
            <div className='text-white/90 font-light mt-2 inline-flex place-self-start gap-x-2'>
              <Link href='https://github.com/patriotkusuma' className='text-gray-400 hover:text-gray-200 duration-500 ease-in-out transition-all' target='_blank'>
                <FaGithub className='text-2xl'/>
              </Link>
              <Link href='https://www.linkedin.com/in/patriot-kusuma-sejati/' className='text-gray-400 hover:text-gray-200 duration-500 ease-in-out transition-all' target='_blank'>
                <FaLinkedin className='text-2xl'/>
              </Link>
              <Link href='mailto://patriotkusuma05@gmail.com' className='text-gray-400 hover:text-gray-200 duration-500 ease-in-out transition-all' target='_blank'>
                <FaEnvelope className='text-2xl'/>
              </Link>
            </div>
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