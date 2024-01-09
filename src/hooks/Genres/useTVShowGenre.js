import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addTVShows } from "../../utils/Slices/genreSlice";


const useTVShowGenre = (genre_id) => {
    
    const dispatch = useDispatch();

    const getTVShows = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&sort_by=popularity.desc&with_genres='+ genre_id , API_OPTIONS)
        const json = await data.json();
        dispatch(addTVShows(json.results));
    };

    useEffect(()=>{
        getTVShows();
    },[genre_id]);
};

export default useTVShowGenre;