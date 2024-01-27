import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getFirestore } from "firebase/firestore";
import MovieList from "./Common Features/MovieList";
import TVShowList from "./Common Features/TVShowList";

const Watchlist = () => {

  const [movies,setMovies] = useState(null);
  const [tvShows,setTVShows] = useState(null);
  const user = useSelector(store => store?.user?.uid);
  const db = getFirestore();
  const docRef = doc(db, "Users",user);
  getDoc(docRef).then((docSnap)=>{
    if (docSnap.exists()) {
      setMovies(docSnap.data().movies);
      setTVShows(docSnap.data().tvShows)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  })

  return(
    <div className="bg-black h-screen pt-[10%]">
      <MovieList title={"Movies"} movies={movies}/>
      <TVShowList title={"TVShows"} tvShows={tvShows}/>
    </div>
  );
};

export default Watchlist;
