import { moviesType, tvShowsType } from '../../utils/constants';
import Mo_Tv_List from '../Common Features/Mo_Tv_List';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const { nowPlayingMovies,topRatedMovies,popularMovies,upComingMovies } = useSelector(store => store.movies);
    const movies = [nowPlayingMovies,topRatedMovies,popularMovies,upComingMovies];
    const { airingTodayShows,onTheAirShows,popularShows,topRatedShows } = useSelector(store => store.tvShows);
    const tvShows = [airingTodayShows,onTheAirShows,popularShows,topRatedShows];

    return (
        <div className='bg-[#141414]'>
            <div className='pl-2 sm:pl-6 pt-10 relative z-10'>
                {moviesType.map((movieType,index) => <Mo_Tv_List key={movieType.label} heading={movieType.label} MoTv={movies[index]} type={"Movie"}/>)}
                {tvShowsType.map((tvShowType,index) => <Mo_Tv_List key={tvShowType.label} heading={tvShowType.label} MoTv={tvShows[index]} type={"TVShow"}/>)}
            </div>
        </div>
    )
}

export default SecondaryContainer
