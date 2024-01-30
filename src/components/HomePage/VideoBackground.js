import useMovieTrailer from "../../hooks/MovieHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => { 

    //fechting movie trailer and update the store
    useMovieTrailer(movie_id);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    return (
    <div>
        <iframe className="w-full md:h-screen aspect-video"
        // autoplay is added and mute 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=2Gx8dihAIbJhHsU5&autoplay=1&loop=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
    );
};

export default VideoBackground;
