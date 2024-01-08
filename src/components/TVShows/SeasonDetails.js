import { useState } from "react";
import { useSelector } from "react-redux";
import EpisodeDetails from "./EpisodeDetails";

const SeasonDetails = () => {    

    const mainTVShowSeasonDetails = useSelector(store => store.mainTVShow.mainTVShowSeasonDetails);
    if(!mainTVShowSeasonDetails)    return null;
    console.log(mainTVShowSeasonDetails.season_number);
    const { air_date,episodes,poster_path } = mainTVShowSeasonDetails;
    return(
        <div>
            {episodes.map((episode) => <EpisodeDetails episode={episode}/> )}
        </div>
    )
}

export default SeasonDetails;
