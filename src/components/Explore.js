import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./Common Features/MovieCard";

const Explore = () => {

    const searchMovie =  async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie, API_OPTIONS);
        const json = await data.json();
        return json.results;
    };
    const [movies,setMovies] = useState(null)
    const searchInput = useSelector(store => store.mainMovie.searchInput);
    console.log(searchInput);   

    useEffect(()=>{
        const promise = searchMovie(searchInput).then((result)=> setMovies(result));
    },[searchInput]);
    console.log(movies);

    return !movies? null: (
    <div className='bg-[#222831] h-screen'>
        <div className="pt-20 pl-10">
            <div className="flex flex-wrap">
                {movies.map( movie => <MovieCard key={movie.id} posterPath={movie.poster_path} movie_id={movie.id}/>)}   
            </div> 
        </div>
    </div>
    )
}

export default Explore;
