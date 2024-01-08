import { IMG_CDN } from "../../utils/constants";

const TVShowCard = ({ posterPath}) => {

    return !posterPath?null: (
        <div className="relative w-28 md:w-40 px-1 sm:px-2 sm:scale-90 hover:scale-[115%] transition-transform ease-in-out cursor-pointer">
            <div>
                <img alt="TVShow Poster" src={IMG_CDN + posterPath} className="rounded-md sm:rounded-lg"/>
            </div>
        </div>
    );
};

export default TVShowCard;
