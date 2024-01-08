import { useSelector } from "react-redux";
import useMovieRecommendations from "../../hooks/MovieHooks/useMovieRecommendations"
import useSimilarMovies from "../../hooks/MovieHooks/useSimilarMovies";
import MovieList from "../Common Features/MovieList";


const MainMovieRecommendations = ({ movie_id }) => {
    
    useMovieRecommendations(movie_id);
    useSimilarMovies(movie_id);
    const movies = useSelector(store => store.mainMovie);

    return (
        <div>
            {movies.movieRecommendations && <MovieList title={"Recommendations"} movies={movies.movieRecommendations}/>}
            {movies.similarMovies && <MovieList title={"Similar"} movies={movies.similarMovies}/>}
        </div>
    )
}

export default MainMovieRecommendations;
