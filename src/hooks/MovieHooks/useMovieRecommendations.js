import { useEffect } from 'react'
import { API_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieRecommendations } from '../../utils/Slices/mainMovieSlice';

const useMovieRecommendations = (movie_id) => {

    const dispatch = useDispatch();

    const getMovieRecommendations = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/recommendations', API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieRecommendations(json.results));
    };

    useEffect(()=>{
        getMovieRecommendations();
    },[]);
}

export default useMovieRecommendations;
