import { useState } from "react";
import { getFirestore,doc, updateDoc,collection,setDoc, arrayUnion } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const WatchlistIcon = ({ id,poster_path }) => {

    const [hover, setHover] = useState(false);
    const {pathname} = useLocation();
    const type = pathname.slice(1,8)==="tvshows"?"TVShows":"Movies";
    const user = useSelector((store) => store?.user?.uid);
    const handleWatchlistButtonClick = async() => {
        if(!user)    return;
        const db = getFirestore();
        const docRef = doc(db, "Users", user);
        if(type==="Movies"){
            await updateDoc(docRef, {
                movies: arrayUnion({id:id,poster_path:poster_path})
            });
        }
        else{
            await updateDoc(docRef, {
                tvShows: arrayUnion({id:id,poster_path:poster_path}),
            });
        }
        console.log("done");
    };

    return (
    <>
        {hover && (
        <div className="absolute -mt-28 left-[25%] h-10 w-28 bg-white bg-opacity-70 rounded-full flex justify-center items-center">
            <div className="text-black font-semibold">Wishlist</div>
        </div>
        )}
        <div
        className="w-14 aspect-square rounded-lg bg-white bg-opacity-70 flex justify-center items-center"
        onMouseEnter={() => {
            setHover(true);
        }}
        onMouseLeave={() => {
            setHover(false);
        }}
        onClick={() => {
            handleWatchlistButtonClick();
        }}
        >
        <div className="text-4xl text-black">+</div>
        </div>
    </>
    );
};

export default WatchlistIcon;
