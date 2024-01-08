import { useSelector } from "react-redux";
import useMovieDetails from "../../hooks/MovieHooks/useMovieDetails";
import MainVideoBackground from "./MainVideoBackground";
import MainMovieDetails from "./MainMovieDetails";
import MainMovieRecommendations from "./MainMovieRecommendations";
import { useParams } from "react-router-dom";
import VideoTitle from "../HomePage/VideoTitle";

const MoviePage = () => {
    
    const {movie_id} = useParams();
    //getting movie details and add them to store
    useMovieDetails(movie_id);
    const mainMovieDetails = useSelector(store => store.mainMovie.mainMovieDetails);

    if(!mainMovieDetails)    return null;
    return (
        <div className="w-full h-full bg-[#181818]">
            <VideoTitle title={mainMovieDetails.title} overview={mainMovieDetails.overview}/>
            <MainVideoBackground movie_id={movie_id}/>
            <MainMovieDetails movie_id={movie_id}/>
            <MainMovieRecommendations movie_id={movie_id}/>
        </div>
    );
};

export default MoviePage;
