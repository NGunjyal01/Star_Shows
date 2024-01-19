import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpComingMovies } from "../../utils/Slices/moviesSlice";

const useUpComingMovies = ()=>{
    //fetch data from tmdb api and update store
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upComingMovies);
    const getUpComingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(()=>{
        !upComingMovies && getUpComingMovies();
    },[])
};

export default useUpComingMovies;