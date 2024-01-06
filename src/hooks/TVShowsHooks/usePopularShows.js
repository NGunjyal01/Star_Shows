import { useEffect } from "react";
import { addPopularShows } from "../../utils/Slices/TVShowsSlice";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";

const usePopularShows = () => {

    const dispatch = useDispatch();
    const popularShows = useSelector(store => store.tvShows.popularShows);

    const getPopularShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularShows(json.results.reverse()));
    };

    useEffect(()=>{
        !popularShows && getPopularShows();
    },[])

}

export default usePopularShows;
