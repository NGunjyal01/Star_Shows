import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { addMovies,addTVShows } from "../../utils/Slices/WatchlistSlice";
import { useLocation } from "react-router-dom";

const WatchlistIcon = ({ id }) => {

    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const type = pathname.slice(1,8)==="tvshows"?"TVShows":"Movies";
    const user = useSelector((store) => store?.user?.uid);
    const handleWatchlistButtonClick = (id) => {
        if(!user)    return;
        // const db = getDatabase();
        // set(ref(db, "users/" + user), {
        //   id: id,
        // });
        console.log(id);
        // if(type==="Movies"){
        //     dispatch(addMovies(id));
        // }
        // else{
        //     dispatch(addTVShows(id));
        // }

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
            handleWatchlistButtonClick(id);
        }}
        >
        <div className="text-4xl text-black">+</div>
        </div>
    </>
    );
};

export default WatchlistIcon;
