import { useSelector } from "react-redux";
import useSimilarTVShows from "../../hooks/TVShowsHooks/useSimilarTVShows";
import useTVShowRecommendations from "../../hooks/TVShowsHooks/useTVShowRecommendations";
import TVShowList from "../Common Features/TVShowList";

const MainTVShowRecommendations = ({tvShow_id}) => {

    useSimilarTVShows(tvShow_id);
    useTVShowRecommendations(tvShow_id);

    const similarTVShows = useSelector(store => store.mainTVShow.similarTVShows);
    const tvShowRecommendations = useSelector(store => store.mainTVShow.tvShowRecommendations);

    if(!similarTVShows || !tvShowRecommendations)   return null;

    return (
        <div className="mt-4">
            {!similarTVShows.length ? null : <TVShowList title={"Similar Shows"} tvShows={similarTVShows}/>}
            {!tvShowRecommendations.length ? null : <TVShowList title={"Recommendations"} tvShows={tvShowRecommendations}/>}
        </div>
    );
};

export default MainTVShowRecommendations;
