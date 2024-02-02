import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getFirestore } from "firebase/firestore";
import RemoveWatchlistIcon from "./Common Features/RemoveWatchlistIcon";
import Mo_Tv_Card from "./Common Features/Mo_Tv_Card";

const Watchlist = () => {

  const [movies,setMovies] = useState(null);
  const [tvShows,setTVShows] = useState(null);
  const [showRemove,setShowRemove] = useState(false);
  const user = useSelector(store => store?.user?.uid);
  const db = getFirestore();
  const docRef = doc(db, "Users",user);
  getDoc(docRef).then((docSnap)=>{
    if (docSnap.exists()) {
      setMovies(docSnap.data().movies);
      setTVShows(docSnap.data().tvShows);
    } else {
      // docSnap.data() will be undefined in this case
    }
  })
  
  if(!movies || !tvShows) return null;

  const totalItem = movies.length + tvShows.length;

  return !totalItem?<div className="text-white text-4xl font-bold bg-[#141414] h-screen -mb-48 flex justify-center pt-[20%]"> Your Watchlist is Empty</div>: (
    <div className={`bg-[#141414] pt-[20%] sm:pt-[7%] pl-2 sm:pl-7 ${totalItem<=9?"h-screen sm:-mb-48 -mb-32":" h-full"}`}>
      <div className="flex justify-between text-white mb-10 ml-4 sm:ml-2">
        <h1 className="text-xl sm:text-3xl font-bold">Your Watchlist</h1>
        <button className="bg-white text-black mr-10 sm:w-28 w-20 sm:h-10 h-7 rounded-lg" onClick={()=>{setShowRemove(!showRemove)}}>{showRemove?"Done":"Remove"}</button>
      </div>
      <div className="flex flex-wrap">
        {movies.map(movie => <div key={movie.id} className="flex flex-col items-center mb-4">
          <Mo_Tv_Card posterPath={movie.poster_path} id={movie.id} type={"Movie"}/>
          {showRemove && <RemoveWatchlistIcon id={movie.id} poster_path={movie.poster_path} type={"Movies"}/>}
        </div>)}
        {tvShows.map(tvShow => <div key={tvShow.id} className="flex flex-col items-center mb-4">
          <Mo_Tv_Card posterPath={tvShow.poster_path} id={tvShow.id} type={"TVShow"}/>
          {showRemove && <RemoveWatchlistIcon id={tvShow.id} poster_path={tvShow.poster_path} type={"TVShows"}/>}
        </div>)}
      </div>
    </div>
  );
};

export default Watchlist;
