import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);
    const tvShows = useSelector(store => store.tvShows);

    return (
        <div className='bg-[#141414]'>
            <div className='pl-2 md:pl-12 pt-10 relative z-10'>
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} /> 
                <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} /> 
                <MovieList title={"Popular Movies"} movies={movies.popularMovies} /> 
                <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
                <MovieList title={"Airing Today Shows"} movies={tvShows.airingTodayShows} />
                <MovieList title={"On The Air Shows"} movies={tvShows.onTheAirShows} />
                <MovieList title={"Popular Shows"} movies={tvShows.popularShows} />
                <MovieList title={"Top Rated Shows"} movies={tvShows.topRatedShows} />   
            </div>
        </div>
    )
}

export default SecondaryContainer
