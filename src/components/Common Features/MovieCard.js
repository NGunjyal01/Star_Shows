import { IMG_CDN } from "../../utils/constants";

const MovieCard = ({ posterPath}) => {

    return !posterPath?null: (
        <div className="relative w-28 md:w-40 px-2 scale-90 hover:scale-[115%] transition-transform ease-in-out cursor-pointer">
            <div className="rounded-lg">
                <img alt="Movie Poster" src={IMG_CDN + posterPath}/>
            </div>
        </div>
    );
};

export default MovieCard;
