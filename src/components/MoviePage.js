import { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";

const MoviePage = ({ onClose }) => {

    const movie_id = useSelector(store => store.mainMovie.mainMovieId);
    useMovieDetails(movie_id);

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



    return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="mt-14 w-1/2 h-full bg-white text-black overflow-y-auto">
            <div>
                Hello
            </div>
        </div>
        <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
        >
        Close
        </button>
    </div>
    );
};

export default MoviePage;
