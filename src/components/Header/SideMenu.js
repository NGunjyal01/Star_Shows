import { useState } from "react";
import { PiUserListFill } from "react-icons/pi";
import { auth } from "../../utils/firebase";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { headers } from "../../utils/constants";

const SideMenu = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
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
            onClick={() => { setIsOpen(!isOpen) }}/>
        </span>
        </div>
        {isOpen && (
        <div className="absolute right-5 md:right-10 top-12 md:top-14 bg-[#EEEEEE] bg-opacity-60 text-black rounded-md">
            <ul className="transition-all duration-300 ease-in-out items-center">
            <li className="px-4 py-2 w-full md:hover:bg-[#00ADB5] md:hover:rounded-t-md">
                <NavLink to="/account" className={({ isActive }) => `${isActive ? "text-[#00ADB5]" : ""}`} onClick={handleMenuClick}>
                My Account
                </NavLink>
            </li>
            {headers.map((header) => (
                <li className="block sm:hidden px-4 py-2 w-full md:hover:bg-[#00ADB5]">
                <NavLink to={header.to} className={({ isActive }) => `${isActive ? "text-[#00ADB5]" : ""}`} onClick={handleMenuClick}>
                    {header.name}
                </NavLink>
                </li>
            ))}
            <li className="px-4 py-2 w-full md:hover:bg-[#00ADB5] md:hover:rounded-b-md">
                <button onClick={handleSignOut}> Sign Out </button>
            </li>
            </ul>
        </div>
        )}
    </>
    );
};

export default SideMenu;
