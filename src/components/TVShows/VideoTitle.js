import AddWatchlistIcon from "../Common Features/AddWatchlistIcon"

const VideoTitle = ({title,overview,tvShow_id,poster_path}) => {

  return (
    <>
      <div className='pt-[40%] md:pt-[30%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <p className='hidden md:inline-block py-4 text-lg w-2/5'>{overview}</p>
      </div>
      <div className='absolute pt-[44%] pl-14 flex space-x-3'>
        <button className='px-3 py-1 md:px-14 md:py-4 bg-white text-black font-bold rounded-lg md:hover:bg-opacity-80'>Play</button>
        <button className='hidden md:inline-block mx-2 px-14 py-4 bg-[#393E46] font-bold rounded-lg md:hover:bg-opacity-80'>More Info</button>
        <AddWatchlistIcon id={tvShow_id} poster_path={poster_path}/>
      </div>
    </>
  )
}

export default VideoTitle
