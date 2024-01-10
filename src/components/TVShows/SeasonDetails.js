import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import EpisodeDetails from "./EpisodeDetails";
import { API_OPTIONS } from "../../utils/constants";
import { addMainTVShowSeasonDetails } from "../../utils/Slices/mainTVShowSlice";

const SeasonDetails = ({tvShow_id,seasons}) => {    

    const dispatch = useDispatch();
    const [seasonNumber,setSeasonNumber] = useState(1);
    const [selectedValue,setSelectedValue] = useState("Season 1");
    const [displayEpisodes,setDisplayEpisodes] = useState(10);
    const [showMore,setShowMore] = useState(true);

    //fetching details for each season 
    const getMainTVShowSeasonDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/season/" + seasonNumber, API_OPTIONS);
        const json = await data.json();
        dispatch(addMainTVShowSeasonDetails(json));
    };

    const handleSeasonButtonClick = (season_number)=>{
        setSelectedValue("Season "+season_number);
        setSeasonNumber(season_number);
    };

    const handleLoadMoreClick = (totalLength) =>{
        setDisplayEpisodes(displayEpisodes+10);
        if(displayEpisodes+10>=totalLength){
            setShowMore(false);
        }
    };

    useEffect(()=>{
        getMainTVShowSeasonDetails();
        setDisplayEpisodes(10);
        setShowMore(true);
    },[seasonNumber]);

    useEffect(()=>{
        //this will call when you enter in new tvshow page
        setSeasonNumber(1);
        setSelectedValue("Season 1");
        setDisplayEpisodes(10);
        setShowMore(true);
        getMainTVShowSeasonDetails();
    },[tvShow_id]);

    const mainTVShowSeasonDetails = useSelector(store => store.mainTVShow.mainTVShowSeasonDetails);
    if(!mainTVShowSeasonDetails)    return null;
    const { air_date,episodes,poster_path } = mainTVShowSeasonDetails;

    return (!seasons || !episodes)?null:(
        <div>
            <div className="pt-5 flex mb-2">
                <h1 className="text-lg sm:text-2xl font-bold">Episodes</h1>
                <select className="text-sm sm:text-base bg-black ml-10 p-1 scrollbar-hide" value={selectedValue} onChange={(e)=>{handleSeasonButtonClick(e.target.value.substr(7,8))}}>{seasons.map((season) => <option key={seasons.season_number} value={"Season " + season.season_number} className="">{season.season_number===0?"Specials":"Season " + season.season_number}</option> )}</select>
            </div>
            <div className="sm:w-11/12">
                {episodes.slice(0,displayEpisodes).map((episode) => <EpisodeDetails episode={episode}/>)}
            </div>
            {episodes.length>10 && showMore && <div className="flex flex-row items-center mt-4 text-white">
                <hr className="sm:w-[45%] w-[37%] mr-2"/><button className="bg-white sm:px-4 sm:py-2 px-2.5 py-1.5 text-black text-xs sm:text-base rounded-md sm:rounded-lg " onClick={()=>{handleLoadMoreClick(episodes.length)}}>Load More</button><hr className="sm:w-[45%] w-[37%] ml-2"/>
            </div>}
            {/* {episodes.length>10 && showMore && <div className="absolute flex justify-center items-center -mt-36 h-36 w-full bg-[#141414] bg-opacity-95  z-50">
                <button className="bg-white px-4 py-2 text-black" onClick={()=>{handleLoadMoreClick(episodes.length)}}>Load More</button>
            </div>} */}
        </div>
    );
};

export default SeasonDetails;
