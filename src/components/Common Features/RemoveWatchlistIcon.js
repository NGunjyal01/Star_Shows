import { getFirestore,doc,updateDoc,arrayRemove } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
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
        return toast.success('Successfully Removed From Watchlist');
    };

    return (
        <div className="absolute mt-2 ml-[4.5rem] sm:ml-24 px-2 sm:px-3 py-1 bg-white hover:bg-opacity-70 rounded-full" onClick={handleWatchlistButtonClick}>
            <div className="text-xs sm:text-base">X</div>
            <Toaster/>
        </div>
    );
};

export default RemoveWatchlistIcon;
