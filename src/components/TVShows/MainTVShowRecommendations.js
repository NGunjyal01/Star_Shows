import { useSelector } from "react-redux";
import useSimilarTVShows from "../../hooks/TVShowsHooks/useSimilarTVShows";
import useTVShowRecommendations from "../../hooks/TVShowsHooks/useTVShowRecommendations";
import Mo_Tv_List from "../Common Features/Mo_Tv_List";

const MainTVShowRecommendations = ({tvShow_id}) => {

    useSimilarTVShows(tvShow_id);
    useTVShowRecommendations(tvShow_id);

    const similarTVShows = useSelector(store => store.mainTVShow.similarTVShows);
    const tvShowRecommendations = useSelector(store => store.mainTVShow.tvShowRecommendations);

    if(!similarTVShows || !tvShowRecommendations)   return null;

    return (
        <div className="mt-4">
            {!similarTVShows.length ? null : <Mo_Tv_List heading={"Similar Shows"} MoTv={similarTVShows} type={"TVShow"} />}
            {!tvShowRecommendations.length ? null : <Mo_Tv_List heading={"Recommendations"} MoTv={tvShowRecommendations} type={"TVShow"} />}
        </div>
    );
};

export default MainTVShowRecommendations;
