import AddWatchlistIcon from "../../Common Features/AddWatchlistIcon";
import MoreInfoBtn from "../../Common Features/MoreInfoBtn";

const MainTVShowVideoTitle = ({title,tvShow_id,poster_path}) => {

  return (
    <div className='top-[82%] px-14 sm:absolute text-white -ml-9 md:m-0 mt-2'>
      <h1 className='text-xl md:text-3xl font-bold md:w-auto w-full'>{title}</h1>
      <div className='my-4 mt-2 md:mt-6 flex space-x-3'>
        <MoreInfoBtn id={tvShow_id}/>
        <div className="hidden sm:block"><AddWatchlistIcon id={tvShow_id} poster_path={poster_path} type={"TVShow"}/></div>
      </div>
    </div>
  );
};
  
export default MainTVShowVideoTitle;
  