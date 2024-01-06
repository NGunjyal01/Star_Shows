import { useSelector } from 'react-redux';
import MovieList from './HomePage/MovieList'

const Movies = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-[#222831] h-full'>
      <div className='pl-2 md:pl-12 relative z-10'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} /> 
        <MovieList title={"Popular"} movies={movies.popularMovies} /> 
        <MovieList title={"Upcoming"} movies={movies.upComingMovies} />   
      </div>
    </div>
  )
}

export default Movies
