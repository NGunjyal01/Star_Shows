import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addMainTVShowCast } from "../../utils/Slices/mainTVShowSlice";


const useMainTVShowCast = (tvShow_id) => {

    const dispatch = useDispatch();

    const getMainTVShowCast = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/credits",API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowCast(json.cast));
    };

    useEffect(()=>{
        getMainTVShowCast();
    },[tvShow_id]);
}

export default useMainTVShowCast;
