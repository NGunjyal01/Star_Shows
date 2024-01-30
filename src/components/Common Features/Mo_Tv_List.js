import MovieCard from "./MovieCard"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"; 
import Mo_Tv_Card from "./Mo_Tv_Card";

// MoTv means movies or tvShows & type represents it is movie or tvShow

const Mo_Tv_List = ({ heading,MoTv,type }) => {

    const slideLeft = ()=>{
       var slider = document.getElementById(heading);
       slider.scrollLeft = slider.scrollLeft-400;  
    }
    const slideRight = ()=>{
        var slider = document.getElementById(heading);
        slider.scrollLeft = slider.scrollLeft+400;  
    }

    return MoTv && (
        <div className="sm:px-6 p-2 sm:py-4 text-white">
            <h1 className="py-2 px-2 text-xl md:text-3xl">{heading}</h1>
            <div className="flex items-center">
                <FaAngleLeft className="hidden sm:block absolute z-10 left-8 md:hover:opacity-60" onClick={slideLeft} size={30}/>
                <div id={heading} className="flex overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap">
                    <div className="flex">
                        {MoTv.map( movie =><Mo_Tv_Card key={movie.id} posterPath={movie.poster_path} id={movie.id} type={type}/>)}   
                    </div>    
                </div>
                <FaAngleRight className="hidden sm:block absolute right-2 md:hover:opacity-60" onClick={slideRight} size={30}/>
            </div>
        </div>
    )
}

export default Mo_Tv_List;
