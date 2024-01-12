import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return null;
    const firstMovie = movies[0];
    const {title,overview,id} = firstMovie;
    return (
    <div className='pt-20 bg-black sm:pt-0'>
        <VideoTitle title={title} overview={overview} movie_id={id}/>
        <VideoBackground movie_id={id}/>
    </div>
    );
};

export default MainContainer;
