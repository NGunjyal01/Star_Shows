import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
      <h1 className='text-xl md:text-3xl font-bold w-1/2 md:w-auto'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='px-4 py-2 md:px-14 md:py-4 bg-white text-black font-bold rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='hidden md:inline-block mx-2 px-14 py-4 bg-gray-500 font-bold opacity-60 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
