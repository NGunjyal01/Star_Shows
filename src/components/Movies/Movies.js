import { useSelector } from "react-redux";
import MovieList from "../Common Features/MovieList";
import MainContainer from "../HomePage/MainContainer";

const Movies = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <>
      <div className="bg-[#141414] h-full">
        <MainContainer />
        <div className="pl-2 sm:pl-6 pt-10 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      </div>
    </>
  );
};

export default Movies;
