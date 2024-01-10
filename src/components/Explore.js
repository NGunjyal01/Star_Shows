import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./Common Features/MovieCard";
import { Link } from "react-router-dom";
import MovieList from "./Common Features/MovieList";
import TVShowList from "./Common Features/TVShowList";

const Explore = () => {

    const searchMovie =  async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie, API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    const searchTVShow = async(tvShow) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/tv?query=' + tvShow + '&page=1', API_OPTIONS);
        const json =  await data.json();
        return json.results;
    };

    const [movies,setMovies] = useState(null);
    const [tvShows,setTVShows] = useState(null);

    const searchInput = useSelector(store => store.mainMovie.searchInput);
    console.log(searchInput);   

    useEffect(()=>{
        const MoviesPromise = searchMovie(searchInput).then((result)=> setMovies(result));
        const TVShowsPromise = searchTVShow(searchInput).then((result)=>setTVShows(result));
    },[searchInput]);
    console.log(movies);
    console.log(tvShows);

    return (!movies || !tvShows)? null: (
    <div className='bg-[#141414] h-screen'>
        <div className="pt-32 pl-10">
            {movies.length?<MovieList title={"Movies"} movies={movies}/>:null}
            {tvShows.length?<TVShowList title={"TVShows"} tvShows={tvShows}/>:null}
        </div>
    </div>
    )
}

export default Explore;
