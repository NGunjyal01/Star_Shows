import { useSelector } from "react-redux";
import useMovieRecommendations from "../../../hooks/MovieHooks/useMovieRecommendations";
import useSimilarMovies from "../../../hooks/MovieHooks/useSimilarMovies";
import Mo_Tv_List from "../../Common Features/Mo_Tv_List";


const MainMovieRecommendations = ({ movie_id }) => {
    
    useMovieRecommendations(movie_id);
    useSimilarMovies(movie_id);
    const movieRecommendations = useSelector(store => store.mainMovie.movieRecommendations);
    const similarMovies = useSelector(store => store.mainMovie.similarMovies);

    if(!similarMovies || !movieRecommendations) return null;

    return (
        <div className="mt-4">
            {!movieRecommendations.length ? null : <Mo_Tv_List heading={"Recommendations"} MoTv={movieRecommendations} type={"Movie"}/>}
            {!similarMovies.length ? null : <Mo_Tv_List heading={"Similar Movies"} MoTv={similarMovies} type={"Movie"}/>}
        </div>
    );
};

export default MainMovieRecommendations;
