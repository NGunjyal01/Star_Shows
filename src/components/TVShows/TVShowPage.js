import { useSelector } from "react-redux";
import useTVShowDetails from "../../hooks/TVShowsHooks/useTVShowDetails";
import MainTVShowDetails from "./MainTVShowDetails";
// import MainTVShowRecommendations from "./MainTVShowRecommendations";
import { useParams } from "react-router-dom";
import MainTVShowVideoBackground from "./MainTVShowVideoBackground";
import VideoTitle from "./VideoTitle";
import MainTVShowVideoTitle from "./MainTVShowVideoTitle";

const TVShowPage = () => {
    
    const {tvShow_id} = useParams();
    
    // getting TVShow details and add them to store
    useTVShowDetails(tvShow_id);
    const mainTVShowDetails = useSelector(store => store.mainTVShow.mainTVShowDetails);

    if(!mainTVShowDetails)    return null;
    return (
        <div className="w-full h-full bg-[#181818]">
            <MainTVShowVideoTitle title={mainTVShowDetails.name}/>
            <MainTVShowVideoBackground tvShow_id={tvShow_id}/>
            <MainTVShowDetails tvShow_id={tvShow_id}/>
            {/* <MainTVShowRecommendations TVShow_id={TVShow_id}/> */}
        </div>
    );
};

export default TVShowPage;
