import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addTVShowRecommendations } from "../../utils/Slices/mainTVShowSlice";


const useTVShowRecommendations = (tvShow_id) => {

    const dispatch = useDispatch();

    const getTVShowRecommendations = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/recommendations", API_OPTIONS);
        const json = await data.json();
        dispatch(addTVShowRecommendations(json.results));
    };

    useEffect(()=>{
        getTVShowRecommendations();
    },[tvShow_id]);
}

export default useTVShowRecommendations;
