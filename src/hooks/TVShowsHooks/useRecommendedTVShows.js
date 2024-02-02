import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSimilarTVShows, addTVShowRecommendations } from "../../utils/Slices/mainTVShowSlice";

const useRecommendedTVShows = (tvShow_id) => {

    const dispatch = useDispatch();

    const getTVShowRecommendations = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/recommendations", API_OPTIONS);
        const json = await data.json();
        dispatch(addTVShowRecommendations(json.results));
    };

    const getSimilarTVShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/similar", API_OPTIONS);
        const json = await data.json();
        dispatch(addSimilarTVShows(json.results));
    };

    useEffect(()=>{
        getTVShowRecommendations();
        getSimilarTVShows();
    },[tvShow_id]);
}

export default useRecommendedTVShows;
