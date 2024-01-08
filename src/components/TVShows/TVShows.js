import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import TVShowList from "../Common Features/TVShowList";

const TVShows = () => {

  const tvShows = useSelector(store => store.tvShows);

  return (
    <>
      <MainContainer/>
        <div className='bg-[#222831] h-full'>
        <div className='pl-2 md:pl-12 pt-10 relative z-10'>
            <TVShowList title={"Airing Today Shows"} tvShows={tvShows.airingTodayShows} />
            <TVShowList title={"On The Air Shows"} tvShows={tvShows.onTheAirShows} />
            <TVShowList title={"Popular Shows"} tvShows={tvShows.popularShows} />
            <TVShowList title={"Top Rated Shows"} tvShows={tvShows.topRatedShows} />   
        </div>
      </div>
    </>
  )
}

export default TVShows;
