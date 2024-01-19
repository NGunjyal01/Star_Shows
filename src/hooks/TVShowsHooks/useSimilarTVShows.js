import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addSimilarTVShows } from "../../utils/Slices/mainTVShowSlice";


const useSimilarTVShows = (tvShow_id) => {

    const dispatch = useDispatch();

    const getSimilarTVShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/similar", API_OPTIONS);
        const json = await data.json();
        dispatch(addSimilarTVShows(json.results));
    };

    useEffect(()=>{
        getSimilarTVShows();
    },[tvShow_id]);
}

export default useSimilarTVShows;
