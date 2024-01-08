import { useSelector } from "react-redux";
import useMainMovieCast from "../../hooks/MovieHooks/useMainMovieCast";


const MainMovieDetails = ({movie_id}) => {

    useMainMovieCast(movie_id);
    const mainMovieDetails = useSelector(store => store.mainMovie.mainMovieDetails);
    const { release_date,runtime,overview,genres } = mainMovieDetails;
    const mainMovieCast = useSelector(store => store.mainMovie.mainMovieCast);

    return (
        <div className="text-white m-8">
            <div className="flex">
                <div className="w-[65%]">
                    <div className="flex">
                        <h2 className="mr-6">{release_date?.substr(0,4)}</h2>
                        <h2>{runtime + " min"}</h2>
                    </div>
                    <p className="text-lg mt-4">{overview}</p>
                </div>
                <div className="ml-7 w-[35%]">
                    <h2 className=""><span className="text-gray-500">Cast:</span> {mainMovieCast?.map(cast => cast.name).slice(0,7).join(", ")}</h2>
                    <h2 className=""><span className="text-gray-500">Genre:</span> {genres?.map(genre => genre.name).join(", ")}</h2>
                </div>
            </div>
        </div>
    )
}

export default MainMovieDetails;

// adult(pin):false
// backdrop_path(pin):"/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg"
// belongs_to_collection(pin):null
// budget(pin):0
// homepage(pin):""
// id(pin):891699
// imdb_id(pin):"tt15799866"
// original_language(pin):"en"
// original_title(pin):"Silent Night"
// overview(pin):"A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death."
// popularity(pin):1184.238
// poster_path(pin):"/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
// release_date(pin):"2023-11-30"
// revenue(pin):0
// runtime(pin):104
// status(pin):"Released"
// tagline(pin):"Action speaks louder than words."
// title(pin):"Silent Night"
// video(pin):false
// vote_average(pin):5.8
// vote_count(pin):172