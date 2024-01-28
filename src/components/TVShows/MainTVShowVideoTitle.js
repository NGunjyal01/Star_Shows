import AddWatchlistIcon from "../Common Features/AddWatchlistIcon";

const MainTVShowVideoTitle = ({title,tvShow_id,poster_path}) => {
    return (
      <div className='top-[82%] px-14 sm:absolute text-white -ml-9 md:m-0 mt-2'>
        <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
        <div className='my-4 mt-2 md:mt-6 flex'>
          <button className='hidden sm:inline-block px-2 md:px-14 md:py-4 ml-3 sm:ml-0 bg-white text-black font-bold rounded-md sm:rounded-lg md:hover:bg-opacity-80'>Play</button>
          <button className='hidden md:inline-block mx-2 px-14 py-4 bg-[#393E46] font-bold rounded-lg md:hover:bg-opacity-80'>More Info</button>
          <AddWatchlistIcon id={tvShow_id} poster_path={poster_path}/>
        </div>
      </div>
    );
};
  
export default MainTVShowVideoTitle;
  