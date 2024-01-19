import { useSelector } from "react-redux";
import useMovieRecommendations from "../../hooks/MovieHooks/useMovieRecommendations";
import useSimilarMovies from "../../hooks/MovieHooks/useSimilarMovies";
import MovieList from "../Common Features/MovieList";


const MainMovieRecommendations = ({ movie_id }) => {
    
    useMovieRecommendations(movie_id);
    useSimilarMovies(movie_id);
    const movieRecommendations = useSelector(store => store.mainMovie.movieRecommendations);
    const similarMovies = useSelector(store => store.mainMovie.similarMovies);

    if(!similarMovies || !movieRecommendations) return null;

    return (
        <div className="-ml-3 sm:-ml-0 mt-4">
            {!movieRecommendations.length ? null : <MovieList title={"Recommendations"} movies={movieRecommendations}/>}
            {!similarMovies.length ? null : <MovieList title={"Similar Movies"} movies={similarMovies}/>}
        </div>
    );
};

export default MainMovieRecommendations;
