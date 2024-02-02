import { useDispatch, useSelector } from "react-redux";
import { addAiringToadyShows, addOnTheAirShows, addPopularShows, addTopRatedShows } from "../../utils/Slices/TVShowsSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useGetAllTVShows = () => {

    const dispatch = useDispatch();
    const airingTodayShows = useSelector(store => store.tvShows.airingTodayShows);
    const onTheAirShows = useSelector(store => store.tvShows.onTheAirShows);
    const popularShows = useSelector(store => store.tvShows.popularShows);
    const topRatedShows = useSelector(store => store.tvShows.topRatedShows);

    const getAiringTodayShows = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today', API_OPTIONS);
        const json = await data.json();
        dispatch(addAiringToadyShows(json.results.reverse()));
    };

    const getOnTheAirShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air",API_OPTIONS);
        const json = await data.json();
        dispatch(addOnTheAirShows(json.results));
    };

    const getPopularShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularShows(json.results.reverse()));
    };

    const getTopRatedShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedShows(json.results));
    };

    useEffect(()=>{
        !airingTodayShows && getAiringTodayShows();
        !onTheAirShows && getOnTheAirShows();
        !popularShows && getPopularShows();
        !topRatedShows && getTopRatedShows();
    },[]);

}

export default useGetAllTVShows;
