import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Mo_Tv_List from "./Common Features/Mo_Tv_List";

const Explore = () => {

    const searchMovie =  async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie, API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    const searchTVShow = async(tvShow) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/tv?query=' + tvShow, API_OPTIONS);
        const json =  await data.json();
        return json.results;
    };

    const [movies,setMovies] = useState(null);
    const [tvShows,setTVShows] = useState(null);

    const searchInput = useSelector(store => store.mainMovie.searchInput);

    useEffect(()=>{
        searchMovie(searchInput).then((result)=> setMovies(result));
        searchTVShow(searchInput).then((result)=>setTVShows(result));
    },[searchInput]);

    return (!movies || !tvShows)? null: (
    <div className='bg-[#141414] h-screen'>
        <div className="pt-20 sm:pt-32 sm:pl-6">
            {movies.length?<Mo_Tv_List heading={"Movies"} MoTv={movies} type={"Movie"}/>:null}
            {tvShows.length?<Mo_Tv_List heading={"TVShows"} MoTv={tvShows} type={"TVShow"}/>:null}
        </div>
    </div>
    );
};

export default Explore;
