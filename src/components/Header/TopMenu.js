import { NavLink } from "react-router-dom"

const TopMenu = () => {

    return (
        <div className="hidden md:block col-span-4 mx-auto text-lg z-20">
            <NavLink to="/body/browse" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Home</NavLink>
            <NavLink to="/body/movies" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Movies</NavLink>
            <NavLink to="/body/tvshows" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>TV Shows</NavLink>
            <NavLink to="/body/mylist" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>My List</NavLink>
            <NavLink to="/body/genre/35" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>Genre</NavLink>
            <NavLink to="/body/GPTSearch" className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>GPT Search</NavLink>
        </div>
    );
};

export default TopMenu;
