import AddWatchlistIcon from "../Common Features/AddWatchlistIcon"
import MoreInfoBtn from "../Common Features/MoreInfoBtn"
import PlayBtn from "../Common Features/PlayBtn"

const VideoTitle = ({title,overview,tvShow_id,poster_path}) => {

  return (
    <>
      <div className='pt-[40%] md:pt-[30%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <p className='hidden md:inline-block py-4 text-lg w-2/5'>{overview}</p>
      </div>
      <div className='absolute pt-[47%] sm:pt-[44%] pl-5 sm:pl-14 flex sm:space-x-3 space-x-2'>
        <PlayBtn id={tvShow_id}/>
        <MoreInfoBtn id={tvShow_id}/>
        <AddWatchlistIcon id={tvShow_id} poster_path={poster_path}/>
      </div>
    </>
  )
}

export default VideoTitle
