import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/Slices/TVShowsSlice";


const useTVShowTrailer = (tvShow_id) => {

    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.tvShows.trailerVideo);

    const getTVShowTrailer = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/videos",API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        !trailerVideo && getTVShowTrailer();
    },[])
}

export default useTVShowTrailer
