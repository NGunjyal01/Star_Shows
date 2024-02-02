import { useSelector } from "react-redux";
import Mo_Tv_Card from "../../Common Features/Mo_Tv_Card";
import LoadMoreBtn from "../../Common Features/LoadMoreBtn";
import { useEffect, useState } from "react";
import useRecommendedMovies from "../../../hooks/MovieHooks/useRecommendedMovies";


const MainMovieRecommendations = ({ movie_id }) => {
    
    useRecommendedMovies(movie_id);
    const movieRecommendations = useSelector(store => store.mainMovie.movieRecommendations);
    const similarMovies = useSelector(store => store.mainMovie.similarMovies);

    const [loadMoreRM,setLoadMoreRM] = useState(true);
    const [loadMoreSM,setLoadMoreSM] = useState(true);
    //RM =  Recommended movies, SM = similar Movies
    const [rmNumber,setRMNumber] = useState(6);
    const [smNumber,setSMNumber] = useState(6);
    
    useEffect(()=>{
        setRMNumber(6);
        setSMNumber(6);
        setLoadMoreRM(true);
        setLoadMoreSM(true);
    },[movie_id]);
    
    const handleLoadMoreBtnClick = (type,totalLength)=>{
        if(type=="RM"){
            setRMNumber(rmNumber+6);
            if(rmNumber+6>=totalLength){
                setLoadMoreRM(false);
            }
        }
        else{
            setSMNumber(smNumber+6);
            if(smNumber+6>=totalLength){
                setLoadMoreSM(false);
            }
        }
    }

    if(!similarMovies || !movieRecommendations) return null;

    return (
        <div className="mt-4 ml-3 sm:ml-9">
            {!movieRecommendations.length ? null : 
            <div>
                <h1 className="text-white pb-2 sm:pb-5 pl-2 text-xl md:text-3xl">Recommended Movies</h1>
                <div className="hidden md:flex flex-wrap">{movieRecommendations.map(movie => <div className="py-2"><Mo_Tv_Card posterPath={movie.poster_path} id={movie.id} type={"Movie"}/></div>)}</div>
                <div className="md:hidden flex flex-wrap">{movieRecommendations.slice(0,rmNumber).map(movie => <div className="py-2"><Mo_Tv_Card posterPath={movie.poster_path} id={movie.id} type={"Movie"}/></div>)}</div>
                {loadMoreRM && <div className="md:hidden" onClick={()=>{handleLoadMoreBtnClick("RM",movieRecommendations.length)}}><LoadMoreBtn/></div>}    
            </div>}
            {!similarMovies.length ? null :            
            <div className="mt-3 sm:mt-6">
                <h1 className="text-white pb-2 sm:pb-5 pl-2 text-xl md:text-3xl">Similar Movies</h1>
                <div className="hidden md:flex flex-wrap">{similarMovies.map(movie => <div className="py-2"><Mo_Tv_Card posterPath={movie.poster_path} id={movie.id} type={"Movie"}/></div>)}</div>    
                <div className="md:hidden flex flex-wrap">{similarMovies.slice(0,smNumber).map(movie => <div className="py-2"><Mo_Tv_Card posterPath={movie.poster_path} id={movie.id} type={"Movie"}/></div>)}</div>
                {loadMoreSM && <div className="md:hidden" onClick={()=>{handleLoadMoreBtnClick("SM",similarMovies.length)}}><LoadMoreBtn/></div>}   
            </div>}
        </div>
    );
};

export default MainMovieRecommendations;
