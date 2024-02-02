import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies } from "../../utils/Slices/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useGetAllMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies.popularMovies);
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const upComingMovies = useSelector(store => store.movies.upComingMovies);
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    
    const getPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    
    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }    

    const getUpComingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(()=>{
        if(!nowPlayingMovies) getNowPlayingMovies();
        if(!popularMovies) getPopularMovies();
        !topRatedMovies && getTopRatedMovies();
        !upComingMovies && getUpComingMovies();
    },[])
}

export default useGetAllMovies;
