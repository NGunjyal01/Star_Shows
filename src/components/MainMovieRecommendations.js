import { useSelector } from "react-redux";
import useMovieRecommendations from "../hooks/useMovieRecommendations"
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";


const MainMovieRecommendations = ({ movie_id }) => {
    
    useMovieRecommendations(movie_id);
    useSimilarMovies(movie_id);
    const movies = useSelector(store => store.mainMovie);


    return (
        <div>
            <MovieList title={"Recommendations"} movies={movies.movieRecommendations}/>
            <MovieList title={"Similar"} movies={movies.similarMovies}/>
        </div>
    )
}

export default MainMovieRecommendations;
