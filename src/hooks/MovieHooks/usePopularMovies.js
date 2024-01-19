import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/Slices/moviesSlice";

const usePopularMovies = ()=>{
    //fetch data from tmdb api and update store
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
       if(!popularMovies) getPopularMovies();
    },[])
};

export default usePopularMovies;