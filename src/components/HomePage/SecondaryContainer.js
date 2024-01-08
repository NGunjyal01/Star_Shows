import MovieList from '../Common Features/MovieList';
import TVShowList from '../Common Features/TVShowList';
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
                <TVShowList title={"Airing Today Shows"} tvShows={tvShows.airingTodayShows} />
                <TVShowList title={"On The Air Shows"} tvShows={tvShows.onTheAirShows} />
                <TVShowList title={"Popular Shows"} tvShows={tvShows.popularShows} />
                <TVShowList title={"Top Rated Shows"} tvShows={tvShows.topRatedShows} />   
            </div>
        </div>
    )
}

export default SecondaryContainer
