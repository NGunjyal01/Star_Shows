import { useParams } from "react-router-dom";
import useMovieGenre from "../../hooks/Genres/useMovieGenre";
import useTVShowGenre from "../../hooks/Genres/useTVShowGenre";
import { useSelector } from "react-redux";
import VideoTitle from "../HomePage/VideoTitle";
import VideoBackground from "../HomePage/VideoBackground";
import MovieList from "../Common Features/MovieList";
import TVShowList from "../Common Features/TVShowList";
import TVShowVideoTitle from "../TVShows/VideoTitle";
import TVShowVideoBackground from "../TVShows/VideoBackground";

const GenrePage = () => {
    const { genre_id } = useParams();

    useMovieGenre(genre_id);
    useTVShowGenre(genre_id);
    const movies = useSelector((store) => store.genre.movies);
    const tvShows = useSelector((store) => store.genre.tvShows);

    if(!movies || !tvShows) return null;

  return (
    <div className="pt-[20%] sm:pt-0">
      {movies?.length ? (
        <div>
            <VideoTitle title={movies[0]?.title} overview={movies[0]?.overview} movie_id={movies[0]?.id}/>
            <VideoBackground movie_id={movies[0]?.id}/>
        </div>
      ) : (
        <div>
            <TVShowVideoTitle title={tvShows[0]?.name} overview={tvShows[0]?.overview} tvShow_id={tvShows[0]?.id}/>
            <TVShowVideoBackground tvShow_id={tvShows[0]?.id}/>
        </div>
      )}
      <div className="mt-8 sm:ml-5">
        {movies?.length && <MovieList title={"Movies"} movies={movies}/>}
        {tvShows?.length && <TVShowList title={"TVShows"} tvShows={tvShows}/>}
      </div>
    </div>
  );
};

export default GenrePage;
