import { useSelector } from "react-redux";
import useMainTVShowCast from "../../hooks/TVShowsHooks/useMainTVShowCast";
import SeasonDetails from "./SeasonDetails";

const MainTVShowDetails = ({tvShow_id}) => {

    useMainTVShowCast(tvShow_id);
    const mainTVShowDetails = useSelector(store => store.mainTVShow.mainTVShowDetails);
    const mainTVShowCast = useSelector(store => store.mainTVShow.mainTVShowCast);
    if(!mainTVShowCast || !mainTVShowDetails)   return null;
    const { first_air_date,genres,number_of_episodes,number_of_seasons,overview,seasons,status } = mainTVShowDetails;

    return (
        <div className="text-white sm:p-10 p-5 -mt-7 sm:mt-0">
            <div className="grid grid-cols-12">
                <div className="sm:col-span-8 col-span-full">
                    <div className="flex sm:text-lg text-sm">
                        <h1>{first_air_date.substr(0,4)}</h1>
                        <h1 className="ml-2 mr-2">{"|"}</h1>
                        <h1>{number_of_seasons+" Seasons"}</h1>
                        <h1 className="ml-2 mr-2">{"|"}</h1>
                        <h1>{number_of_episodes+" Episodes"}</h1>
                    </div>
                    <p className="text-base sm:text-lg sm:mt-4 mt-3">{overview}</p>
                </div>
                <div className="sm:ml-7 mt-3 sm:mt-0 sm:col-span-4 col-span-full">
                    <h2><span className="text-gray-500">Cast:</span> {mainTVShowCast?.map(cast => cast.name).slice(0,7).join(", ")}</h2>
                    <h2><span className="text-gray-500">Genre:</span> {genres?.map(genre => genre.name).join(", ")}</h2>
                </div>
            </div>
            <SeasonDetails tvShow_id={tvShow_id} seasons={seasons}/>
        </div>
    );
};

export default MainTVShowDetails;
