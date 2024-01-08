import { useDispatch, useSelector } from "react-redux";
import useMainTVShowCast from "../../hooks/TVShowsHooks/useMainTVShowCast";
import MainTVShowSeasonDetails from "../../hooks/TVShowsHooks/MainTVShowSeasonDetails";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addMainTVShowSeasonDetails } from "../../utils/Slices/mainTVShowSlice";

const MainTVShowDetails = ({tvShow_id}) => {

    useMainTVShowCast(tvShow_id);
    const mainTVShowDetails = useSelector(store => store.mainTVShow.mainTVShowDetails);
    const { first_air_date,genres,number_of_episodes,number_of_seasons,overview,seasons,status } =mainTVShowDetails;
    const mainTVShowCast = useSelector(store => store.mainTVShow.mainTVShowCast);

    const dispatch = useDispatch();

    const getMainTVShowSeasonDetails = async(season_number)=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/season/" + season_number, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowSeasonDetails(json));
    };

    return (
        <div className="text-white p-10">
            <div className="flex">
                <div className="w-[65%]">
                    <div className="flex">
                        <h2 className="mr-6">{first_air_date.substr(0,4)}</h2>
                        <h2>{number_of_seasons+" Seasons"}</h2>
                    </div>
                    <p className="text-lg mt-4">{overview}</p>
                </div>
                <div className="ml-7 w-[35%]">
                    <h2><span className="text-gray-500">Cast:</span> {mainTVShowCast?.map(cast => cast.name).slice(0,7).join(", ")}</h2>
                    <h2><span className="text-gray-500">Genre:</span> {genres?.map(genre => genre.name).join(", ")}</h2>
                </div>
            </div>
            <div className="pt-5 flex">
                <h1 className="text-2xl font-bold">Episodes</h1>
                <select className="bg-black ml-10" onChange={(e)=>{getMainTVShowSeasonDetails(e.target.value)}}>{seasons.map((season) => <option key={season.season_number} value={season.season_number}>{(season.season_number===0)?("Specials") :("Season " + season.season_number)}</option> )}</select>
            </div>
        </div>
        
    )
}

export default MainTVShowDetails
