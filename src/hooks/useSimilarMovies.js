import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSimilarMovies } from '../utils/mainMovieSlice';

const useSimilarMovies = (movie_id) => {

    const dispatch = useDispatch();

    const getSimilarMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/similar", API_OPTIONS);
        const json = await data.json();
        dispatch(addSimilarMovies(json.results));
    };

    useEffect(()=>{
        getSimilarMovies();
    },[]);
}

export default useSimilarMovies;
