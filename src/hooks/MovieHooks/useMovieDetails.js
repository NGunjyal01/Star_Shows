import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addMainMovieDetails, addmainMovieCast } from "../../utils/Slices/mainMovieSlice";

const useMovieDetails = (movie_id) => {

    const dispatch = useDispatch();

    const getMovieDetails = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainMovieDetails(json));
    };  

    const getMainMovieCast = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addmainMovieCast(json.cast));
    };

    useEffect(()=>{
        getMovieDetails();
        
    },[movie_id]);
    
};

export default useMovieDetails;
