import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addmainMovieCast } from "../../utils/Slices/mainMovieSlice";


const useMainMovieCast = () => {
    
    const movie_id = useSelector(store => store.mainMovie.mainMovieId);
    const dispatch = useDispatch();

    const getMainMovieCast = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addmainMovieCast(json.cast));
    };

    useEffect(()=>{
        getMainMovieCast();
    },[]);
}

export default useMainMovieCast;
