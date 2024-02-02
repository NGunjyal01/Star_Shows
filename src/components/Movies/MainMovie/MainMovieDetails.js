import { useSelector } from "react-redux";
import AddWatchlistIcon from "../../Common Features/AddWatchlistIcon";
import { Link, useParams } from "react-router-dom";


const MainMovieDetails = () => {

    const {movie_id} = useParams();

    const mainMovieDetails = useSelector(store => store.mainMovie.mainMovieDetails);
    const { release_date,runtime,overview,genres,poster_path } = mainMovieDetails;
    const mainMovieCast = useSelector(store => store.mainMovie.mainMovieCast);

    return  (
        <div className="text-white sm:p-10 p-5 -mt-7 sm:mt-0">
            <div className="absolute sm:hidden block right-5 top-[41%]">
                <AddWatchlistIcon id={movie_id} poster_path={poster_path} type={"Movie"}/>
            </div>
            <div className="grid grid-cols-12">
                <div className="sm:col-span-8 col-span-full">
                    <div className="flex sm:text-lg text-sm">
                        <h1>{release_date?.substr(0,4)}</h1>
                        <h1 className="ml-2 mr-2">{"|"}</h1>
                        <h1>{runtime+" min"}</h1>
                    </div>
                    <p className="text-base sm:text-lg sm:mt-4 mt-3">{overview}</p>
                </div>
                <div className="sm:ml-7 mt-3 sm:mt-0 sm:col-span-4 col-span-full">
                    <h2 className="sm:text-base text-sm">
                        <span className="text-gray-500">Cast:</span> 
                        {mainMovieCast?.map(cast => cast.name).slice(0,7).join(", ")}
                    </h2>
                    <div className="sm:text-base text-sm flex space-x-1">
                        <h1 className="text-gray-500">Genre:</h1> 
                        <div className="flex sm:space-x-2 space-x-1">
                            {genres?.map(genre => <Link to={"/genre/"+genre.id} className="md:hover:text-[#00ADB5]">{genre.name}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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