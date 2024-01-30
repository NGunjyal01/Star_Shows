import AddWatchlistIcon from "../Common Features/AddWatchlistIcon";
import MoreInfoBtn from "../Common Features/MoreInfoBtn";

const MainMovieVideoTitle = ({title,movie_id,poster_path}) => {

  return (
    <div className='top-[82%] px-14 sm:absolute text-white -ml-9 md:m-0 mt-2'>
      <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
      <div className='my-4 mt-2 md:mt-6 flex space-x-3'>
        <MoreInfoBtn id={movie_id}/>
        <div className="hidden sm:block"><AddWatchlistIcon id={movie_id} poster_path={poster_path}/></div>  
      </div>
    </div>
  );
};
  
export default MainMovieVideoTitle;
  