import AddWatchlistIcon from "../Common Features/AddWatchlistIcon";
import PlayBtn from "../Common Features/PlayBtn";
import MoreInfoBtn from "../Common Features/MoreInfoBtn";


const VideoTitle = ({title,overview,movie_id,poster_path}) => {

  return !title? null: (
    <>
      <div className='pt-[40%] md:pt-[27%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <p className='hidden md:inline-block py-4 text-lg w-2/5'>{overview}</p>
      </div>
      <div className='absolute pt-[44%] pl-14 flex space-x-3'>
        <PlayBtn id={movie_id}/>
        <MoreInfoBtn id={movie_id}/>
        <AddWatchlistIcon id={movie_id} poster_path={poster_path}/>
      </div>
    </>
  )
}

export default VideoTitle;
