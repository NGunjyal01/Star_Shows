import { useParams } from "react-router-dom";
import useMovieGenre from "../../hooks/Genres/useMovieGenre";
import useTVShowGenre from "../../hooks/Genres/useTVShowGenre";
import { useSelector } from "react-redux";
import VideoTitle from "../HomePage/VideoTitle";
import VideoBackground from "../HomePage/VideoBackground";
import TVShowVideoTitle from "../TVShows/VideoTitle";
import TVShowVideoBackground from "../TVShows/VideoBackground";
import Mo_Tv_List from "../Common Features/Mo_Tv_List";

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
        {movies?.length && <Mo_Tv_List heading={"Movies"} MoTv={movies} type={"Movie"}/>}
        {tvShows?.length && <Mo_Tv_List heading={"TVShows"} MoTv={tvShows} type={"TVShow"}/>}
      </div>
    </div>
  );
};

export default GenrePage;
