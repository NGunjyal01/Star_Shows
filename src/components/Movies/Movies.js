import { useSelector } from "react-redux";
import MovieList from "../Common Features/MovieList";
import MainContainer from "../HomePage/MainContainer";
// import { Movies_Genres } from "../../utils/constants";
// import { Link } from "react-router-dom";
// import Select from "react-select";
// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

const Movies = () => {
  const movies = useSelector((store) => store.movies);

  // const [showOptionMenu,setShowOptionMenu] = useState(false);
  // const [option,setOption] = useState(Movies_Genres[0].label)
  // const handleOptionMenuClick = ()=>{
  //   setShowOptionMenu(!showOptionMenu);
  // }
  // const handleOptionClick = (option) =>{
  //   setOption(option);
  //   setShowOptionMenu(false);
  // };

  return (
    <>
      {/* <div className="absolute z-50 pt-20 flex">
        <h1 className="text-white">Genre</h1>
        <button className="bg-white flex w-32" onClick={handleOptionMenuClick}><h1 className="mx-auto">{option}</h1> <FaChevronDown className="absolute right-1 my-1" style={{color:"blue"}}/></button>
      </div>
      {showOptionMenu && <div className="absolute flex flex-wrap text-black mt-32 bg-white max-w-xs bg-opacity-50 z-20">
        {Movies_Genres.map(genre => <Link className="m-1.5" key={genre.value}  onClick={()=>{handleOptionClick(genre.label)}}>{genre.label}</Link>)}
      </div>} */}
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
