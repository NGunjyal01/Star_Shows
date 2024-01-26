import { NavLink } from "react-router-dom"

const TopMenu = () => {

    return (
        <div className="hidden md:block col-span-4 mx-auto z-20">
            <NavLink to="/browse" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Home</NavLink>
            <NavLink to="/movies" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Movies</NavLink>
            <NavLink to="/tvshows" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>TV Shows</NavLink>
            <NavLink to="/watchlist" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Watchlist</NavLink>
            <NavLink to="/genre/35" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Genre</NavLink>
            <NavLink to="/GPTSearch" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>GPT Search</NavLink>
        </div>
    );
};

export default TopMenu;
