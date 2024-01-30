import { useState } from "react";
import { getFirestore,doc,updateDoc,arrayUnion,getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';

const AddWatchlistIcon = ({ id,poster_path,type }) => {

    const [hover, setHover] = useState(false);
    const [movies,setMovies] = useState(null);
    const [tvShows,setTVShows] = useState(null);
    const user = useSelector((store) => store?.user?.uid);

    const db = getFirestore();
    const docRef = doc(db, "Users", user);
    getDoc(docRef).then((docSnap)=>{
        if (docSnap.exists()) {
            setMovies(docSnap.data().movies);
            setTVShows(docSnap.data().tvShows);
        }
    })

    const handleAddWatchlistButtonClick = async() => {
        if(!user)    return;
        if(type==="Movie"){
            if(!movies?.find(obj => obj.id===id)){
                await updateDoc(docRef, {
                    movies: arrayUnion({id:id,poster_path:poster_path})
                });
                return toast.success('Added To Your Watchlist');
            }
            else{
                return toast.error("Already In Your Watchlist");
            }
        }
        else{
            if(!tvShows?.find(obj => obj.id===id)){
                await updateDoc(docRef, {
                    tvShows: arrayUnion({id:id,poster_path:poster_path}),
                });
                return toast.success('Added To Your Watchlist');
            }
            else{
                return toast.error("Already In Your Watchlist");
            }
        }
    };

    return (
        <div className="w-16 h-8 sm:h-14 rounded-lg bg-white bg-opacity-70 flex justify-center" 
        onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} onClick={handleAddWatchlistButtonClick}>
            {hover && (<div className="hidden absolute -mt-14 h-10 w-28 bg-white rounded-full sm:flex justify-center items-center">
                <div className="text-black font-semibold">Wishlist</div>
            </div>)}
            <div className="text-2xl sm:text-4xl text-black sm:mt-1.5">+</div>
        </div>
    );
};

export default AddWatchlistIcon;
