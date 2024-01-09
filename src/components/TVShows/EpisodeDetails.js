import { IMG_CDN } from "../../utils/constants";

const EpisodeDetails = ({episode}) => {

    const { air_date,episode_number,name,overview,runtime,season_number,still_path,guest_starts } = episode;

    return (
        <div className="flex sm:mt-5 mt-3 ml-0">
            <img src={IMG_CDN + still_path} alt="Episode Logo" className="w-40 sm:w-80 sm:rounded-lg rounded-md"/>
            <div className="ml-2.5 sm:ml-4 my-auto">
                <h1 className="sm:text-xl font-bold">{name}</h1>
                <div className="flex sm:mt-2">
                    <h1 className="sm:text-base text-xs">{"S"+season_number+" "+"E"+episode_number}</h1>
                    <h1 className="sm:ml-2 sm:mr-2 ml-1 mr-1 sm:text-base text-xs">{"|"}</h1>
                    <h1 className="sm:text-base text-xs">{air_date}</h1>
                    <h1 className="sm:ml-2 sm:mr-2 ml-1 mr-1 sm:text-base text-xs">{"|"}</h1>
                    <h1 className="sm:text-base text-xs">{runtime + " min"}</h1>
                </div>
                <p className="mt-2 hidden sm:block">{overview}</p>
            </div>
        </div>
    );
};

export default EpisodeDetails;
