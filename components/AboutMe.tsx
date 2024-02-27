import React from 'react'

function AboutMe() {
  return (
    <div className='flex flex-col gap-y-2 group  dark:bg-gray-800 bg-gray-200 backdrop-blur-xl md:py-12 hover:shadow-white/20 place-self-start md:px-8 p-4 rounded-2xl hover:shadow-2xl duration-500 ease-in-out'>
        <h2 className='font-bold text-white/60'>Little Thing About Me 😊</h2>
        <p className='text-white/80 group-hover:text-white/95 duration-500 ease-in-out'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ratione quisquam explicabo aperiam animi sit officiis mollitia laudantium veniam. Aut rerum reprehenderit consequuntur doloremque illum quae culpa adipisci nesciunt quia!
        </p>
    </div>
  )
}

export default AboutMe