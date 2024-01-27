import { useNavigate } from "react-router-dom";
import WatchlistIcon from "../Common Features/WatchlistIcon";


const VideoTitle = ({title,overview,movie_id,poster_path}) => {

  const navigate = useNavigate();
  
  const handleButtonClick = ()=>{
    navigate("/movies/"+movie_id);
  }

  return !title? null: (
    <div className='pt-[40%] md:pt-[30%] px-14 absolute text-white -ml-9 md:m-0 md:block'>
      <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
      <p className='hidden md:inline-block py-4 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:mt-6 mt-2 flex items-center'>
        <button className='px-3 py-1 md:px-14 md:py-4 bg-white text-black font-bold rounded-lg md:hover:bg-opacity-80' onClick={handleButtonClick}>Play</button>
        <button className='hidden md:inline-block mx-2 px-14 py-4 bg-[#393E46] font-bold rounded-lg md:hover:bg-opacity-80' onClick={handleButtonClick}>More Info</button>
        <WatchlistIcon id={movie_id} poster_path={poster_path}/>
      </div>
    </div>
  )
}

export default VideoTitle;
