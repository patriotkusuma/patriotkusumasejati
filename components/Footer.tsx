import React from 'react'

function Footer() {
  return (
    <div className='bottom-0  absolute w-full flex flex-col gap-y-2 font-light  dark:bg-gray-800 bg-gray-200 backdrop-blur-xl md:py-2 hover:shadow-white/20 md:px-8 p-4 rounded-2xl duration-500 ease-in-out'>
        <h2 className='font-bold text-white/60'>Thanks for comming 😊</h2>
        <p className='text-white/80 font text-sm'>
            © patriotkusuma {new Date().getFullYear()}
            - Made With 💖 : Inspired By <a href='https://dedepermana.vercel.app' className='hover:text-blue-600' >Dede Permana</a>
        </p>
    </div>
  )
}

export default Footer