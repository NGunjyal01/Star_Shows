import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import Mo_Tv_List from "../Common Features/Mo_Tv_List";
import { tvShowsType } from "../../utils/constants";

const TVShows = () => {

  const { airingTodayShows,onTheAirShows,popularShows,topRatedShows } = useSelector(store => store.tvShows);
  const tvShows = [airingTodayShows,onTheAirShows,popularShows,topRatedShows];

  return (
    <>
      <MainContainer/>
        <div className='bg-[#141414] h-full'>
        <div className='pl-2 md:pl-12 pt-10 relative z-10'>
          {tvShowsType.map((tvShowType,index) => <Mo_Tv_List key={tvShowType.label} heading={tvShowType.label} MoTv={tvShows[index]} type={"TVShow"}/>)}
        </div>
      </div>
    </>
  );
};

export default TVShows;
