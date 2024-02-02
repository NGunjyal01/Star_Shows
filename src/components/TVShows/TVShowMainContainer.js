import { useSelector } from "react-redux";
import TVShowVideoTitle from "./TVShowVideoTitle";
import TVShowVideoBackground from "./TVShowVideoBackground";

const TVShowMainContainer = () => {
    
    const tvShows = useSelector(store => store.tvShows?.airingTodayShows);
    if(!tvShows) return null;
    const firstShow = tvShows[0];
    const {name,overview,id,poster_path} = firstShow;

    return (
        <div className='pt-20 bg-black md:pt-0'>
            <TVShowVideoTitle title={name} overview={overview} tvShow_id={id} poster_path={poster_path}/>
            <TVShowVideoBackground tvShow_id={id} />
        </div>
    );
};

export default TVShowMainContainer;
