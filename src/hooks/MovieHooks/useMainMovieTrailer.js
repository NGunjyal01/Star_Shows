import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addMainMovieTrailer } from "../../utils/Slices/mainMovieSlice";

const useMainMovieTrailer = (movie_id) => {

    const dispatch = useDispatch();

    const getmainMovieTrailer = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMainMovieTrailer(trailer));
    };

    useEffect(()=>{
        getmainMovieTrailer();
    },[movie_id]);
}

export default useMainMovieTrailer;
