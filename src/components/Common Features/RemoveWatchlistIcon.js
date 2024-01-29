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
        <div className="w-[90%] sm:h-10 h-7 rounded-lg bg-white flex justify-center md:hover:scale-90 mt-2" onClick={handleWatchlistButtonClick}>
            <div className="text-4xl text-black -mt-2.5 sm:-mt-1">-</div>
            <Toaster/>
        </div>
    );
};

export default RemoveWatchlistIcon;
