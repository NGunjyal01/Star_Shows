import useNowPlayingMovies from "../../hooks/MovieHooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/MovieHooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/MovieHooks/useTopRatedMovies";
import useUpComingMovies from "../../hooks/MovieHooks/useUpComingMovies";
import useAiringTodayShows from "../../hooks/TVShowsHooks/useAiringTodayShows";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
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

  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
