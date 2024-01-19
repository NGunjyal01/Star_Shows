import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTopRatedShows } from "../../utils/Slices/TVShowsSlice";
import { API_OPTIONS } from "../../utils/constants";

const useTopRatedShows = () => {

    const dispatch = useDispatch();
    const topRatedShows = useSelector(store => store.tvShows.topRatedShows);

    const getTopRatedShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedShows(json.results));
    };

    useEffect(()=>{
        !topRatedShows && getTopRatedShows();
    },[])

}

export default useTopRatedShows;
