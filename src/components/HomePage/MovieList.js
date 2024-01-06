import MovieCard from "./MovieCard"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"; 

const MovieList = ({title,movies}) => {

    const slideLeft = ()=>{
       var slider = document.getElementById(title);
       slider.scrollLeft = slider.scrollLeft-400;  
    }
    const slideRight = ()=>{
        var slider = document.getElementById(title);
        slider.scrollLeft = slider.scrollLeft+400;  
    }

    return movies && (
        <div className="px-6 text-white">
            <h1 className="py-2 px-2 text-xl md:text-3xl">{title}</h1>
            <div className="flex items-center">
                <FaAngleLeft className="absolute z-10 left-5 md:left-12 hover:opacity-60" onClick={slideLeft} size={30}/>
                <div id={title} className="flex overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap">
                    <div className="flex">
                        {movies.map( movie => <MovieCard key={movie.id} posterPath={movie.poster_path} movie_id={movie.id}/> )}   
                    </div>    
                </div>
                <FaAngleRight className="absolute right-0 hover:opacity-60" onClick={slideRight} size={30}/>
            </div>
        </div>
    )
}

export default MovieList
