import { IMG_CDN } from "../../utils/constants";
import { Link } from "react-router-dom";

const Mo_Tv_Card = ({ posterPath,id,type }) => {
    
    let path;
    if(type==="Movie")  path="/movies/"+id;
    else path="/tvshows/"+id;

    return !posterPath ? null : (
        <Link to={path}>
            <div className="w-28 md:w-40 px-1 sm:px-2  md:hover:scale-90 transition-transform ease-in-out cursor-pointer">
            <div>
                <img alt="Poster" src={IMG_CDN + posterPath} className="rounded-md sm:rounded-lg"/>
            </div>
            </div>
        </Link>
    );
};

export default Mo_Tv_Card;
