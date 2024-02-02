import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useGetAllMovies from "../../hooks/MovieHooks/useGetAllMovies";
import useGetAllTVShows from "../../hooks/TVShowsHooks/useGetAllTVShows";


const Browse = () => {
  //fetch data from tmdb api and update store
  useGetAllMovies();
  useGetAllTVShows();

  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
