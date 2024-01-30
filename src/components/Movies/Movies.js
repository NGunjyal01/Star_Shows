import { useSelector } from "react-redux";
import MainContainer from "../HomePage/MainContainer";
import { moviesType } from "../../utils/constants";
import Mo_Tv_List from "../Common Features/Mo_Tv_List";

const Movies = () => {

  const { nowPlayingMovies,topRatedMovies,popularMovies,upComingMovies } = useSelector(store => store.movies);
  const movies = [nowPlayingMovies,topRatedMovies,popularMovies,upComingMovies];

  return (
    <>
      <div className="bg-[#141414] h-full">
        <MainContainer />
        <div className="pl-2 sm:pl-6 pt-10 relative z-10">
          {moviesType.map((movieType,index) => <Mo_Tv_List key={movieType.label} heading={movieType.label} MoTv={movies[index]} type={"Movie"}/>)}
        </div>
      </div>
    </>
  );
};

export default Movies;
