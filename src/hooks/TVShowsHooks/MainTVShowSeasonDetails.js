import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";


const useMainTVShowSeasonDetails = (tvShow_id,season_number) => {

    const getMainTVShowSeasonDetails = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvShow_id + "/season/" + season_number, API_OPTIONS);
        const json = await data.json();
        console.log(json);
    };

    useEffect(()=>{
        getMainTVShowSeasonDetails();
    },[tvShow_id,season_number]);
};

export default useMainTVShowSeasonDetails;
