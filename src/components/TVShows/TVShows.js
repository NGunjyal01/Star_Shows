import { useSelector } from "react-redux"
import MovieList from "../HomePage/MovieList"
import MainContainer from "./MainContainer";

const TVShows = () => {

  const tvShows = useSelector(store => store.tvShows);

  return (
    <>
      <MainContainer/>
        <div className='bg-[#222831] h-full'>
        <div className='pl-2 md:pl-12 pt-10 relative z-10'>
            <MovieList title={"Airing Today Shows"} movies={tvShows.airingTodayShows} />
            <MovieList title={"Popular Shows"} movies={tvShows.popularShows} />
            <MovieList title={"On The Air Shows"} movies={tvShows.onTheAirShows} />
            <MovieList title={"Top Rated Shows"} movies={tvShows.topRatedShows} />   
        </div>
      </div>
    </>
  )
}

export default TVShows
