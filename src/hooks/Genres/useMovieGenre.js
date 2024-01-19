import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../../utils/Slices/genreSlice";


const useMovieGenre = (genre_id) => {
    
    const dispatch = useDispatch();

    const getMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&with_genres='+ genre_id , API_OPTIONS)
        const json = await data.json();
        dispatch(addMovies(json.results));
    };

    useEffect(()=>{
        getMovies();
    },[genre_id]);
};

export default useMovieGenre;
