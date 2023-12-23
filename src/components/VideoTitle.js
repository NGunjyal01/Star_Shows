import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-14 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-4 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='px-14 py-4 bg-white text-black font-bold rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='mx-2 px-14 py-4 bg-gray-500 font-bold opacity-60 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
