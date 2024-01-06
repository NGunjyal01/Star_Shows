import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieDetails from "../../hooks/MovieHooks/useMovieDetails";
import MainVideoBackground from "./MainVideoBackground";
import MainMovieDetails from "./MainMovieDetails";
import MainMovieRecommendations from "./MainMovieRecommendations";

const MoviePage = ({ onClose }) => {
    
    const movie_id = useSelector(store => store.mainMovie.mainMovieId);
    //getting movie details and add them to store
    useMovieDetails(movie_id);
    const mainMovieDetails = useSelector(store => store.mainMovie.mainMovieDetails);

    useEffect(() => {
    const handleScroll = (e) => {
        e.preventDefault();
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("scroll", handleScroll);

    return () => {
        // Clean up the event listener and reset overflow styles
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    if(!mainMovieDetails)    return null;
    return (
    <div className="fixed z-20 w-full h-full flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="absolute mt-14 pb-32 w-10/12 md:w-[70%] h-full bg-[#181818] overflow-y-auto  rounded-lg scrollbar-hide">
            <div>
                <button className="absolute py-2.5 px-4 text-xl mt-4 right-2 font-medium hover:border-2 rounded-full bg-[#181818] text-white" onClick={onClose}>✕</button>
                <div className="absolute mt-80 pl-4">
                    <h1 className="text-xl text-white font-bold">{mainMovieDetails?.title}</h1>
                    <button className='mt-4 px-4 py-2 md:px-14 md:py-4 bg-white text-black font-bold rounded-lg hover:bg-opacity-80'>Play</button>
                </div>
                <MainVideoBackground movie_id={movie_id}/>
                <MainMovieDetails/>
                <MainMovieRecommendations movie_id={movie_id}/>
            </div>
        </div>
        
        
    </div>
    );
};

export default MoviePage;
