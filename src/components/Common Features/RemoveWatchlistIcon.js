import { useState } from "react";
import { getFirestore,doc,updateDoc,arrayRemove } from "firebase/firestore";
import { useSelector } from "react-redux";

const RemoveWatchlistIcon = ({ id,poster_path,type }) => {

    const user = useSelector((store) => store?.user?.uid);
    const handleWatchlistButtonClick = async() => {
        if(!user)    return;
        const db = getFirestore();
        const docRef = doc(db, "Users", user);
        if(type==="Movies"){
            await updateDoc(docRef, {
                movies: arrayRemove({id:id,poster_path:poster_path})
            });
        }
        else{
            await updateDoc(docRef, {
                tvShows: arrayRemove({id:id,poster_path:poster_path}),
            });
        }
        console.log("removed");
    };

    return (
        <div className="w-[90%] rounded-lg bg-white bg-opacity-70 flex justify-center items-center md:hover:scale-90" onClick={handleWatchlistButtonClick}>
            <div className="text-4xl text-black">-</div>
        </div>
    );
};

export default RemoveWatchlistIcon;
