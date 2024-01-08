import { IMG_CDN } from "../../utils/constants";

const EpisodeDetails = ({episode}) => {

    const { air_date,episode_number,name,overview,runtime,season_number,still_path,guest_starts } = episode;

    return (
        <div className="flex m-5 ml-0 w-11/12">
            <img src={IMG_CDN + still_path} alt="Episode Logo" className="w-52 object-cover"/>
            <div className="ml-4">
                <h1 className="text-xl font-bold">{name}</h1>
                <div className="flex mt-2">
                    <h1>{"S"+season_number+" "+"E"+episode_number}</h1>
                    <h1 className="ml-2 mr-2">{"|"}</h1>
                    <h1>{air_date}</h1>
                    <h1 className="ml-2 mr-2">{"|"}</h1>
                    <h1>{runtime + " min"}</h1>
                </div>
                <p className="mt-2">{overview}</p>
            </div>
        </div>
    )
}

export default EpisodeDetails;
