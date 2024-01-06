import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addMainMovieDetails } from "../../utils/Slices/mainMovieSlice";

const useMovieDetails = (movie_id) => {

    const dispatch = useDispatch();
    const getMovieDetails = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainMovieDetails(json));
    };  

    useEffect(()=>{
        getMovieDetails();
    },[]);
    
};

export default useMovieDetails
