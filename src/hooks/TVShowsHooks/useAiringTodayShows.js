import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringToadyShows } from "../../utils/Slices/TVShowsSlice";

const useAiringTodayShows =  ()=>{

    const dispatch = useDispatch();
    const airingTodayShows = useSelector(store => store.tvShows.airingTodayShows);
    const getAiringTodayShows = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today', API_OPTIONS);
        const json = await data.json();
        dispatch(addAiringToadyShows(json.results));
    };

    useEffect(()=>{
       !airingTodayShows && getAiringTodayShows();
    },[]);
};

export default useAiringTodayShows;