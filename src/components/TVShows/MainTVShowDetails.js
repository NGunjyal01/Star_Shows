import { useDispatch, useSelector } from "react-redux";
import useMainTVShowCast from "../../hooks/TVShowsHooks/useMainTVShowCast";
import { useEffect,useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addMainTVShowSeasonDetails } from "../../utils/Slices/mainTVShowSlice";
import SeasonDetails from "./SeasonDetails";
import MainTVShowRecommendations from "./MainTVShowRecommendations";

const MainTVShowDetails = ({tvShow_id}) => {

    useMainTVShowCast(tvShow_id);
    const mainTVShowDetails = useSelector(store => store.mainTVShow.mainTVShowDetails);
    const { first_air_date,genres,number_of_episodes,number_of_seasons,overview,seasons,status } =mainTVShowDetails;
    const mainTVShowCast = useSelector(store => store.mainTVShow.mainTVShowCast);

    const dispatch = useDispatch();
    const [seasonNumber,setSeasonNumber] = useState(1);
    //fetching details for each season 
    const getMainTVShowSeasonDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/season/" + seasonNumber, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowSeasonDetails(json));
    };

    const handleSeasonButtonClick = (season_number)=>{
        setSeasonNumber(season_number);
    };
    useEffect(()=>{
        getMainTVShowSeasonDetails();
    },[seasonNumber]);
    useEffect(()=>{
        setSeasonNumber(1);
        getMainTVShowSeasonDetails();
    },[tvShow_id]);

    return (
        <div className="text-white p-10">
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <div className="flex">
                        <h1 className="">{first_air_date.substr(0,4)}</h1>
                        <h1 className="ml-2 mr-2">{"|"}</h1>
                        <h1>{number_of_seasons+" Seasons"}</h1>
                        <h1 className="ml-2 mr-2">{"|"}</h1>
                        <h1>{number_of_episodes+" Episodes"}</h1>
                    </div>
                    <p className="text-lg mt-4">{overview}</p>
                </div>
                <div className="ml-7 col-span-4">
                    <h2><span className="text-gray-500">Cast:</span> {mainTVShowCast?.map(cast => cast.name).slice(0,7).join(", ")}</h2>
                    <h2><span className="text-gray-500">Genre:</span> {genres?.map(genre => genre.name).join(", ")}</h2>
                </div>
            </div>
            <div className="pt-5 flex">
                <h1 className="text-2xl font-bold">Episodes</h1>
                <select className="bg-black ml-10 p-1" defaultValue={`Season 1`} onChange={(e)=>{handleSeasonButtonClick(e.target.value.substr(7,8))}}>{seasons.map((season) => <option key={seasons.season_number} value={"Season " + season.season_number}>{season.season_number===0?"Specials":"Season " + season.season_number}</option> )}</select>
            </div>
            <SeasonDetails/>
            <MainTVShowRecommendations tvShow_id={tvShow_id}/>
        </div>
        
    )
}

export default MainTVShowDetails;
