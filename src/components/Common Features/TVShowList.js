import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6"; 
import { Link } from "react-router-dom";
import TVShowCard from "./TVShowCard";

const TVShowList = ({title,tvShows}) => {

    const slideLeft = ()=>{
       var slider = document.getElementById(title);
       slider.scrollLeft = slider.scrollLeft-400;  
    }
    const slideRight = ()=>{
        var slider = document.getElementById(title);
        slider.scrollLeft = slider.scrollLeft+400;  
    }

    return tvShows && (
        <div className="px-6 text-white">
            <h1 className="py-2 px-2 text-xl md:text-3xl">{title}</h1>
            <div className="flex items-center">
                <FaAngleLeft className="hidden sm:block absolute z-10 left-5 md:left-12 hover:opacity-60" onClick={slideLeft} size={30}/>
                <div id={title} className="flex overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap">
                    <div className="flex">
                        {tvShows.map(tvShow => <Link key={tvShow.id} to={`/body/tvshows/${tvShow.id}`}><TVShowCard posterPath={tvShow.poster_path} tvShow_id={tvShow.id}/></Link> )}   
                    </div>    
                </div>
                <FaAngleRight className="hidden sm:block absolute right-0 hover:opacity-60" onClick={slideRight} size={30}/>
            </div>
        </div>
    )
}

export default TVShowList;
