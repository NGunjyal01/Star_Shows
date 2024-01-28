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
                <FaAngleLeft className="hidden sm:block absolute z-10 left-8 md:hover:opacity-60" onClick={slideLeft} size={30}/>
                <div id={title} className="flex overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap">
                    <div className="flex">
                        {movies.map( movie =><MovieCard key={movie.id} posterPath={movie.poster_path} movie_id={movie.id}/>)}   
                    </div>    
                </div>
                <FaAngleRight className="hidden sm:block absolute right-2 md:hover:opacity-60" onClick={slideRight} size={30}/>
            </div>
        </div>
    )
}

export default MovieList;
