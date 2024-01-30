import { useSelector } from "react-redux";
import useSimilarTVShows from "../../../hooks/TVShowsHooks/useSimilarTVShows";
import useTVShowRecommendations from "../../../hooks/TVShowsHooks/useTVShowRecommendations";
import Mo_Tv_Card from "../../Common Features/Mo_Tv_Card";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../../Common Features/LoadMoreBtn";

const MainTVShowRecommendations = ({tvShow_id}) => {

    useSimilarTVShows(tvShow_id);
    useTVShowRecommendations(tvShow_id);

    const similarTVShows = useSelector(store => store.mainTVShow.similarTVShows);
    const tvShowRecommendations = useSelector(store => store.mainTVShow.tvShowRecommendations);

    const [loadMoreRTV,setLoadMoreRTV] = useState(true);
    const [loadMoreSTV,setLoadMoreSTV] = useState(true);
    //RTV =  Recommended TVShow, STV = Similar TVShow
    const [rtvNumber,setRTVNumber] = useState(6);
    const [stvNumber,setSTVNumber] = useState(6);

    useEffect(()=>{
        setRTVNumber(6);
        setSTVNumber(6);
        setLoadMoreRTV(true);
        setLoadMoreSTV(true);
    },[tvShow_id]);
    
    const handleLoadMoreBtnClick = (type,totalLength)=>{
        if(type=="RTV"){
            setRTVNumber(rtvNumber+6);
            if(rtvNumber+6>=totalLength){
                setLoadMoreRTV(false);
            }
        }
        else{
            setSTVNumber(stvNumber+6);
            if(stvNumber+6>=totalLength){
                setLoadMoreSTV(false);
            }
        }
    }

    if(!similarTVShows || !tvShowRecommendations)   return null;

    return (
        <div className="mt-4 ml-3 sm:ml-9">
            {!similarTVShows.length ? null :             
            <div>
                <h1 className="text-white pb-2 sm:pb-5 pl-2 text-xl md:text-3xl">Similar TVShows</h1>
                <div className="hidden md:flex flex-wrap">{similarTVShows.map(tvShow => <div className="py-2"><Mo_Tv_Card posterPath={tvShow.poster_path} id={tvShow.id} type={"TVShow"}/></div>)}</div>    
                <div className="md:hidden flex flex-wrap">{similarTVShows.slice(0,stvNumber).map(tvShow => <div className="py-2"><Mo_Tv_Card posterPath={tvShow.poster_path} id={tvShow.id} type={"TVShow"}/></div>)}</div>
                {loadMoreSTV && <div className="md:hidden" onClick={()=>{handleLoadMoreBtnClick("STV",similarTVShows.length)}}><LoadMoreBtn/></div>}    
            </div>}
            {!tvShowRecommendations.length ? null :             
            <div className="mt-3 sm:mt-6">
                <h1 className="text-white pb-2 sm:pb-5 pl-2 text-xl md:text-3xl">Recommended TVShows</h1>
                <div className="hidden md:flex flex-wrap">{tvShowRecommendations.map(tvShow => <div className="py-2"><Mo_Tv_Card posterPath={tvShow.poster_path} id={tvShow.id} type={"TVShow"}/></div>)}</div>
                <div className="md:hidden flex flex-wrap">{tvShowRecommendations.slice(0,rtvNumber).map(tvShow => <div className="py-2"><Mo_Tv_Card posterPath={tvShow.poster_path} id={tvShow.id} type={"TVShow"}/></div>)}</div>    
                {loadMoreRTV && <div className="md:hidden" onClick={()=>{handleLoadMoreBtnClick("RTV",tvShowRecommendations.length)}}><LoadMoreBtn/></div>}
            </div>}
        </div>
    );
};

export default MainTVShowRecommendations;
