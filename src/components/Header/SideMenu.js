import { useState } from "react";
import { PiUserListFill } from "react-icons/pi";
import { auth } from "../../utils/firebase";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

const SideMenu = () => {
    
    const [isOpen,setIsOpen] = useState(false);

    const handleMenuClick = () =>{
        setIsOpen(false);
    };
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
    };

    return (
        <>
            <div className="absolute right-5 md:right-10">
                <span class="changecolor"> 
                    <PiUserListFill className="UserIcon"
                    onmouseover={({ target }) => (target.style.color = "#00ADB5")}
                    onmouseout={({ target }) => (target.style.color = "#EEEEEE")}
                    onClick={() => {setIsOpen(!isOpen)}}
                    />
                </span>
            </div>
            {isOpen && <div className="absolute right-5 md:right-10 top-12 md:top-14 bg-[#EEEEEE] bg-opacity-60 text-black rounded-md">
                <ul className="transition-all duration-300 ease-in-out items-center"> 
                    <li className="px-4 py-2 w-full md:hover:bg-[#00ADB5] md:hover:rounded-t-md"><NavLink to="/account" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`} onClick={handleMenuClick}> My Account</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/browse" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`} onClick={handleMenuClick}>Home</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/movies" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`} onClick={handleMenuClick}>Movies</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/tvshows" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >TV Shows</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/watchlist" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >Watchlist</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/genre/35" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >Genre</NavLink></li>
                    <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]"><NavLink to="/GPTSearch" className={({isActive}) => `${isActive?"text-[#00ADB5]":""}`}onClick={handleMenuClick} >GPT Search</NavLink></li>
                    <li className="px-4 py-2 w-full md:hover:bg-[#00ADB5] md:hover:rounded-b-md"><button onClick={handleSignOut}> Sign Out </button> </li>
                </ul>
            </div>}
        </>
    );
};

export default SideMenu;
