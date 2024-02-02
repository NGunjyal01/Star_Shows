import { useEffect } from 'react'
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieRecommendations, addSimilarMovies } from '../../utils/Slices/mainMovieSlice';

const useRecommendedMovies = (movie_id) => {

    const dispatch = useDispatch();

    const getMovieRecommendations = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/recommendations', API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieRecommendations(json.results));
    };

    const getSimilarMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/similar", API_OPTIONS);
        const json = await data.json();
        dispatch(addSimilarMovies(json.results));
    };

    useEffect(()=>{
        getMovieRecommendations();
        getSimilarMovies();
    },[movie_id]);
}

export default useRecommendedMovies;
