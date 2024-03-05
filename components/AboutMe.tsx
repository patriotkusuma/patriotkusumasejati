import React from 'react'

function AboutMe() {
  return (
    <div className='flex flex-col gap-y-2 group  dark:bg-gray-800 bg-white/80 backdrop-blur-xl md:py-12 dark:hover:shadow-white/20 place-self-start md:px-8 p-4 rounded-2xl hover:shadow-2xl duration-500 ease-in-out'>
        <h2 className='font-bold dark:text-white/60 text-gray-700 '>Little Thing About Me 😊</h2>
        <p className='text-gray-500 dark:text-white/80 dark:group-hover:text-white/95 duration-500 ease-in-out'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ratione quisquam explicabo aperiam animi sit officiis mollitia laudantium veniam. Aut rerum reprehenderit consequuntur doloremque illum quae culpa adipisci nesciunt quia!
        </p>
    </div>
  )
}

export default AboutMe