import { IMG_CDN } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addMainMovieId } from "../../utils/Slices/mainMovieSlice";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath,movie_id }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleMovieCardClick = (movie_id)=>{
        const path = '/body/movies/'+movie_id;
        navigate(path);
    }

    return (
        <>
            <div className="relative w-28 md:w-40 px-2 scale-90 hover:scale-[115%] transition-transform ease-in-out cursor-pointer">
                <div className="rounded-lg">
                    <img alt="Movie Poster" src={IMG_CDN + posterPath} onClick={()=>handleMovieCardClick(movie_id)}/>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
