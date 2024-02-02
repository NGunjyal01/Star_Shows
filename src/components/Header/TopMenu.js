import { NavLink } from "react-router-dom";
import {headers} from "../../utils/constants";

const TopMenu = () => {

    return (
        <div className="hidden md:block col-span-4 mx-auto z-20">
            {headers.map(header => <NavLink key={header.name} to={header.to} className={({isActive}) => `px-2 md:hover:text-[#00ADB5] ${isActive?"text-[#00ADB5]":""}`}>{header.name}</NavLink>)}
        </div>
    );
};

export default TopMenu;
