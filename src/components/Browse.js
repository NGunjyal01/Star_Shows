import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useDispatch, useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";
import MoviePage from "./MoviePage";
import { removeMainMovieDetails, removeMainMovieId } from "../utils/mainMovieSlice";

const Browse = () => {
  //fetch data from tmdb api and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);
  const mainMovieId = useSelector(store => store.mainMovie.mainMovieId);
  const dispatch = useDispatch();
  const handleOnClose = () =>{
    dispatch(removeMainMovieId());
    dispatch(removeMainMovieDetails());
  };
  return (
    <div>
      <Header/>
      {mainMovieId &&<MoviePage onClose={handleOnClose}/>}
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
