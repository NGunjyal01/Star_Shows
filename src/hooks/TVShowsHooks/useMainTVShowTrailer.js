import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMainTVShowTrailer } from "../../utils/Slices/mainTVShowSlice";
import { API_OPTIONS } from "../../utils/constants";

const useMainTVShowTrailer = (tvShow_id) => {

    const dispatch = useDispatch();

    const getMainTVShowTrailer = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/videos",API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMainTVShowTrailer(trailer));
    };

    useEffect(()=>{
        getMainTVShowTrailer();
    },[])
}

export default useMainTVShowTrailer;
