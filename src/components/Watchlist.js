import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getFirestore } from "firebase/firestore";
import MovieCard from "./Common Features/MovieCard";
import TVShowCard from "./Common Features/TVShowCard";
import RemoveWatchlistIcon from "./Common Features/RemoveWatchlistIcon";

const Watchlist = () => {

  const [movies,setMovies] = useState(null);
  const [tvShows,setTVShows] = useState(null);
  const user = useSelector(store => store?.user?.uid);
  const db = getFirestore();
  const docRef = doc(db, "Users",user);
  getDoc(docRef).then((docSnap)=>{
    if (docSnap.exists()) {
      setMovies(docSnap.data().movies);
      setTVShows(docSnap.data().tvShows);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  })
  
  if(!movies || !tvShows) return null;

  return (!movies.length && !tvShows.length)?<div className="text-white bg-black h-screen pt-[10%]"> Empty</div>: (
    <div className="bg-black h-screen pt-[10%]">
      <div className="flex flex-wrap">
        {movies.map(movie => <div key={movie.id} className="flex flex-col items-center">
          <MovieCard posterPath={movie.poster_path} movie_id={movie.id}/>
          <RemoveWatchlistIcon id={movie.id} poster_path={movie.poster_path} type={"Movies"}/>
        </div>)}
        {tvShows.map(tvShow => <div key={tvShow.id} className="flex flex-col items-center">
          <TVShowCard posterPath={tvShow.poster_path} movie_id={tvShow.id}/>
          <RemoveWatchlistIcon id={tvShow.id} poster_path={tvShow.poster_path} type={"TVShows"}/>
        </div>)}
      </div>
    </div>
  );
};

export default Watchlist;
