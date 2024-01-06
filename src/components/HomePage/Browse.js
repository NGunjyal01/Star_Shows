import useNowPlayingMovies from "../../hooks/MovieHooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/MovieHooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/MovieHooks/useTopRatedMovies";
import useUpComingMovies from "../../hooks/MovieHooks/useUpComingMovies";
import useAiringTodayShows from "../../hooks/TVShowsHooks/useAiringTodayShows";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";
import MoviePage from "../MoviePage";
import { removeMainMovieDetails, removeMainMovieId } from "../../utils/Slices/mainMovieSlice";
import useOnTheAirShows from "../../hooks/TVShowsHooks/useOnTheAirShows";
import usePopularShows from "../../hooks/TVShowsHooks/usePopularShows";
import useTopRatedShows from "../../hooks/TVShowsHooks/useTopRatedShows";


const Browse = () => {
  //fetch data from tmdb api and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useAiringTodayShows();
  useOnTheAirShows();
  usePopularShows();
  useTopRatedShows();
  const mainMovieId = useSelector(store => store.mainMovie.mainMovieId);
  const dispatch = useDispatch();
  const handleOnClose = () =>{
    dispatch(removeMainMovieId());
    dispatch(removeMainMovieDetails());
  };
  return (
    <div>
      {mainMovieId && <MoviePage onClose={handleOnClose}/>}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
