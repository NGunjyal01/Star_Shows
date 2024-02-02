import { useSelector } from "react-redux";
import useMovieDetails from "../../../hooks/MovieHooks/useMovieDetails";
import MainVideoBackground from "./MainVideoBackground";
import MainMovieDetails from "./MainMovieDetails";
import MainMovieRecommendations from "./MainMovieRecommendations";
import { useParams } from "react-router-dom";
import MainMovieVideoTitle from "./MainMovieVideoTitle";

const MoviePage = () => {
    
    const {movie_id} = useParams();
    //getting movie details and add them to store
    useMovieDetails(movie_id);
    const mainMovieDetails = useSelector(store => store.mainMovie.mainMovieDetails);
    const { title,poster_path } = mainMovieDetails;

    if(!mainMovieDetails)    return null;
    return (
        <div className="w-full h-full bg-[#141414]">
            <div className="pt-16 sm:pt-0">
                <MainVideoBackground movie_id={movie_id}/>
                <MainMovieVideoTitle title={title} movie_id={movie_id} poster_path={poster_path}/>
            </div>
            <MainMovieDetails/>
            <MainMovieRecommendations movie_id={movie_id}/>
        </div>
    );
};

export default MoviePage;
