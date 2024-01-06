import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addOnTheAirShows } from '../../utils/Slices/TVShowsSlice';

const useOnTheAirShows = () => {

    const dispatch = useDispatch();
    const onTheAirShows = useSelector(store => store.tvShows.onTheAirShows);

    const getOnTheAirShows = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air",API_OPTIONS);
        const json = await data.json();
        dispatch(addOnTheAirShows(json.results));
    };

    useEffect(()=>{
        !onTheAirShows && getOnTheAirShows();
    },[])
};

export default useOnTheAirShows
