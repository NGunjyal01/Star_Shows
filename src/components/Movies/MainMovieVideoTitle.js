import AddWatchlistIcon from "../Common Features/AddWatchlistIcon";

const MainMovieVideoTitle = ({title,movie_id,poster_path}) => {
    return (
      <div className='top-[82%] px-14 sm:absolute text-white -ml-9 md:m-0 mt-2'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <div className='my-4 mt-2 md:mt-6 flex space-x-3'>
          <button className='hidden md:inline-block px-14 py-4 bg-[#393E46] font-bold rounded-lg md:hover:bg-opacity-80'>More Info</button>
          <AddWatchlistIcon id={movie_id} poster_path={poster_path}/>  
        </div>
      </div>
    );
};
  
export default MainMovieVideoTitle;
  