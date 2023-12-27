import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath}) => {

    return (
    <div className="w-28 md:w-40 px-2">
        <img alt="Movie Poster" src={IMG_CDN+posterPath}/> 
    </div>
    )
}

export default MovieCard
