import { IMG_CDN } from "../../utils/constants";

const MovieCard = ({ posterPath }) => {

    return !posterPath?null: ( 
        <div className="relative w-28 md:w-40 px-1 sm:px-2 md:scale-90 md:hover:scale-110 transition-transform ease-in-out cursor-pointer">
            <div>
                <img alt="Movie Poster" src={IMG_CDN + posterPath} className="rounded-md sm:rounded-lg"/>
            </div>
        </div>
    );
};

export default MovieCard;
