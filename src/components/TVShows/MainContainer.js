import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    
    const tvShows = useSelector(store => store.tvShows?.airingTodayShows);
    if(!tvShows) return null;
    const firstShow = tvShows[0];
    const {name,overview,id,poster_path} = firstShow;

    return (
        <div className='pt-20 bg-black md:pt-0'>
            <VideoTitle title={name} overview={overview} tvShow_id={id} poster_path={poster_path}/>
            <VideoBackground tvShow_id={id} />
        </div>
    );
};

export default MainContainer;
