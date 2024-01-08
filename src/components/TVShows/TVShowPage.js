import { useSelector } from "react-redux";
import useTVShowDetails from "../../hooks/TVShowsHooks/useTVShowDetails";
import MainTVShowDetails from "./MainTVShowDetails";
import MainTVShowRecommendations from "./MainTVShowRecommendations";
import { useParams } from "react-router-dom";
import MainTVShowVideoBackground from "./MainTVShowVideoBackground";
import MainTVShowVideoTitle from "./MainTVShowVideoTitle";

const TVShowPage = () => {
    
    const {tvShow_id} = useParams();
    
    // getting TVShow details and add them to store
    useTVShowDetails(tvShow_id);
    const mainTVShowDetails = useSelector(store => store.mainTVShow.mainTVShowDetails);

    if(!mainTVShowDetails)    return null;
    return (
        <div className="w-full h-full bg-[#141414]">
            <div className="pt-16 sm:pt-0"> 
                <MainTVShowVideoBackground tvShow_id={tvShow_id}/>
                <MainTVShowVideoTitle title={mainTVShowDetails.name}/>
            </div>
            <MainTVShowDetails tvShow_id={tvShow_id}/>
            <MainTVShowRecommendations tvShow_id={tvShow_id}/>
        </div>
    );
};

export default TVShowPage;
