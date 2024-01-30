import { IMG_CDN } from "../../utils/constants";
import { Link } from "react-router-dom";

const TVShowCard = ({ posterPath,tvShow_id }) => {

    return !posterPath?null: (
        <Link to={`/tvshows/${tvShow_id}`}>
            <div className="relative w-28 md:w-40 px-1 sm:px-2  md:hover:scale-[90%] transition-transform ease-in-out cursor-pointer">
                <div>
                    <img alt="TVShow Poster" src={IMG_CDN + posterPath} className="rounded-md sm:rounded-lg"/>
                </div>
            </div>
        </Link>
    );
};

export default TVShowCard;
